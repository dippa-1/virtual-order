<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import TailwindCss from "./styles/TailwindCss.svelte";
  import Background from './styles/Background.svelte';

  import { container } from "./stores";
  import Home from "./routes/Home.svelte";
  import NewContainer from "./routes/NewContainer.svelte";
  import NewFolder from './routes/NewFolder.svelte';

  import ContainerDetail from "./routes/ContainerDetail.svelte";
  import FolderDetail from './routes/FolderDetail.svelte';

  let url = "";
</script>

<TailwindCss />
<!-- <Background /> -->

<style>
</style>

<main class="main bg-gradient-to-br from-green-500 to-blue-600 text-gray-700">
  <div class="min-h-[100vh] mx-auto container pb-4 pt-8 px-2">
    <Router {url}>
      <Route path="/" component={Home} />
      <Route path="/new/container" component={NewContainer} />
      <Route path="/new/folder/:id" let:params>
        <NewFolder container={$container.find((c) => c.name == params.id)} />
      </Route>
      <Route path="/container/:id" let:params>
        <ContainerDetail
          container={$container.find((c) => c.name == params.id)}
        />
      </Route>
      <Route path="/container/:containerId/:folderId" let:params>
        <FolderDetail folder={$container.find((c) => c.name == params.containerId).folders.find((f) => f.name == params.folderId)} />
      </Route>
    </Router>
  </div>
</main>
