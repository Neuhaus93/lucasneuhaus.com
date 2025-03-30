<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import { USER } from '$lib/data/user';
	import { urlToName } from '$lib/utils/url';
	import LinkIcon from '@lucide/svelte/icons/link';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import EmailItem from './email-item.svelte';
	import IntroItem from './intro-item.svelte';
</script>

<Panel>
	<h2 class="sr-only">Overview</h2>

	{#snippet content()}
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
	{/snippet}
</Panel>
