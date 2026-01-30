/**
 * =============================================================================
 * ARTICLE SERVER ACTIONS
 * =============================================================================
 * Server actions for managing articles in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { ArticleStatus, ArticleSource } from "@prisma/client";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging
// TODO: Implement Medium, Dev.to, and Hashnode API integrations

export async function createArticle(data: {
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags: string[];
  status: ArticleStatus;
  source: ArticleSource;
  externalUrl?: string;
  readTime?: number;
  publishedAt?: Date;
}) {
  try {
    const article = await prisma.article.create({
      data: {
        ...data,
        readTime: data.readTime ?? 5,
      },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/articles");

    return { success: true, article };
  } catch (error) {
    console.error("Error creating article:", error);
    return { success: false, error: "Failed to create article" };
  }
}

export async function updateArticle(
  id: string,
  data: {
    title?: string;
    excerpt?: string;
    content?: string;
    coverImage?: string;
    tags?: string[];
    status?: ArticleStatus;
    source?: ArticleSource;
    externalUrl?: string;
    readTime?: number;
    publishedAt?: Date;
  }
) {
  try {
    const article = await prisma.article.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/articles");
    revalidatePath("/articles");

    return { success: true, article };
  } catch (error) {
    console.error("Error updating article:", error);
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({
      where: { id },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/articles");

    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    return { success: false, error: "Failed to delete article" };
  }
}

/**
 * Sync articles from external sources (Medium, Dev.to, Hashnode)
 * TODO: Implement actual API integrations
 */
export async function syncExternalArticles(source: ArticleSource) {
  try {
    // TODO: Implement API calls to fetch articles from external sources
    // For now, return a placeholder response
    
    return {
      success: false,
      error: `${source} integration not yet implemented. Add your API key and implement the sync logic.`,
    };
  } catch (error) {
    console.error(`Error syncing ${source} articles:`, error);
    return { success: false, error: `Failed to sync ${source} articles` };
  }
}
