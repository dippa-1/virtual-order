<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import { container } from "../stores";
  import ContainerCard from "./ContainerCard.svelte";
</script>

{#each $container as c, index}
  <div in:scale={{ easing: expoOut, delay: Math.sqrt(index)*100 }}>
    <ContainerCard container={c} />
  </div>
{/each}
