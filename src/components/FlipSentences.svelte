<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let { sentences }: { sentences: string[] } = $props();
  let currentSentence = $state(0);
  let interval: ReturnType<typeof setTimeout> | null = null;

  onMount(() => {
    const startAnimation = () => {
      interval = setInterval(() => {
        currentSentence = (currentSentence + 1) % sentences.length;
      }, 3500);
    };
    startAnimation();

    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible" && interval) {
          clearInterval(interval); // Clear the interval when the tab is not visible
          interval = null;
        } else if (document.visibilityState === "visible") {
          currentSentence = (currentSentence + 1) % sentences.length; // Show the next sentence immediately
          startAnimation(); // Restart the interval when the tab becomes visible
        }
      },
      { signal },
    );

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      abortController.abort();
    };
  });
</script>

{#key currentSentence}
  <p
    class={"text-muted-foreground absolute inset-0 left-4 self-center font-mono text-sm text-balance select-none"}
    in:fade={{ delay: 500, duration: 350 }}
    out:fade={{ duration: 350 }}
  >
    {sentences[currentSentence]}
  </p>
{/key}
