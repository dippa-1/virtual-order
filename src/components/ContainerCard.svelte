<script lang="ts">
  import type { Container } from "../types";

  export let container: Container;
</script>

<button
  class="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-200 hover:bg-gray-50 hover:bg-opacity-40 rounded-3xl p-8 font-semibold text-lg"
>
  {container.name}, {container.width}x{container.height}
</button>
