<script lang="ts">
  import { Link } from 'svelte-routing';

  import AddContainerCard from "../components/AddContainerCard.svelte";
  import ContainerOverview from "../components/ContainerOverview.svelte";
</script>

<div class="flex space-x-4">
  <ContainerOverview />
  <Link to="new/container">
    <AddContainerCard />
  </Link>
</div>
