import BlogHero from "@/components/blog/BlogHero";
import BlogCategories from "@/components/blog/BlogCategories";
import FeaturedPost from "@/components/blog/FeaturedPost";
import NewsLetter from "@/components/blog/NewsLetter";
import RecentPosts from "@/components/blog/RecentPosts";
import { getCategories, getRecentPosts, getSinglePost } from "@/lib/sanity/server";

const latestPosts = [
  {
    id: "react-performance",
    title: "React Performance Optimization: 10 Proven Techniques",
    href: "/blog/react-tutorials/react-performance-optimization-guide",
    excerpt:
      "Learn how to optimize your React applications for better performance and user experience. Includes code examples and real-world benchmarks.",
    category: "React Tutorials",
    date: "Dec 12, 2024",
    mainImage: "",
    imageAlt: "React Performance",
    author: "Sarah Chen",
    readTime: "12 min read",
  },
  {
    id: "mvp-to-series-a",
    title: "From MVP to Series A: A Complete Technical Roadmap",
    href: "/blog/business-growth/mvp-to-series-a-complete-guide",
    excerpt:
      "The technical decisions and architecture choices that can make or break your startup's funding journey. Based on our experience with 50+ funded startups.",
    category: "Business Growth",
    date: "Dec 10, 2024",
    mainImage: "",
    imageAlt: "Business Growth",
    author: "Marcus Rodriguez",
    readTime: "15 min read",
  },
  {
    id: "nextjs-15-guide",
    title: "Next.js 15: Complete Guide to New Features and Migration",
    href: "/blog/web-development/nextjs-15-complete-guide",
    excerpt:
      "Everything you need to know about Next.js 15, including new features, breaking changes, and step-by-step migration guide with code examples.",
    category: "Web Development",
    date: "Dec 8, 2024",
    mainImage: "",
    imageAlt: "Next.js Guide",
    author: "Alex Thompson",
    readTime: "10 min read",
  },
  {
    id: "web-trends-2025",
    title: "Web Development Trends 2025: What Every Business Should Know",
    href: "/blog/industry-insights/web-development-trends-2025",
    excerpt:
      "The technologies and approaches that will dominate web development in 2025, and how they'll impact your business decisions and budget planning.",
    category: "Industry Insights",
    date: "Dec 5, 2024",
    mainImage: "",
    imageAlt: "Industry Insights",
    author: "Sarah Chen",
    readTime: "8 min read",
  },
  {
    id: "ecommerce-case-study",
    title: "How We Increased E-commerce Revenue by 300% in 6 Months",
    href: "/blog/case-studies/ecommerce-platform-300-percent-growth",
    excerpt:
      "A detailed breakdown of the technical and UX improvements that tripled our client's online revenue. Includes performance metrics and conversion data.",
    category: "Case Studies",
    date: "Dec 3, 2024",
    mainImage: "",
    imageAlt: "Case Study",
    author: "Marcus Rodriguez",
    readTime: "14 min read",
  },
  {
    id: "react-server-components",
    title: "React Server Components: Complete Implementation Guide",
    href: "/blog/react-tutorials/react-server-components-guide",
    excerpt:
      "Master React Server Components with practical examples, performance comparisons, and best practices for production applications.",
    category: "React Tutorials",
    date: "Dec 1, 2024",
    mainImage: "",
    imageAlt: "React Tutorial",
    author: "Alex Thompson",
    readTime: "16 min read",
  },
];

export const metadata = {
  title: "Blog",
  description:
    "Get actionable tips, tutorials, and insights on software, automation, and growth strategies for online creators. Written by the team at InfoBridge.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/blog`,
  },
  openGraph: {
    title: "InfoBridge Blog | Smart Tech for Online Creators",
    description:
      "Explore the InfoBridge blog for practical guides, case studies, and strategies that help creators turn ideas into scalable tech.",
    siteName: "InfoBridge",
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InfoBridge Blog - Software & Growth Tips for Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@InfoBridge",
    title: "InfoBridge Blog | Tips, Tools & Strategy for Creators",
    description:
      "Discover how creators use software and automation to grow. Get expert insights and tech tutorials from the InfoBridge team.",
    creator: "@InfoBridge",
    images: {
      url: "/twitter-image.png",
      alt: "InfoBridge Blog - Tech & Growth for Online Creators",
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

export default async function BlogPage() {
  const [categories, featuredPost, recentPosts] = await Promise.all([
    getCategories(),
    getSinglePost("how-we-built-a-usd2m-saas-platform-in-3-weeks-complete-technical-breakdown"),
    getRecentPosts(),
  ]);

  return (
    <>
      <BlogHero />
      <BlogCategories categories={categories} />
      <FeaturedPost post={featuredPost} />
      <RecentPosts posts={recentPosts} />
      <NewsLetter />
    </>
  );
}
