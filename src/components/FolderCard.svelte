<script lang="ts">
  import { Link } from "svelte-routing";
  import type { Folder } from "../types";

  export let containerName: string;
  export let folder: Folder;

  let totalItemCount = 0;
  for (let item of folder.items) {
    totalItemCount += item.count;
  }
</script>

<Link to="container/{containerName}/{folder.name}">
  <button
    class="w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-200 hover:bg-gray-50 hover:bg-opacity-40 rounded-3xl p-8 font-semibold text-lg"
  >
    <div class="text-gray-900 mb-3 font-bold">{folder.name}</div>
    {#if totalItemCount > 0}
      <div>{totalItemCount} total items</div>
      <div>{folder.items.length} different items</div>
    {:else}
      <div>No items</div>
    {/if}
  </button>
</Link>
