<script lang="ts">
	import { USER } from '$lib/data/user';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>{USER.displayName} – {USER.jobTitle}</title>
	<meta name="description" content={USER.bio} />
	<meta name="keywords" content={USER.keywords} />
	<meta name="author" content={USER.displayName} />
</svelte:head>
<ModeWatcher />
{@render children()}
