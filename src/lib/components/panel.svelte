<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, content }: { children: Snippet; content: Snippet } = $props();
</script>

<section class="screen-line-before screen-line-after border-grid border-x">
	{@render children()}
	<div class="p-4">{@render content()}</div>
</section>
