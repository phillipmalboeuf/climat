<script lang="ts">
	import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>{data.page.fields.titre}</title>
	<meta name="description" content={data.page.fields.description} />
</svelte:head>

<main>
	<h1>{data.page.fields.titre}</h1>
</main>

<style>
</style>
