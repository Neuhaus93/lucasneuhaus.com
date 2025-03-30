<script lang="ts">
	import Panel from '$lib/components/panel.svelte';
	import { SOCIAL_LINKS } from '$lib/data/social-links';
	import SocialLinkItem from './social-link-item.svelte';
</script>

<Panel>
	<h2 class="sr-only">Social Links</h2>

	{#snippet content()}
		<div class="relative">
			<div
				class="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2"
			>
				<div class="border-grid border-r"></div>
				<div class="border-grid border-l"></div>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each SOCIAL_LINKS as item, i (i)}
					<SocialLinkItem
						title={item.title}
						description={item.description}
						href={item.href}
						icon={item.icon}
					/>
				{/each}
			</div>
		</div>
	{/snippet}
</Panel>
