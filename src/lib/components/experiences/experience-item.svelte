<script lang="ts">
	import type { Experience } from '$lib/data/experiences';
	import type { Snippet } from 'svelte';

	let { experience, children }: { experience: Experience; children: Snippet } = $props();
</script>

<div class="screen-line-after space-y-4 py-4">
	<div class="flex items-center space-x-2">
		<span class="flex size-6 shrink-0 items-center justify-center">
			{#if experience.companyLogo}
				<img
					src={experience.companyLogo}
					alt={experience.company}
					width={24}
					height={24}
					class="rounded-full"
				/>
			{:else}
				<span class="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
			{/if}
		</span>

		<h3 class="font-heading text-lg leading-snug font-medium">
			{experience.company}
		</h3>

		{#if experience.current}
			<span class="relative ml-1 flex items-center justify-center">
				<span
					class="bg-success-foreground absolute inline-flex size-3 animate-ping rounded-full opacity-50"
				></span>
				<span class="bg-success-foreground relative inline-flex size-2 rounded-full"></span>
			</span>
		{/if}
	</div>

	<div
		class="before:bg-border relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px"
	>
		{@render children()}
	</div>
</div>
