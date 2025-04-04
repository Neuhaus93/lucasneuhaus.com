<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Experiences from '$lib/components/experiences/experiences.svelte';
	import StickyHeader from '$lib/components/sticky-header.svelte';
	import Header from '$lib/components/header.svelte';
	import Overview from '$lib/components/overview/overview.svelte';
	import SocialLinks from '$lib/components/social-links/social-links.svelte';
	import TechStack from '$lib/components/tech-stack/tech-stack.svelte';
	import { cn } from '$lib/utils/cn';
</script>

{#snippet pattern()}
	<div
		class={cn(
			'border-grid relative flex h-4 w-full border-x',
			'before:absolute before:-left-[100vw] before:h-4 before:w-[200vw]',
			'before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5',
		)}
	></div>
{/snippet}

<StickyHeader />

<div class="max-w-screen overflow-x-hidden">
	<div class="mx-auto px-4 md:max-w-3xl">
		<Header />
		{@render pattern()}

		<main>
			<Overview />
			{@render pattern()}

			<SocialLinks />
			{@render pattern()}

			<About />
			{@render pattern()}

			<TechStack />
			{@render pattern()}

			<Experiences />
			{@render pattern()}
		</main>
	</div>
</div>
