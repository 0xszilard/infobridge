import { client } from "@/lib/sanity/client";
import { CATEGORIES_QUERY, POSTS, PROJECTS } from "@/lib/sanity/queries";

export default async function sitemap() {
  const blogPosts = await client.fetch(POSTS);
  const categories = await client.fetch(CATEGORIES_QUERY);
  const projects = await client.fetch(PROJECTS);

  const projectEntries = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.25,
  }));
  const categoryEntries = categories.map((category) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/blog/${category.slug}`,
    lastModified: new Date(),
    priority: 0.25,
  }));
  const blogEntries = blogPosts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.category}/${post.slug}`,
    lastModified: new Date(),
    priority: 0.25,
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/booking`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/projects`,
      lastModified: new Date(),
      priority: 0.75,
    },
    ...projectEntries,
    {
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
      lastModified: new Date(),
      priority: 0.75,
    },
    ...categoryEntries,
    ...blogEntries,
    {
      url: `${process.env.NEXT_PUBLIC_URL}/imprint`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/privacy`,
      lastModified: new Date(),
      priority: 0.1,
    },
  ];
}
