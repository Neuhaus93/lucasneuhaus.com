<script lang="ts">
	import { USER } from '$lib/data/user';

	let {
		class: className,
		size
	}: {
		class?: string;
		size?: number;
	} = $props();
</script>

<img
	class={className}
	alt={`${USER.displayName}'s avatar`}
	src="https://place-hold.it/300"
	width={size}
	height={size}
/>
