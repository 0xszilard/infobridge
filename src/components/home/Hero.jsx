import { CheckCircle, Code } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Script from "next/script";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="from-muted to-background relative bg-gradient-to-tr px-4 md:px-10">
      <div className="m-auto grid max-w-6xl gap-8 border-x px-2 pt-10 pb-20 md:px-10 lg:grid-cols-1 lg:gap-8">
        <div className="from-background to-background/0 absolute top-0 left-0 z-10 h-10 w-full bg-gradient-to-b" />
        <div className="flex flex-col items-center lg:items-center">
          <Badge variant="outline" className="mb-2">
            <Code size={12} className="mr-1" />
            Product-Building Team for Creators & Experts
          </Badge>
          <h1 className="mb-1 text-center text-3xl font-extrabold text-balance filter md:text-4xl md:font-bold lg:text-left">
            We Turn Your Audience Into{" "}
            <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent dark:drop-shadow-[0_0_10px_rgba(255,93,1,0.4)]">
              Scalable Products
            </span>
          </h1>
          <p className="text-muted-foreground mb-3 text-center text-balance md:text-lg">
            We help creators, coaches, and niche entrepreneurs turn their ideas, expertise, and audience into real,
            revenue-generating platforms — built fast, and built to last.
          </p>
          <div className="mb-5 space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium">Launch in 2-4 weeks, not months</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium">Built for scale with modern tech stack</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium">Ongoing support & maintenance included</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button className="full md:block" asChild>
              <Link href="/booking">Book a Free Discovery Call</Link>
            </Button>
            <Button className="hidden md:block" variant="outline">
              <Link href="/projects">View Our Previous Works</Link>
            </Button>
          </div>
        </div>
      </div>

      <hr className="absolute bottom-14 left-0 w-full" />

      <div className="from-background to-background/0 absolute bottom-0 left-0 z-10 h-10 w-full bg-gradient-to-t">
        <div className="m-auto hidden w-full max-w-6xl md:block">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary text-lg font-bold md:text-3xl">200+</div>
              <div className="text-muted-foreground text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-lg font-bold md:text-3xl">98%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-lg font-bold md:text-3xl">2.5x</div>
              <div className="text-muted-foreground text-sm">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-lg font-bold md:text-3xl">24/7</div>
              <div className="text-muted-foreground text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
