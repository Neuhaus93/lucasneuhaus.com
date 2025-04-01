export type ExperiencePositionIcon =
	| 'code'
	| 'design'
	| 'education'
	| 'business'
	| 'school'
	| 'idea';

export type ExperiencePosition = {
	id: string;
	title: string;
	year: string;
	employmentType?: string;
	description?: string;
	icon?: ExperiencePositionIcon;
	skills?: string[];
	expanded?: boolean;
};

export type Experience = {
	id: string;
	company: string;
	companyLogo?: string;
	positions: ExperiencePosition[];
	current?: boolean;
};

export const EXPERIENCES: Experience[] = [
	{
		id: '9e0e69a8-163c-4995-8d35-59a4bb1096c0',
		company: 'BairesDev',
		companyLogo: '/images/companies/bairesdev.webp',
		positions: [
			{
				id: '20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e',
				title: 'Senior Full-stack Developer',
				year: '05.2023 - present',
				employmentType: 'Full-time',
				icon: 'code',
				description: '- Worked on Spero Learning',
				skills: [
					'TypeScript',
					'Next.js',
					'React Query',
					'Tailwind CSS',
					'Agile',
					'Teamwork',
					'Research',
					'Problem-solving'
				],
				expanded: true
			}
		],
		current: true
	},
	{
		id: '1dda3031-9d2a-4d77-94d9-44c76e41e8c0',
		company: 'Lazzy',
		companyLogo: '/images/companies/lazzy.jpg',
		positions: [
			{
				id: '9ef47a61-bf59-4314-8d78-cfed2e9fd416',
				title: 'Frontend Developer',
				year: '03.2022 - 03.2023',
				employmentType: 'Full-time',
				icon: 'code',
				description: `
- Developed new features using React and Material UI for a rapidly expanding sales admin panel.
- Diagnosed and remedied technical debt, updated older libraries used by the project, and refactored old code to have amore reliable application.
- Provided support to the back‐end team by devising clever solutions for intricate algorithms utilized in the processing of product discounts and
payments.
- Built new modern components alongside the Design and Product team.
- Please check my [recommendation letter](https://drive.google.com/file/d/1D-svPsvsQFkgMDkwbNGBQrjgjhlo0GX2/view)
`,
				skills: ['TypeScript', 'React', 'Material UI', 'Teamwork', 'Research', 'Problem-solving'],
				expanded: true
			}
		],
		current: false
	},
	{
		id: 'a0c9b6e8-f390-4d02-8c19-b025649926c7',
		company: 'Convert',
		companyLogo: '/images/companies/convert.png',
		positions: [
			{
				id: '4fb954a1-c33a-4e40-8d9a-7cfb911a31e0',
				title: 'Frontend Developer',
				year: '02.2021 - 03.2022',
				employmentType: 'Full-time',
				icon: 'code',
				description: `
- Converted, alongside a small team an existing PHP project to a fully typed, almost fully tested Next.js application, with Typescript, Material UI
and Jest.
- Responsible for keeping the team’s code well organized, with constants Pull Request reviews.
- Decreased the amount of backend requests in almost 50% implementing the react‐query library, while also making the code easier to update
and maintain.
`,
				skills: ['TypeScript', 'React', 'Material UI', 'Teamwork', 'Research', 'Problem-solving'],
				expanded: true
			}
		]
	},
	{
		id: '8eaf2920-fa13-4544-8888-d4e04f52a92d',
		company: 'Freelance',
		positions: [
			{
				id: '64dee9da-773d-4dd3-90cb-2dd621c31bf6',
				title: 'Full Stack Developer',
				year: '2019 - 2022',
				employmentType: 'Part-time',
				icon: 'code',
				description: `
- Worked on multiple issues from Expensify App project, a multi‐platform React Native project which integrates WhatsApp‐like chat and a payment
system.
- Consulted a no‐code site building company with any issue that required a developer.
- Successfully completed many contracts on upwork.com and freelance.com.
`,
				skills: ['TypeScript', 'React', 'React Native']
			}
		]
	},
	{
		id: '8aaff17a-0362-47f1-a295-4460e13c016f',
		company: 'Education',
		positions: [
			{
				id: 'c47f5903-88ae-4512-8a50-0b91b0cf99b6',
				title: 'University of São Paulo - USP',
				year: '2013 - 2018',
				icon: 'education',
				description: "- Bachelor's degree in Civil Engineering.",
				skills: ['Self-learning', 'Teamwork', 'Presentation']
			}
		]
	}
];
