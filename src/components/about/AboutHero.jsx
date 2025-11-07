import React from "react";
import { Badge } from "../ui/badge";
import { Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          <Award className="mr-2 h-3 w-3" />
          Est. 2019 • 30+ Platforms Launched
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          We Turn Expert Knowledge Into{" "}
          <span className="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
            Scalable Products
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
          Founded by builders who understand what creators and coaches actually need. Since 2019, we’ve helped over 30
          entrepreneurs turn their audience and expertise into real digital platforms that generate revenue — fast.
        </p>
      </div>
    </section>
  );
}
