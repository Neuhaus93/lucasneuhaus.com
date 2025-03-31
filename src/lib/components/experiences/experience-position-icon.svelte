<script lang="ts">
	import type { ExperiencePositionIcon } from '$lib/data/experiences';
	import BriefcaseBusinessIcon from '@lucide/svelte/icons/briefcase-business';
	import CodeXmlIcon from '@lucide/svelte/icons/code-xml';
	import DraftingCompassIcon from '@lucide/svelte/icons/drafting-compass';
	import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
	import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
	import SchoolIcon from '@lucide/svelte/icons/school';
	import type { Component } from 'svelte';

	const iconMap: Record<ExperiencePositionIcon, Component> = {
		code: CodeXmlIcon,
		design: DraftingCompassIcon,
		education: GraduationCapIcon,
		business: BriefcaseBusinessIcon,
		school: SchoolIcon,
		idea: LightbulbIcon
	};

	let { icon, class: className }: { icon: ExperiencePositionIcon | undefined; class?: string } =
		$props();
	let IconComponent = $derived(icon && iconMap[icon] ? iconMap[icon] : null);
</script>

{#if IconComponent}
	<IconComponent class={className} />
{:else}
	<BriefcaseBusinessIcon class={className} />
{/if}
