import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { urlFor } from "@/lib/sanity/image";
import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function RecentPosts({ posts }) {
  return (
    <section className="container m-auto px-4 py-16 md:px-6">
      <h2 className="mb-2 text-2xl font-bold">Latest Articles</h2>
      <p className="text-muted-foreground mb-8">Fresh insights and tutorials from our development team</p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="group pt-0 transition-shadow hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={350}
                  height={200}
                  alt={post.mainImage.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="grow space-y-4">
              <div className="text-muted-foreground flex items-center justify-between gap-4 text-sm">
                <Badge variant="outline">{post.category.title}</Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
              </div>

              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                <Link href={`/blog/${post.category.slug}/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="text-muted-foreground text-sm">{post.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <User size={12} />
                {post.author}
              </div>
              <div className="text-muted-foreground flex items-center gap-1 text-sm">
                <Clock size={12} />
                {post.readTime} read
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
