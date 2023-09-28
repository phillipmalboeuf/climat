<script lang="ts">
  import "normalize.css";
  import "../app.scss";
  
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'

  import type { LayoutData } from './$types'
  export let data: LayoutData
</script>


<Header navigation={data.primary} />

<main>
  <slot />
</main>

<Footer navigation={data.secondary} />


<style lang="scss">
  main {
    padding: 0 ($base * $scale) ($base * $scale);
    min-height: 66vh;

    @media (max-width: $mobile) {
      padding: 0 ($mobile_base) ($mobile_base * $mobile_scale);
    }
  }
</style>
