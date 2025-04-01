<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	let { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<span
	class={cn(
		'text-muted-foreground inline-flex items-center rounded-lg border px-1.5 py-0.5 font-mono text-xs',
		className,
	)}
>
	{@render children()}
</span>
