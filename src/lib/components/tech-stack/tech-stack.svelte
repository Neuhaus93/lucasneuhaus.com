<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Panel from '../panel/panel.svelte';
	import PanelContent from '../panel/panel-content.svelte';
	import TechStackContent from './tech-stack-content.svelte';
</script>

<Panel title="Stack">
	<PanelContent
		class={cn(
			'[--pattern-foreground:var(--color-black)]/2 dark:[--pattern-foreground:var(--color-white)]/2',
			'bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]',
			'bg-[size:10px_10px] bg-[position:-1px_0]'
		)}
	>
		<TechStackContent />
	</PanelContent>
</Panel>
