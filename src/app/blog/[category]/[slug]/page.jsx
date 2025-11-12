import BlogContent from "@/components/blog/BlogContent";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity/image";
import { getSinglePost } from "@/lib/sanity/server";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getSinglePost(slug);
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${post.category.slug}/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: "InfoBridge",
      type: "website",
      url: process.env.NEXT_PUBLIC_URL,
      images: [
        {
          url: urlFor(post.mainImage).url(),
          secureUrl: urlFor(post.mainImage).url(),
          width: 1200,
          height: 630,
          alt: post.mainImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@InfoBridge",
      title: post.metaTitle,
      description: post.metaDescription,
      creator: "@InfoBridge",
      images: {
        url: urlFor(post.mainImage).url(),
        alt: post.mainImage.alt,
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) return notFound();

  return (
    <>
      <header className="p-4">
        <Button variant="link" asChild>
          <Link href={`/blog/${post.category.slug}`}>
            <ChevronLeft size={16} /> Back to category
          </Link>
        </Button>
      </header>
      <div className="bg-muted">
        <Image
          className="mx-auto"
          src={urlFor(post.mainImage).url()}
          width={900}
          height={500}
          alt={post.mainImage.alt}
        />
      </div>
      <div className="py-10">
        <h1 className="mx-auto max-w-3xl text-5xl font-bold">{post.title}</h1>
        <BlogContent data={post} />
      </div>
    </>
  );
}
