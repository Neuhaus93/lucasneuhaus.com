<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	let { children, class: className }: { children?: Snippet; class?: string } = $props();
</script>

<div data-slot="panel-body" class={cn('p-4', className)}>
	{@render children?.()}
</div>
