<script lang="ts">
	import type { Snippet } from 'svelte';

	let { icon, content, href }: { icon: Snippet; content: string; href?: string } = $props();
	let isLink = $derived(!!href);
</script>

<div
	class="[&_svg]:text-muted-foreground flex items-center gap-4 font-mono text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
>
	{@render icon()}

	{#if isLink}
		<a
			class="text-balance underline-offset-4 hover:underline"
			{href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{content}
		</a>
	{:else}
		<p class="text-balance">
			{content}
		</p>
	{/if}
</div>
