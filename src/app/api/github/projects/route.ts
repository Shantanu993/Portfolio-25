/**
 * =============================================================================
 * GITHUB PROJECTS API ROUTE
 * =============================================================================
 * Fetches and syncs projects from GitHub repositories.
 * TODO: Add your GitHub personal access token to environment variables.
 * =============================================================================
 */

import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

/**
 * GET /api/github/projects - Fetch projects from GitHub
 */
export async function GET() {
  try {
    // TODO: Replace with your GitHub username
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "yourusername";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional, for higher rate limits

    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forked repos and format the data
    const projects = repos
      .filter((repo) => !repo.name.includes("fork")) // Adjust filter as needed
      .map((repo) => ({
        githubId: repo.id.toString(),
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        language: repo.language,
        createdAt: new Date(repo.created_at),
        updatedAt: new Date(repo.updated_at),
        pushedAt: new Date(repo.pushed_at),
      }));

    return NextResponse.json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects from GitHub" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/github/projects - Sync GitHub projects to database
 */
export async function POST() {
  try {
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "yourusername";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    let synced = 0;
    let created = 0;
    let updated = 0;

    for (const repo of repos) {
      const existingProject = await prisma.project.findFirst({
        where: { githubUrl: repo.html_url },
      });

      if (existingProject) {
        // Update existing project with latest GitHub data
        await prisma.project.update({
          where: { id: existingProject.id },
          data: {
            githubStars: repo.stargazers_count,
            githubForks: repo.forks_count,
            updatedAt: new Date(),
          },
        });
        updated++;
      } else {
        // Create new project from GitHub data
        await prisma.project.create({
          data: {
            title: repo.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
            slug: repo.name.toLowerCase(),
            shortDescription: repo.description || "No description provided",
            fullDescription: repo.description || "No description provided",
            technologies: repo.topics || [],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || null,
            githubStars: repo.stargazers_count,
            githubForks: repo.forks_count,
            status: "PUBLISHED",
            featured: repo.stargazers_count > 10, // Auto-feature popular repos
          },
        });
        created++;
      }
      synced++;
    }

    return NextResponse.json({
      success: true,
      message: `Synced ${synced} repositories`,
      created,
      updated,
    });
  } catch (error) {
    console.error("Error syncing GitHub projects:", error);
    return NextResponse.json(
      { success: false, message: "Failed to sync projects" },
      { status: 500 }
    );
  }
}
