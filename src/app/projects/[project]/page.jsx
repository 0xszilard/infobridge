import BlogContent from "@/components/blog/BlogContent";
import { urlFor } from "@/lib/sanity/image";
import { getProject } from "@/lib/sanity/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { project } = await params;
  const data = await getProject(project);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/projects/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      siteName: "InfoBridge",
      type: "website",
      url: process.env.NEXT_PUBLIC_URL,
      images: [
        {
          url: urlFor(data.mainImage).url(),
          secureUrl: urlFor(data.mainImage).url(),
          width: 1200,
          height: 630,
          alt: data.mainImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@InfoBridge",
      title: data.metaTitle,
      description: data.metaDescription,
      creator: "@InfoBridge",
      images: {
        url: urlFor(data.mainImage).url(),
        alt: data.mainImage.alt,
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

export default async function ProjectPage({ params }) {
  const { project } = await params;
  const data = await getProject(project);

  if (!data) return notFound();

  return (
    <>
      <div className="bg-muted">
        <Image
          className="mx-auto"
          src={urlFor(data.mainImage).url()}
          width={900}
          height={500}
          alt={data.mainImage.alt}
        />
      </div>
      <div className="pb-10">
        <BlogContent data={data} />
      </div>
    </>
  );
}
