<script lang="ts">
  import { Link } from "svelte-routing";
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import { container } from "../stores";
  import ContainerCard from "../components/ContainerCard.svelte";
  import Glass from "../components/Glass.svelte";
</script>

<h1
  in:scale={{ easing: expoOut }}
  class="text-center text-4xl text-gray-900 font-bold mb-6"
>
  Home
</h1>
<div class="flex flex-wrap justify-around">
  {#each $container as c, index}
    <div in:scale={{ easing: expoOut, delay: Math.sqrt(index + 1) * 100 }}>
      <ContainerCard container={c} />
    </div>
  {/each}
  <Link to="/new/container">
    <Glass hoverable animationIndex={$container.length+ 1}>
      <button
        class="p-8 m-4 font-semibold text-lg"
      >
        + Add container
      </button>
    </Glass>
  </Link>
</div>
