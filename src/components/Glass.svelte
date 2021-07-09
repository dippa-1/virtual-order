<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  export let hoverable: boolean = false;
  export let animationIndex: number = 0;
</script>

<div
  class="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-gray-200 rounded-3xl {hoverable
    ? 'hover:bg-gray-50 hover:bg-opacity-40'
    : ''}"
  in:scale={{
    easing: expoOut,
    delay: 100 * Math.sqrt(animationIndex),
  }}
>
  <slot />
</div>
