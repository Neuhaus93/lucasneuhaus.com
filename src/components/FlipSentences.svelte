<script lang="ts">
  import { onMount } from "svelte";

  let { sentences }: { sentences: string[] } = $props();
  let currentSentence = $state(0);
  let animationStatus = $state<"in-progress" | "waiting">("waiting");
  let interval: ReturnType<typeof setTimeout> | null = null;

  function typewriter(node: Element, { speed = 1 } = {}) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`,
      );
    }

    const text = node.textContent ?? "";
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  const onintrostart = () => (animationStatus = "in-progress");
  const onintroend = () => {
    animationStatus = "waiting";
    interval = setTimeout(() => {
      currentSentence = (currentSentence + 1) % sentences.length;
    }, 3500);
  };

  onMount(() => {
    interval = setTimeout(() => {
      currentSentence = (currentSentence + 1) % sentences.length;
    }, 3500);

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
        }
      },
      { signal },
    );

    return () => {
      if (interval) clearInterval(interval);
      abortController.abort();
    };
  });
</script>

{#key currentSentence}
  <span
    id="test"
    class:blink={animationStatus === "waiting"}
    class={[
      "text-muted-foreground relative font-mono text-sm text-balance select-none",
      "after:content-[''] after:absolute after:bg-muted-foreground after:top-0 after:bottom-0 after:right-[-3px] after:w-px",
    ]}
    in:typewriter
    {onintrostart}
    {onintroend}
  >
    {sentences[currentSentence]}
  </span>
{/key}

<style>
  span.blink::after {
    animation: blink 1.3s steps(2, start) infinite;
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
</style>
