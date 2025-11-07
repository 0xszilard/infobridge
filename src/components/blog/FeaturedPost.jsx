import { placeholder, scaleinsta } from "@/assets";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedPost({ post }) {
  if (!post) return null;
  return (
    <section className="container m-auto px-4 py-16 md:px-6">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold">Featured Article</h2>
        <p className="text-muted-foreground">Our most popular and impactful content</p>
      </div>
      <Card className="overflow-hidden p-0">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="aspect-video md:aspect-auto">
            <Image
              src={scaleinsta}
              width={600}
              height={400}
              alt="Featured article"
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <CardContent className="flex flex-col justify-center p-8">
            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <Badge variant="secondary">Web Development</Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Dec 15, 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />8 min read
                </div>
              </div>
              <h3 className="text-2xl font-bold">
                How We Built a $2M SaaS Platform in 3 Weeks: Complete Technical Breakdown
              </h3>
              <p className="text-muted-foreground">
                A detailed case study of how we helped TechFlow build their MVP using Next.js, TypeScript, and modern
                development practices. Learn the exact architecture and decisions that led to their successful Series A.
              </p>
              <Button asChild>
                <Link href="/blog/founder-stories/how-we-built-a-usd2m-saas-platform-in-3-weeks-complete-technical-breakdown">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
