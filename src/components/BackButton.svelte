<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import Glass from './Glass.svelte';
</script>

<Glass>
  <button
    in:scale={{ easing: expoOut }}
    on:click={() => history.back()}
    class="flex items-center w-full space-x-2 hover:bg-gray-50 hover:bg-opacity-40 rounded-3xl px-8 py-2 font-semibold text-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
    <div>Back</div>
  </button>
</Glass>