<script lang="ts">
  import type { ExperiencePositionIcon } from "@data/experiences";
  import BriefcaseBusinessIcon from "@lucide/svelte/icons/briefcase-business";
  import CodeXmlIcon from "@lucide/svelte/icons/code-xml";
  import DraftingCompassIcon from "@lucide/svelte/icons/drafting-compass";
  import GraduationCapIcon from "@lucide/svelte/icons/graduation-cap";
  import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
  import SchoolIcon from "@lucide/svelte/icons/school";
  import type { Component } from "svelte";

  const iconMap: Record<ExperiencePositionIcon, Component> = {
    code: CodeXmlIcon,
    design: DraftingCompassIcon,
    education: GraduationCapIcon,
    business: BriefcaseBusinessIcon,
    school: SchoolIcon,
    idea: LightbulbIcon,
  };

  let { icon }: { icon: ExperiencePositionIcon | undefined } = $props();
  let IconComponent = $derived(icon && iconMap[icon] ? iconMap[icon] : null);
  const className = "text-muted-foreground size-4 shrink-0";
</script>

{#if IconComponent}
  <IconComponent class={className} />
{:else}
  <BriefcaseBusinessIcon class={className} />
{/if}
