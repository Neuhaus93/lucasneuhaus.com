<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import Prose from '$lib/components/typography/prose.svelte';
	import type { ExperiencePosition } from '$lib/data/experiences';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import Tag from '$lib/components/tag.svelte';
	import ExperiencePositionIcon from './experience-position-icon.svelte';

	let { position }: { position: ExperiencePosition } = $props();
</script>

<div
	class="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4"
>
	<button
		class="group/experience block w-full text-left select-none [&[data-state=open]_.lucide-chevron-down]:rotate-180"
	>
		<div class="bg-background relative z-1 mb-1 flex items-center space-x-3">
			<ExperiencePositionIcon class="text-muted-foreground size-4 shrink-0" icon={position.icon} />

			<h4
				class="font-heading flex-1 font-medium text-balance underline-offset-4 group-hover/experience:underline"
			>
				{position.title}
			</h4>

			<ChevronDownIcon
				class="text-muted-foreground size-4 shrink-0 transition-transform duration-300"
			/>
		</div>

		<p class="text-muted-foreground flex items-center gap-2 pl-7 font-mono text-xs">
			{#if position.employmentType}
				<span>{position.employmentType}</span>
				<span class="bg-border flex h-4 w-px shrink-0"></span>
			{/if}

			<span>{position.year}</span>
		</p>
	</button>

	<div
		class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all duration-300"
	>
		{#if position.description}
			<Prose class="pt-2 pl-7">
				<SvelteMarkdown source={position.description} />
			</Prose>
		{/if}

		<div class="flex flex-wrap gap-1.5 pt-2 pl-7">
			{#each position.skills ?? [] as skill, idx (idx)}
				<Tag>{skill}</Tag>
			{/each}
		</div>
	</div>
</div>
