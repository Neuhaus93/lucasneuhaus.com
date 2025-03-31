<script lang="ts">
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import { EXPERIENCES } from '$lib/data/experiences';
	import { Accordion } from 'melt/builders';
	import ExperienceItem from './experience-item.svelte';
	import ExperiencePositionItem from './experience-position-item.svelte';

	const accordion = new Accordion({ multiple: true });
</script>

<Panel title="Experiences">
	<PanelContent>
		<div {...accordion.root}>
			{#each EXPERIENCES as experience, idx (idx)}
				{@const item = accordion.getItem(experience)}
				<ExperienceItem {experience}>
					{#each experience.positions as position, idx (idx)}
						<ExperiencePositionItem {position} />
					{/each}
				</ExperienceItem>
				<!-- <h2 {...item.heading}> -->
				<!-- 	<button {...item.trigger}> -->
				<!-- 		{item.item.company} -->
				<!-- 	</button> -->
				<!-- </h2> -->
				<!---->
				<!-- <div {...item.content}> -->
				<!-- 	{item.item.company} -->
				<!-- </div> -->
			{/each}
		</div>
	</PanelContent>
</Panel>
