<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import TailwindCss from './styles/TailwindCss.svelte';
  import Home from './routes/Home.svelte';
  import NewContainer from './routes/NewContainer.svelte';

  import ContainerOverview from './components/ContainerOverview.svelte';

  let url = '';
  
</script>

<TailwindCss />

<main class="bg-gradient-to-br from-green-500 to-blue-600 text-gray-700">
  <div class="min-h-[100vh] mx-auto container pb-4 pt-8 px-2">
      <Router {url}>
        <Route path="/" component="{Home}" />
        <Route path="/new/container" component="{NewContainer}" />
        <Route path="container" component="{ContainerOverview}" />
      </Router>
  </div>
</main>