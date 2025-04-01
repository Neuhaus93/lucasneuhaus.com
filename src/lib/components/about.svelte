<script lang="ts">
	import Markdown from '$lib/components/markdown/markdown.svelte';
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import Prose from '$lib/components/typography/prose.svelte';
	import { USER } from '$lib/data/user';
</script>

<Panel title="About">
	<PanelContent>
		<Prose>
			<Markdown source={USER.about} />
		</Prose>
	</PanelContent>
</Panel>
