<script lang="ts">
	import { TECH_STACK } from '$lib/data/tech-stack';
</script>

<div class="flex flex-wrap gap-4 select-none">
	{#each TECH_STACK as item, i (i)}
		<a
			href={item.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={item.title}
			title={item.title}
			class="flex items-center"
		>
			{#if item.theme}
				<img
					src={`/images/tech-stack-icons/${item.key}-light.svg`}
					alt={`${item.title} light icon`}
					width={32}
					height={32}
					class="hidden [html.light_&]:block"
				/>
				<img
					src={`/images/tech-stack-icons/${item.key}-dark.svg`}
					alt={`${item.title} dark icon`}
					width={32}
					height={32}
					class="hidden [html.dark_&]:block"
				/>
			{:else}
				<img
					src={`/images/tech-stack-icons/${item.key}.svg`}
					alt={`${item.title} icon`}
					width={32}
					height={32}
				/>
			{/if}
		</a>
	{/each}
</div>
