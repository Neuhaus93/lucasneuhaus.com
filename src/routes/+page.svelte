<script lang="ts">
	import HeaderMotion from '$lib/components/header-motion.svelte';
	import Header from '$lib/components/header.svelte';
	import Overview from '$lib/components/overview/index.svelte';
	import SocialLinks from '$lib/components/social-links/index.svelte';
</script>

{#snippet pattern()}
	<div
		class={'border-grid relative flex h-4 w-full border-x' +
			' before:absolute before:-left-[100vw] before:h-4 before:w-[200vw]' +
			' before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5'}
	></div>
{/snippet}

<HeaderMotion />

<div class="max-w-screen overflow-x-hidden">
	<div class="mx-auto px-4 md:max-w-3xl">
		<Header />
		{@render pattern()}

		<main>
			<Overview />
			{@render pattern()}

			<SocialLinks />
			{@render pattern()}
		</main>
	</div>
</div>
