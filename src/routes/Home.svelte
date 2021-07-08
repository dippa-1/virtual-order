<script lang="ts">
  import { Link } from 'svelte-routing';

  import AddContainerCard from "../components/AddContainerCard.svelte";
  import ContainerOverview from "../components/ContainerOverview.svelte";
</script>

<div class="flex flex-wrap justify-around">
  <ContainerOverview />
  <Link to="new/container">
    <AddContainerCard />
  </Link>
</div>
