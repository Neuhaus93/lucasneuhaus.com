<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import LinkRenderer from './link-renderer.svelte';

	let { source }: { source: string } = $props();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const renderers: any = {
		link: LinkRenderer,
	};
</script>

<SvelteMarkdown {source} {renderers} />
