<script lang="ts">
	import { USER } from '$lib/data/user';
	import { decodeEmail } from '$lib/utils/string';
	import MailIcon from '@lucide/svelte/icons/mail';
	import { onMount } from 'svelte';
	import IntroItem from './intro-item.svelte';

	let email = $state('[Email protected]');
	let href = $state('#');
	onMount(() => {
		email = decodeEmail(USER.email);
		href = `mailto:${email}`;
	});
</script>

<IntroItem content={email} {href}>
	{#snippet icon()}
		<MailIcon />
	{/snippet}
</IntroItem>
