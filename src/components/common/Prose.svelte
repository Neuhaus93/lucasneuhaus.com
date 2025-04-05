<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, class: className }: { children: Snippet; class?: string } =
    $props();
</script>

<div
  data-slot="prose"
  class={[
    "prose prose-sm text-foreground prose-zinc dark:prose-invert max-w-none font-mono",
    "prose-headings:font-heading prose-headings:font-medium prose-headings:text-balance",
    "prose-h2:border-b prose-h2:pb-2",
    "prose-lead:text-base",
    "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
    "prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
    "prose-hr:border-grid",
    className,
  ]}
>
  {@render children()}
</div>
