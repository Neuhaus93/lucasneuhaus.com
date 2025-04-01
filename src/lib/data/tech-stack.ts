export type TechStack = {
	key: string; // Unique identifier used to fetch the corresponding icon
	title: string; // Display name of the technology
	href: string; // Official website URL of the technology
	categories: string[];
	theme?: boolean; // If `true`, the icon changes based on dark and light mode
	// Icon paths:
	// - Default: ./public/tech-stack-icons/[key].svg
	// - Dark mode (if `theme: true`): ./public/tech-stack-icons/[key]-dark.svg
	// - Light mode (if `theme: true`): ./public/tech-stack-icons/[key]-light.svg
};

export const TECH_STACK: TechStack[] = [
	{
		key: 'typescript',
		title: 'TypeScript',
		href: 'https://www.typescriptlang.org/',
		categories: ['Language']
	},
	{
		key: 'js',
		title: 'JavaScript',
		href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		categories: ['Language']
	},
	{
		key: 'nodejs',
		title: 'Node.js',
		href: 'https://nodejs.org/',
		categories: ['Runtime Environment']
	},
	{
		key: 'bun',
		title: 'Bun',
		href: 'https://bun.sh/',
		categories: ['Runtime Environment']
	},
	{
		key: 'react',
		title: 'React',
		href: 'https://react.dev/',
		categories: ['Library', 'UI Library']
	},
	{
		key: 'nextjs2',
		title: 'Next.js',
		href: 'https://nextjs.org/',
		categories: ['Framework'],
		theme: true
	},
	{
		key: 'svelte',
		title: 'Svelte',
		href: 'https://svelte.dev/',
		categories: ['Framework']
	},
	{
		key: 'react-query',
		title: 'Tanstack Query',
		href: 'https://tanstack.com/query/latest',
		categories: ['Library']
	},
	{
		key: 'tailwindcss',
		title: 'Tailwind CSS',
		href: 'https://tailwindcss.com/',
		categories: ['Framework']
	},
	{
		key: 'shadcn-ui',
		title: 'shadcn/ui',
		href: 'https://ui.shadcn.com/',
		categories: ['Library', 'Component Library'],
		theme: true
	},
	{
		key: 'radixui',
		title: 'Radix UI',
		href: 'https://www.radix-ui.com/',
		categories: ['Library', 'Component Library'],
		theme: true
	},
	{
		key: 'material-ui',
		title: 'Material UI',
		href: 'https://mui.com/material-ui/',
		categories: ['Library', 'Component Library']
	},
	{
		key: 'motion',
		title: 'Motion',
		href: 'https://motion.dev/',
		categories: ['Library', 'Animation']
	},
	{
		key: 'redux',
		title: 'Redux',
		href: 'https://redux.js.org/',
		categories: ['State Management']
	},
	{
		key: 'git',
		title: 'Git',
		href: 'https://git-scm.com/',
		categories: ['Version Control']
	},
	{
		key: 'docker',
		title: 'Docker',
		href: 'https://www.docker.com/',
		categories: ['Containerization']
	},
	{
		key: 'mysql',
		title: 'MySQL',
		href: 'https://www.mysql.com/',
		categories: ['Database']
	},
	{
		key: 'mongodb',
		title: 'MongoDB',
		href: 'https://www.mongodb.com/',
		categories: ['Database']
	},
	{
		key: 'redis',
		title: 'Redis',
		href: 'https://redis.io/',
		categories: ['Database']
	},
	{
		key: 'figma',
		title: 'Figma',
		href: 'https://www.figma.com/',
		categories: ['Tools', 'Design']
	},
	{
		key: 'chatgpt',
		title: 'ChatGPT',
		href: 'https://chatgpt.com/',
		categories: ['Tools', 'AI'],
		theme: true
	}
];
