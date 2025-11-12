import { getCategory, getPostsInCategory } from "@/lib/sanity/server";
import CategoryPosts from "@/components/blog/CategoryPosts";
import CategoryCTA from "@/components/blog/CategoryCTA";
import CategoryHeader from "@/components/blog/CategoryHeader";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { category } = await params;

  const currentCategory = await getCategory(category);
  return {
    title: currentCategory.metaTitle,
    description: currentCategory.metaDescription,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${category.slug}`,
    },
    openGraph: {
      title: currentCategory.metaTitle,
      description: currentCategory.metaDescription,
      siteName: "InfoBridge",
      type: "website",
      url: process.env.NEXT_PUBLIC_URL,
      images: [
        {
          url: "/opengraph-image.png",
          secureUrl: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: currentCategory.metaDescription,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@InfoBridge",
      title: currentCategory.metaTitle,
      description: currentCategory.metaDescription,
      creator: "@InfoBridge",
      images: {
        url: "/twitter-image.png",
        alt: currentCategory.metaDescription,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const [categoryPosts, currentCategory] = await Promise.all([getPostsInCategory(category), getCategory(category)]);

  if (!currentCategory) return notFound();

  return (
    <>
      <CategoryHeader currentCategory={currentCategory} />
      <CategoryPosts posts={categoryPosts} />
      <CategoryCTA />
    </>
  );
}
