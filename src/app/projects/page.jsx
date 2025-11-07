import { client } from "@/lib/sanity/client";
import { LANDING_PROJECTS } from "@/lib/sanity/queries";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import ProjectStats from "@/components/projects/ProjectStats";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Projects",
  description:
    "Explore real projects by InfoBridge - from custom automations to full SaaS platforms. See how we help online creators scale with smart, tailored tech.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
  },
  openGraph: {
    title: "Our Work | InfoBridge - Projects for Online Creators",
    description:
      "Take a look at what we've built. InfoBridge delivers high-impact software solutions for creators, coaches, and solopreneurs.",
    siteName: "InfoBridge",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}/projects`,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge portfolio preview - real projects for creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "InfoBridge Projects | Automation & SaaS for Creators",
    description:
      "See how we turn ideas into tools. Browse our portfolio of SaaS platforms, client dashboards, and automations built for online creators.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "Project showcase - InfoBridge for creators",
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

export default async function ProjectsPage() {
  const projects = await client.fetch(LANDING_PROJECTS);
  // TODO: Add this once corrected

  return (
    <>
      <ProjectsHero />
      {/* <FeaturedProject /> */}
      <ProjectsGrid projects={projects} />
      <ProjectStats />
      <ProjectsCTA />
    </>
  );
}
