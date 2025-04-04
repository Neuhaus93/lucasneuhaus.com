<script lang="ts">
	import { USER } from '$lib/data/user';

	let {
		class: className,
		size,
	}: {
		class?: string;
		size?: number;
	} = $props();
</script>

<img
	class={className}
	alt={`${USER.displayName}'s avatar`}
	src="/images/profile-picture.webp"
	width={size}
	height={size}
/>
