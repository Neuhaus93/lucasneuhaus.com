<script lang="ts">
	import IntroItem from './intro-item.svelte';
	import CodeXmlIcon from '@lucide/svelte/icons/code-xml';
	import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
	import BriefcaseBusinessIcon from '@lucide/svelte/icons/briefcase-business';

	let { title, website, company }: { title: string; website: string; company: string } = $props();

	let JobIcon = $derived.by(() => {
		if (/(developer|engineer)/i.test(title)) {
			return CodeXmlIcon;
		}

		if (/(founder|co-founder)/i.test(title)) {
			return LightbulbIcon;
		}

		return BriefcaseBusinessIcon;
	});
</script>

<IntroItem>
	{#snippet icon()}
		<JobIcon />
	{/snippet}
	{#snippet content()}
		{title}
		@<a class="hover:underline" href={website} target="_blank" rel="noopener noreferrer"
			>{company}</a
		>
	{/snippet}
</IntroItem>
