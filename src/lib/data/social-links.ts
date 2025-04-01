type SocialLink = {
	icon: string;
	title: string;
	description?: string;
	href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
	{
		icon: '/images/link-icons/linkedin.webp',
		title: 'LinkedIn',
		description: 'lucas-neuhaus',
		href: 'https://linkedin.com/in/lucas-neuhaus',
	},
	{
		icon: '/images/link-icons/github.webp',
		title: 'GitHub',
		description: 'Neuhaus93',
		href: 'https://github.com/Neuhaus93',
	},
];
