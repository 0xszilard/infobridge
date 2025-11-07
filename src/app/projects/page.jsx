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
    "Explore real projects by InfoBridge — from startup automations to full SaaS platforms. See how we help founders scale with smart, tailored software systems.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
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
