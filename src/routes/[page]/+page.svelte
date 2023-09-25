<script lang="ts">
  import Contenu from '$lib/components/Contenu.svelte'
  import Links from '$lib/components/Links.svelte'
	import Document from '$lib/components/document/Document.svelte'
	
	import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>{data.page.fields.titre}</title>
	<meta name="description" content={data.page.fields.description} />
</svelte:head>

<div class:sidebar={!!data.page.fields.sidebar}>
	<main>
		<h1 hidden>{data.page.fields.titre}</h1>
		<Contenu contenu={data.page.fields.contenu} />
	</main>

	{#if data.page.fields.sidebar}
	<aside>
		{#if data.page.fields.sidebar.fields.principal}
		<Document body={data.page.fields.sidebar.fields.principal} />
		{/if}

		<nav>
			{#if data.page.fields.sidebar.fields.liens}
			<Links liens={data.page.fields.sidebar.fields.liens} />
			{/if}
		</nav>

		{#if data.page.fields.sidebar.fields.secondaire}
		<small>
			<hr />
			<Document body={data.page.fields.sidebar.fields.secondaire} />
		</small>
		{/if}
	</aside>
	{/if}
</div>

<style lang="scss">
	div {

		&.sidebar {
			display: flex;
			align-items: flex-start;

			main {
				flex: 3;
			}

			aside {
				flex: 1;
			}
		}
	}

	aside {
		position: sticky;
		top: $gap * 5;
		right: 0;
		// width: 100%;
		// max-width: 36em;
		padding: $gap * 2;
		background-color: $banana;
		border-radius: $gap;
		border-top-left-radius: 0;

		nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $base;
			margin: ($gap * 2) 0 $gap;

			:global(a.button) {
				width: 100%;
				text-align: center;
			}

			:global(a:not(.button)) {
				font-weight: bold;
				text-decoration: underline;
			}
		}

		small {
			display: block;
			margin-top: $gap;
		}
	}
</style>
