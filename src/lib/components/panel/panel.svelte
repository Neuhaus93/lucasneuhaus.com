<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	let { title, children }: { children?: Snippet; title?: string } = $props();
</script>

<section class={cn('screen-line-before screen-line-after border-grid border-x')}>
	{#if title}
		<div data-slot="panel-header" class="screen-line-after px-4">
			<h2 class="font-heading text-3xl font-medium">{title}</h2>
		</div>
	{/if}

	{@render children?.()}
</section>
