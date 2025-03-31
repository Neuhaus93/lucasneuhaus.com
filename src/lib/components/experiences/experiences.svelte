<script lang="ts">
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import { EXPERIENCES } from '$lib/data/experiences';
	import ExperienceItem from './experience-item.svelte';
	import ExperiencePositionItem from './experience-position-item.svelte';
</script>

<Panel title="Experiences">
	<PanelContent>
		<div>
			{#each EXPERIENCES as experience, idx (idx)}
				<ExperienceItem {experience}>
					{#each experience.positions as position, idx (idx)}
						<ExperiencePositionItem {position} />
					{/each}
				</ExperienceItem>
			{/each}
		</div>
	</PanelContent>
</Panel>
