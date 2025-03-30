<script lang="ts">
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';

	let {
		icon,
		title,
		description,
		href
	}: {
		icon: string;
		title: string;
		description?: string;
		href: string;
	} = $props();
</script>

<a
	class={'group/social-link flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-colors select-none' +
		' max-sm:screen-line-before max-sm:screen-line-after' +
		' sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after'}
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="relative size-12 shrink-0">
		<img class="rounded-xl" src={icon} alt={`${title}'s icon`} width={48} height={48} />
		<div
			class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8"
		></div>
	</div>

	<div class="flex-1">
		<p
			class="font-heading flex items-center font-medium underline-offset-4 group-hover/social-link:underline"
		>
			{title}
		</p>

		{#if description}
			<p class="text-muted-foreground font-mono text-sm">
				{description}
			</p>
		{/if}
	</div>

	<ExternalLinkIcon class="text-muted-foreground size-4" />
</a>
