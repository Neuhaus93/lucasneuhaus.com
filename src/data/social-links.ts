import LinkedinImage from "@assets/images/link-icons/linkedin.webp";
import GithubImage from "@assets/images/link-icons/github.webp";

export type SocialLink = {
  icon: ImageMetadata;
  title: string;
  description?: string;
  href: string;
};

export const SOCIAL_LINKS: Record<"linkedin" | "github", SocialLink> = {
  linkedin: {
    icon: LinkedinImage,
    title: "LinkedIn",
    description: "lucas-neuhaus",
    href: "https://linkedin.com/in/lucas-neuhaus",
  },
  github: {
    icon: GithubImage,
    title: "GitHub",
    description: "Neuhaus93",
    href: "https://github.com/Neuhaus93",
  },
};
