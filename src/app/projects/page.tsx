import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Live client sites and own products by Sabbir Hossain: corporate, e-commerce, hospitality, SaaS, tools and games.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectList />;
}
