<script lang="ts">
  import { scale } from 'svelte/transition';
  import { expoOut } from "svelte/easing";

  import { container } from '../stores';

  const addContainer = () => {
    
  };
</script>

<button
  in:scale="{{easing: expoOut, delay: 100*Math.sqrt($container.length)}}"
  on:click={addContainer}
  class="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-200 hover:bg-gray-50 hover:bg-opacity-40 rounded-3xl p-8 font-semibold text-lg"
>
  + Add container
</button>