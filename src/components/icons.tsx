import {
  Home,
  User,
  Layers,
  Wrench,
  Boxes,
  HelpCircle,
  Mail,
  Monitor,
  Server,
  Database,
  Code2,
  Plug,
  Gauge,
  Sun,
  Moon,
  Download,
  MapPin,
  Star,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Circle,
} from "lucide-react";
import type { ComponentType } from "react";

type IconProps = { className?: string; strokeWidth?: number };

/* Brand marks — lucide removed brand icons, so these are inline. */
function GithubMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/** Resolves the string icon ids used across site data to components. */
export const ICONS: Record<string, ComponentType<IconProps>> = {
  home: Home,
  user: User,
  layers: Layers,
  wrench: Wrench,
  boxes: Boxes,
  help: HelpCircle,
  mail: Mail,
  monitor: Monitor,
  server: Server,
  database: Database,
  code: Code2,
  plug: Plug,
  gauge: Gauge,
  sun: Sun,
  moon: Moon,
  download: Download,
  mapPin: MapPin,
  star: Star,
  arrowUpRight: ArrowUpRight,
  arrowRight: ArrowRight,
  chevronDown: ChevronDown,
  github: GithubMark,
  linkedin: LinkedinMark,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
