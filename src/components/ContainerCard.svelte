<script lang="ts">
  import { Link } from "svelte-routing";

  import type { Container } from "../types";
  import Glass from "./Glass.svelte";

  export let container: Container;
</script>

<Glass hoverable>
  <Link to="container/{container.name}">
    <button
      class="p-8 m-4 font-semibold text-lg"
    >
      {container.name}
    </button>
  </Link>
</Glass>
