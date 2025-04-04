<script lang="ts">
	import Avatar from '$lib/components/avatar.svelte';
	import { USER } from '$lib/data/user';
	import { scrollY } from 'svelte/reactivity/window';
	import { fly } from 'svelte/transition';
	import NavItemGithub from './nav-item-github.svelte';
	import ToggleTheme from './toggle-theme.svelte';

	let showHeader = $derived(typeof scrollY.current === 'number' && scrollY.current > 200);
</script>

{#if showHeader}
	<header transition:fly={{ y: -60, opacity: 0.2 }} class="bg-background fixed inset-x-0 z-50 pt-2">
		<div class="overflow-hidden">
			<div class="border-t-grid border-y">
				<div class="mx-auto px-4 md:max-w-3xl">
					<div class="border-grid flex items-center gap-3 border-x py-px pl-px">
						<Avatar
							class="ring-offset-background rounded-full ring-1 ring-zinc-300 ring-offset-1 dark:ring-zinc-700"
							size={48}
						/>

						<div class="font-heading flex flex-1 items-center text-xl font-medium">
							{USER.displayName}
						</div>

						<!-- <NavScrollspy class="max-sm:hidden" /> -->

						<div class="flex translate-x-px items-center gap-2">
							<NavItemGithub />
							<ToggleTheme />
							<!-- <NavDropdown class="sm:hidden" /> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
{/if}
