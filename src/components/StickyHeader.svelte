<script lang="ts">
  import NavItemGithub from "@components/common/NavItemGithub.svelte";
  import ThemeToggle from "@components/common/ThemeToggle.svelte";
  import { USER } from "@data/user";
  import type { Snippet } from "svelte";
  import { scrollY } from "svelte/reactivity/window";
  import { fly } from "svelte/transition";

  let showHeader = $derived(
    typeof scrollY.current === "number" && scrollY.current > 200,
  );
  let { avatar }: { avatar: Snippet } = $props();
</script>

{#if showHeader}
  <header
    transition:fly={{ y: -60, opacity: 0.2 }}
    class="bg-background fixed inset-x-0 z-50 pt-2"
  >
    <div class="overflow-hidden">
      <div class="border-t-grid border-y">
        <div class="mx-auto px-4 md:max-w-3xl">
          <div class="border-grid flex items-center gap-3 border-x py-px pl-px">
            {@render avatar()}

            <div
              class="font-heading flex flex-1 items-center text-xl font-medium"
            >
              {USER.displayName}
            </div>

            <!-- <NavScrollspy class="max-sm:hidden" /> -->

            <div class="flex translate-x-px items-center gap-2">
              <NavItemGithub />
              <ThemeToggle />
              <!-- <NavDropdown class="sm:hidden" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
{/if}
