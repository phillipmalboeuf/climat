<script lang="ts">
  import "normalize.css";
  import "../app.scss";
  
  import Header from '$lib/components/Header.svelte'

  import type { LayoutData } from './$types'
  export let data: LayoutData
</script>


<Header navigation={data.navigation} />

<main>
  <slot />
</main>

<footer>
</footer>


<style lang="scss">
  main {
    padding: $base * $scale;
  }
</style>
