import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Github, TrendingUp } from "lucide-react";
import { placeholder } from "@/app/assets";

export default function ProjectCard({
  title,
  description,
  image,
  outcomes,
  technologies,
  liveUrl,
  repoUrl,
}) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image || placeholder}
          alt={title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span>Key Outcomes</span>
          </div>
          <ul className="text-muted-foreground ml-5 list-disc text-sm">
            {outcomes.map((outcome, index) => (
              <li key={index} className="mt-1">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={repoUrl} className="flex items-center gap-1">
            <Github className="h-3.5 w-3.5" />
            <span>Code</span>
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={liveUrl} className="flex items-center gap-1">
            <span>Live Demo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
