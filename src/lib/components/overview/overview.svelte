<script lang="ts">
	import PanelContent from '$lib/components/panel/panel-content.svelte';
	import Panel from '$lib/components/panel/panel.svelte';
	import { USER } from '$lib/data/user';
	import { urlToName } from '$lib/utils/url';
	import LinkIcon from '@lucide/svelte/icons/link';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import EmailItem from './email-item.svelte';
	import IntroItem from './intro-item.svelte';
	import JobItem from './job-item.svelte';
</script>

<Panel>
	<h2 class="sr-only">Overview</h2>

	<PanelContent class="space-y-2">
		{#each USER.jobs as job, idx (idx)}
			<JobItem title={job.title} company={job.company} website={job.website} />
		{/each}

		<IntroItem content={USER.address}>
			{#snippet icon()}
				<MapPinIcon />
			{/snippet}
		</IntroItem>

		<EmailItem />

		<IntroItem content={urlToName(USER.website)} href={USER.website}>
			{#snippet icon()}
				<LinkIcon />
			{/snippet}
		</IntroItem>
	</PanelContent>
</Panel>
