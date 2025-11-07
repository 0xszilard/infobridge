import React from "react";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          <Star className="mr-2 h-3 w-3" />
          30+ Successful Projects
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Projects That Drive{" "}
          <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text pr-2 text-transparent">
            Real Results
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
          From MVP to enterprise scale, see how we've helped businesses increase revenue, raise funding, and scale their
          operations through strategic web development.
        </p>
      </div>
    </section>
  );
}
