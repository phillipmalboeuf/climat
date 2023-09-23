<script lang="ts">
  import Contenu from '$lib/components/Contenu.svelte'
  import Document from '$lib/components/document/Document.svelte'
	
	import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>{data.event.fields.titre}</title>
	<meta name="description" content={data.event.fields.excerpt} />
</svelte:head>

<main>
  <nav><a href="/activités"><u>Retour aux activités</u></a></nav>
  <date>{data.event.fields.date}</date>
	<h1>{data.event.fields.titre}</h1>
  <Document body={data.event.fields.description} />
  <br>
  {#if data.event.fields.lien}
  <nav><a href="{data.event.fields.lien}" class="button button--alt">{data.event.fields.cta}</a></nav>
  {/if}
</main>

<style lang="scss">
  main {
    margin-top: $gap;
  }

  nav {
    margin: $gap 0;
  }
</style>
