import {
  BookOpen,
  BookMarked,
  Layers,
  Mail,
  MapPin,
  Building2,
  Clock,
  ArrowUpRight,
  Sun,
  Moon,
  Search,
  Download,
  Check,
  Copy,
  Code2,
  Phone,
  Plug,
  Gauge,
  Send,
  GraduationCap,
  ChevronRight,
  Circle,
} from "lucide-react";
import type { ComponentType } from "react";

type IconProps = { className?: string; strokeWidth?: number };

/* Brand mark — lucide removed brand icons, so this one is inline. */
function GithubMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

/** Resolves the string icon ids used across site data to components. */
export const ICONS: Record<string, ComponentType<IconProps>> = {
  book: BookOpen,
  repo: BookMarked,
  layers: Layers,
  mail: Mail,
  mapPin: MapPin,
  building: Building2,
  clock: Clock,
  external: ArrowUpRight,
  sun: Sun,
  moon: Moon,
  search: Search,
  download: Download,
  check: Check,
  copy: Copy,
  code: Code2,
  phone: Phone,
  plug: Plug,
  gauge: Gauge,
  send: Send,
  cap: GraduationCap,
  chevron: ChevronRight,
  github: GithubMark,
};

export function Icon({
  name,
  className = "h-4 w-4",
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Circle;
  return <Cmp className={`shrink-0 ${className}`} strokeWidth={strokeWidth} />;
}
