export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/api", "/_next/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
