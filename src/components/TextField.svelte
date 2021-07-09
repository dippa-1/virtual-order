<script lang="ts">
  export let label: string = "";
  export let value: any;
  export let valid: boolean = true;
</script>

<div class="flex items-center justify-between space-x-4">
  {#if label.length > 0}
    <div class="font-medium text-lg">{label}</div>
  {/if}
  <input bind:value type="text" class="bg-opacity-40 bg-gray-100 px-2 py-2 rounded-3xl focus:outline-none focus:ring focus:ring-opacity-60 text-center font-medium {!valid ? 'ring ring-red-500' : 'focus:ring-indigo-500'}" />
</div>