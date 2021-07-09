<script lang="ts">
  import type { Folder } from '../types';

  import BackButton from '../components/BackButton.svelte';

  export let folder: Folder;
</script>

<BackButton />
Open: {folder.isOpen}
Name: {folder.name}