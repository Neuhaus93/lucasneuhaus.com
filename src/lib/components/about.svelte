<script lang="ts">
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import { USER } from '$lib/data/user';
	import Prose from './typography/prose.svelte';
</script>

<Panel title="About">
	<PanelContent>
		<Prose>{USER.about}</Prose>
	</PanelContent>
</Panel>
