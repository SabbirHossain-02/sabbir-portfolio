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
  Server,
  Lock,
  Footprints,
  ArrowRight,
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

function LinkedinMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* Speech bubble with a handset — reads as WhatsApp at icon size. */
function WhatsappMark({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5 5 16.2A9 9 0 1 1 8 19.2z" />
      <path d="M9 8.6c0-.4.3-.8.7-.8h.6c.2 0 .4.1.5.3l.6 1.4c.1.2 0 .5-.1.7l-.5.5a5.6 5.6 0 0 0 2.6 2.6l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.2.1.3.3.3.5v.6c0 .4-.4.7-.8.7A6 6 0 0 1 9 8.6z" />
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
  server: Server,
  lock: Lock,
  story: Footprints,
  arrowRight: ArrowRight,
  github: GithubMark,
  linkedin: LinkedinMark,
  facebook: FacebookMark,
  whatsapp: WhatsappMark,
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
