<script lang="ts">
  export let label: string = "";
  export let value: any;
</script>

<div class="flex items-center space-x-4">
  {#if label.length > 0}
    <div class="font-medium text-lg">{label}</div>
  {/if}
  <input bind:value type="text" class="bg-opacity-60 bg-gray-100 px-2 py-2 rounded-xl focus:outline-none focus:ring focus:ring-opacity-60 focus:ring-indigo-500 font-medium" />
</div>
