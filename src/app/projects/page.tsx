import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live client sites and own products by Sabbir Hosen: corporate, e-commerce, hospitality, SaaS, tools and games.",
};

export default function ProjectsPage() {
  return <ProjectList />;
}
