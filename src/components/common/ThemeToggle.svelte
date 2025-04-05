<script lang="ts">
  import { buttonVariants } from "@components/common/variants/button";
  import Moon from "@lucide/svelte/icons/moon";
  import Sun from "@lucide/svelte/icons/sun";

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
</script>

<button
  onclick={handleToggleClick}
  class={buttonVariants({ size: "icon", variant: "outline" })}
>
  <Sun
    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
  />
  <span class="sr-only">Toggle theme</span>
</button>
