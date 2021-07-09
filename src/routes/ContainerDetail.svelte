<script lang="ts">
  import { Link } from "svelte-routing";
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import type { Container } from "../types";
  import FolderCard from "../components/FolderCard.svelte";
  import BackButton from "../components/BackButton.svelte";
  import Glass from '../components/Glass.svelte';

  export let container: Container;
</script>

<div
  class="flex flex-col space-y-4 md:w-3/4 lg:w-1/2 mx-auto font-medium text-lg"
>
  <BackButton />
</div>
<div class="flex flex-col mx-auto text-center space-y-3">
  <div
    in:scale={{ easing: expoOut, delay: 100 }}
    class="text-4xl font-bold text-gray-800 mt-6"
  >
    Container {container.name}
  </div>
  <div
    in:scale={{ easing: expoOut, delay: 100 }}
    class="mb-6"
  >
    {container.description || ' '}
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    <Glass hoverable animationIndex={2}>
    <Link to="/new/folder/{container.name}">
      <button
        class="w-full h-full p-8 font-semibold text-lg"
      >
        + Add folder
      </button>
    </Link>
    </Glass>
    {#each container.folders as folder, index}
      <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(index + 3) }}>
        <FolderCard {folder} containerName={container.name} />
      </div>
    {/each}
  </div>
</div>
