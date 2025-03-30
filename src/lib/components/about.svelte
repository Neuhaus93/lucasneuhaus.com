<script lang="ts">
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import Prose from './typography/prose.svelte';
	import AboutMarkdown from './about-markdown.svx';
</script>

<Panel title="About">
	<PanelContent>
		<Prose><AboutMarkdown /></Prose>
	</PanelContent>
</Panel>
