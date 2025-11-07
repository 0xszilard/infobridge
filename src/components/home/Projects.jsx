import { client } from "@/lib/sanity/client";
import ProjectCard from "./ProjectCard";
import { LANDING_PROJECTS } from "@/lib/sanity/queries";
import Link from "next/link";

export default async function Projects() {
  const projects = await client.fetch(LANDING_PROJECTS);

  return (
    <section className="px-4 py-20 md:px-10">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Previous Works</h2>

      <div className="m-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <ProjectCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.mainImage}
            outcomes={item.outcomes}
            technologies={item.technologies}
            liveUrl={item.liveUrl}
            slug={item.slug}
          />
        ))}
      </div>
      <Link
        href="/booking"
        className="mx-auto mt-6 flex w-fit transform cursor-pointer flex-col rounded-lg border-2 border-gray-600 bg-linear-to-t from-gray-800 to-gray-600 px-4 py-2 text-center font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:opacity-90 active:scale-95 dark:border-gray-100 dark:from-gray-300 dark:to-gray-100 dark:text-black"
      >
        Get In Touch
        <span className="text-background/80 text-xs font-medium">Turn you ideas into revenue generating machines</span>
      </Link>
    </section>
  );
}
