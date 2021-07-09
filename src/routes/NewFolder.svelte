<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import { navigate } from "svelte-routing";

  import BackButton from "../components/BackButton.svelte";
  import TextField from "../components/TextField.svelte";
  import Glass from "../components/Glass.svelte";

  import type { Container } from "../types";

  export let container: Container;

  let name: string;
  let description: string;

  let isNameValid: boolean;
  $: if (!isNameValid && name !== undefined)
    if (name.length > 0) isNameValid = validateName(name);

  const validateName = (name: string): boolean => {
    if (name === undefined) return false;
    if (name.length == 0) return false;
    for (let f of container.folders) {
      if (f.name == name) return false;
    }
    return true;
  };

  const addFolder = () => {
    isNameValid = validateName(name);
    if (!isNameValid) return;
    if (description === undefined) description = "";
    container.folders.push({
      name: name,
      description: description,
      isOpen: false,
      items: [],
    });
    navigate(`/container/${container.name}/${name}`, { replace: true });
  };
</script>

<div
  class="flex flex-col space-y-4 md:w-3/4 lg:w-1/2 mx-auto font-medium text-lg"
>
  <BackButton />
  <Glass>
    <div class="mx-auto flex space-y-4 flex-col p-8">
      <div
        in:scale={{ easing: expoOut, delay: 100 }}
        class="text-xl text-gray-800"
      >
        New folder inside container {container.name}
      </div>
      <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(2) }}>
        <TextField bind:value={name} label="Name" valid={isNameValid} />
      </div>
      <div in:scale={{ easing: expoOut, delay: 100 * Math.sqrt(2) }}>
        <TextField bind:value={description} label="Description" />
      </div>
      <Glass hoverable animationIndex={5}>
        <button
          on:click={addFolder}
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
