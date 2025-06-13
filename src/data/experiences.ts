import BairesDevImage from "@assets/images/companies/bairesdev.webp";
import LazzyImage from "@assets/images/companies/lazzy.webp";
import ConvertImage from "@assets/images/companies/convert.png";
import SperoLearningImage from "@assets/images/companies/spero-learning.webp";

export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "school"
  | "idea";

export type ExperiencePosition = {
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills: string[];
  expanded?: boolean;
};

export type Experience = {
  company: string;
  companyLogo?: ImageMetadata;
  positions: ExperiencePosition[];
  current?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Spero Learning",
    companyLogo: SperoLearningImage,
    positions: [
      {
        title: "Senior Full-stack Developer",
        year: "05.2023 - present",
        employmentType: "Full-time",
        icon: "code",
        description: `
- Contributing to a curriculum platform that allows schools and teachers to build and manage educational content including courses, lessons, and quizzes.
- Working with a modern fullstack TypeScript stack including Next.js, TailwindCSS, tRPC, MariaDB, and React Query, while progressively migrating legacy PHP code to a scalable and maintainable Next.js architecture.
- Building reusable, accessible, and performance‑focused UI components with strong attention to UX consistency.
- Participating in cross‑functional planning and product design, collaborating with design, QA, and backend teams to ship reliable and testable features.
- Applying modern engineering practices including automated testing with Vitest, type safety with TypeScript, and API‑first development using tRPC.
`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Query",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
    ],
    current: true,
  },
  {
    company: "Lazzy",
    companyLogo: LazzyImage,
    positions: [
      {
        title: "Frontend Developer",
        year: "03.2022 - 03.2023",
        employmentType: "Full-time",
        icon: "code",
        description: `
- Developed new features using React and Material UI for a rapidly expanding sales admin panel.
- Diagnosed and remedied technical debt, updated older libraries used by the project, and refactored old code to have amore reliable application.
- Provided support to the back‐end team by devising clever solutions for intricate algorithms utilized in the processing of product discounts and
payments.
- Built new modern components alongside the Design and Product team.
- Please check my [recommendation letter](https://drive.google.com/file/d/1D-svPsvsQFkgMDkwbNGBQrjgjhlo0GX2/view).
`,
        skills: [
          "TypeScript",
          "React",
          "Material UI",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
    ],
    current: false,
  },
  {
    company: "Convert",
    companyLogo: ConvertImage,
    positions: [
      {
        title: "Frontend Developer",
        year: "02.2021 - 03.2022",
        employmentType: "Full-time",
        icon: "code",
        description: `
- Converted, alongside a small team an existing PHP project to a fully typed, almost fully tested Next.js application, with Typescript, Material UI
and Jest.
- Responsible for keeping the team’s code well organized, with constants Pull Request reviews.
- Decreased the amount of backend requests in almost 50% implementing the react‐query library, while also making the code easier to update
and maintain.
`,
        skills: [
          "TypeScript",
          "React",
          "Material UI",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        title: "Full Stack Developer",
        year: "2019 - 2022",
        employmentType: "Part-time",
        icon: "code",
        description: `
- Worked on multiple issues from Expensify App project, a multi‐platform React Native project which integrates WhatsApp‐like chat and a payment
system.
- Consulted a no‐code site building company with any issue that required a developer.
- Successfully completed many contracts on upwork.com and freelance.com.
`,
        skills: ["TypeScript", "React", "React Native"],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        title: "University of São Paulo - USP",
        year: "2013 - 2018",
        icon: "education",
        description: "- Bachelor's degree in Civil Engineering.",
        skills: ["Self-learning", "Teamwork", "Presentation"],
      },
    ],
  },
];
