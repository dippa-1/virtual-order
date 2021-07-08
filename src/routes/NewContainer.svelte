<script lang="ts">
  import { Link } from "svelte-routing";
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import TextField from "../components/TextField.svelte";

  let name: string;
  let width: number;
  let height: number;
</script>

<div
  class="flex flex-col space-y-4 md:w-3/4 lg:w-1/2 mx-auto font-medium text-lg"
>
  <Link to="/">
    <button
      class="flex items-center w-full space-x-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-200 hover:bg-gray-50 hover:bg-opacity-40 rounded-3xl px-8 py-4 font-semibold text-lg"
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
  </Link>
  <div in:scale="{{easing: expoOut}}" class="mx-auto flex space-y-4 flex-col">
    <div class="text-xl text-gray-800">Create new Container</div>
    <TextField bind:value={name} label="Name" />
    <TextField bind:value={width} label="Width" />
    <TextField bind:value={height} label="Height" />
  </div>
</div>
