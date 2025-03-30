<script lang="ts">
	import Avatar from '$lib/components/avatar.svelte';
	import { USER } from '$lib/data/user';
</script>

<!-- style={{ translateY: top }} -->
<header class="bg-background fixed inset-x-0 top-0 z-50 pt-2">
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
						<!-- <ToggleTheme /> -->
						<!-- <NavDropdown class="sm:hidden" /> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
