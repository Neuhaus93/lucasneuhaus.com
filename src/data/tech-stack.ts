import BunImage from "@assets/images/tech-stack-icons/bun.svg";
import ChatgptDarkImage from "@assets/images/tech-stack-icons/chatgpt-dark.svg";
import ChatgptLightImage from "@assets/images/tech-stack-icons/chatgpt-light.svg";
import DockerImage from "@assets/images/tech-stack-icons/docker.svg";
import FigmaImage from "@assets/images/tech-stack-icons/figma.svg";
import GitImage from "@assets/images/tech-stack-icons/git.svg";
import GithubCopilotLightImage from "@assets/images/tech-stack-icons/github-copilot-light.svg";
import GithubCopilotDarkImage from "@assets/images/tech-stack-icons/github-copilot-dark.svg";
import JavascriptImage from "@assets/images/tech-stack-icons/js.svg";
import MaterialImage from "@assets/images/tech-stack-icons/material-ui.svg";
import MotionImage from "@assets/images/tech-stack-icons/motion.svg";
import MysqlImage from "@assets/images/tech-stack-icons/mysql.svg";
import NextDarkImage from "@assets/images/tech-stack-icons/nextjs2-dark.svg";
import NextLightImage from "@assets/images/tech-stack-icons/nextjs2-light.svg";
import NodeImage from "@assets/images/tech-stack-icons/nodejs.svg";
import PostgresImage from "@assets/images/tech-stack-icons/postgres.svg";
import RadixDarkImage from "@assets/images/tech-stack-icons/radixui-dark.svg";
import RadixLightImage from "@assets/images/tech-stack-icons/radixui-light.svg";
import ReactImage from "@assets/images/tech-stack-icons/react.svg";
import ReactQueryImage from "@assets/images/tech-stack-icons/reactquery.svg";
import RedixImage from "@assets/images/tech-stack-icons/redis.svg";
import ReduxImage from "@assets/images/tech-stack-icons/redux.svg";
import ShardcnDarkImage from "@assets/images/tech-stack-icons/shadcn-ui-dark.svg";
import ShadcnLightImage from "@assets/images/tech-stack-icons/shadcn-ui-light.svg";
import SvelteImage from "@assets/images/tech-stack-icons/svelte.svg";
import TailwindImage from "@assets/images/tech-stack-icons/tailwindcss.svg";
import TypescriptImage from "@assets/images/tech-stack-icons/typescript.svg";

export type TechStack = {
  key: string; // Unique identifier used to fetch the corresponding icon
  title: string; // Display name of the technology
  href: string; // Official website URL of the technology
  categories: string[];
  theme?: boolean; // If `true`, the icon changes based on dark and light mode
  icon: ImageMetadata | [ImageMetadata, ImageMetadata];
  // Icon paths:
  // - Default: ./public/tech-stack-icons/[key].svg
  // - Dark mode (if `theme: true`): ./public/tech-stack-icons/[key]-dark.svg
  // - Light mode (if `theme: true`): ./public/tech-stack-icons/[key]-light.svg
};

export const TECH_STACK: TechStack[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    icon: TypescriptImage,
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    icon: JavascriptImage,
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
    icon: NodeImage,
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
    icon: BunImage,
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    icon: ReactImage,
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
    icon: [NextLightImage, NextDarkImage],
  },
  {
    key: "svelte",
    title: "Svelte",
    href: "https://svelte.dev/",
    categories: ["Framework"],
    icon: SvelteImage,
  },
  {
    key: "react-query",
    title: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
    categories: ["Library"],
    icon: ReactQueryImage,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    icon: TailwindImage,
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    icon: [ShadcnLightImage, ShardcnDarkImage],
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    icon: [RadixLightImage, RadixDarkImage],
  },
  {
    key: "material-ui",
    title: "Material UI",
    href: "https://mui.com/material-ui/",
    categories: ["Library", "Component Library"],
    icon: MaterialImage,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
    icon: MotionImage,
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
    icon: ReduxImage,
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    icon: GitImage,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    icon: DockerImage,
  },
  {
    key: "postgres",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    icon: PostgresImage,
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    icon: MysqlImage,
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    icon: RedixImage,
  },
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
    icon: FigmaImage,
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    theme: true,
    icon: [ChatgptLightImage, ChatgptDarkImage],
  },
  {
    key: "github-copilot",
    title: "Github Copilot",
    href: "https://github.com/features/copilot",
    categories: ["Tools", "AI"],
    theme: true,
    icon: [GithubCopilotLightImage, GithubCopilotDarkImage],
  },
];
