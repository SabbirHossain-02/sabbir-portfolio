import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";
import { Smartphone } from "lucide-react";
import type { ComponentType } from "react";

type Brand = { Icon: IconType | ComponentType<{ size?: number }>; color: string };

// "neutral" resolves to the theme's ink colour in the sphere, so black/white
// brand marks stay legible in both light and dark.
const NEUTRAL = "neutral";

export const BRANDS: Record<string, Brand> = {
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: NEUTRAL },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { Icon: SiFramer, color: "#4d7bff" },
  "Responsive UI": { Icon: Smartphone, color: "#5b8cff" },

  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  Express: { Icon: SiExpress, color: NEUTRAL },
  "REST & GraphQL": { Icon: SiGraphql, color: "#E10098" },
  "JWT / OAuth": { Icon: SiJsonwebtokens, color: NEUTRAL },
  WebSockets: { Icon: SiSocketdotio, color: NEUTRAL },

  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088FF" },
};

export const isNeutral = (c: string) => c === NEUTRAL;
