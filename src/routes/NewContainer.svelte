<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";

  import TextField from "../components/TextField.svelte";
  import BackButton from "../components/BackButton.svelte";
  import Glass from "../components/Glass.svelte";
  import { container } from "../stores";
  import type { Folder } from "../types";

  let name: string;
  // let width: string;
  // let height: string;
  let description: string;

  let isNameValid: boolean;
  $: if (!isNameValid && name !== undefined)
    if (name.length > 0) isNameValid = validateName(name);
  // let isWidthValid: boolean;
  // $: if (!isWidthValid && width !== undefined)
  //   if (width.length > 0) isWidthValid = validateName(width);
  // let isHeightValid: boolean;
  // $: if (!isHeightValid && height !== undefined)
  //   if (height.length > 0) isHeightValid = validateName(height);

  const validateName = (name: string): boolean => {
    if (name === undefined) return false;
    if (name.length == 0) return false;
    for (let c of $container) {
      if (c.name == name) return false;
    }
    return true;
  };

  // const validateWidth = (width: string): boolean => {
  //   if (name === undefined) return false;
  //   if (width.length == 0) return false;
  //   const w = parseInt(width);
  //   if (isNaN(w)) return false;
  //   if (w <= 0) return false;
  //   return true;
  // };

  // const validateHeight = (height: string): boolean => {
  //   if (name === undefined) return false;
  //   if (height.length == 0) return false;
  //   const h = parseInt(height);
  //   if (isNaN(h)) return false;
  //   if (h <= 0) return false;
  //   return true;
  // };

  const addContainer = () => {
    isNameValid = validateName(name);
    // isWidthValid = validateWidth(width);
    // isHeightValid = validateHeight(height);
    if (!isNameValid) return;
    // const w = parseInt(width);
    // const h = parseInt(height);
    if (description === undefined) description = "";
    $container.push({
      name: name,
      folders: [],
      description: description,
    });
    navigate(`/container/${name}`, { replace: true });
  };
</script>

<div
  class="flex flex-col space-y-4 md:w-3/4 lg:w-1/2 mx-auto font-medium text-lg"
>
  <Link to="/">
    <BackButton />
  </Link>
  <Glass>
    <div class="mx-auto flex space-y-4 flex-col p-8">
      <div
        in:scale={{ easing: expoOut, delay: 100 }}
        class="text-xl text-gray-800"
      >
        Create new Container
      </div>
      <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(2) }}>
        <TextField bind:value={name} label="Name" valid={isNameValid} />
      </div>
      <!-- <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(3) }}>
      <TextField bind:value={width} label="Width" valid={isWidthValid} />
    </div>
    <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(4) }}>
      <TextField bind:value={height} label="Height" valid={isHeightValid} />
    </div> -->
      <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(2) }}>
        <TextField bind:value={description} label="Description" />
      </div>
      <Glass hoverable animationIndex={5}>
        <button
          in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(5) }}
          on:click={addContainer}
          class="flex flex-row space-x-2 w-full py-2 items-center justify-center font-semibold text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>Add</div>
        </button>
      </Glass>
    </div>
  </Glass>
</div>
