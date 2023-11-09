<script lang="ts">
  import Contenu from '$lib/components/Contenu.svelte'
  import Document from '$lib/components/document/Document.svelte'
  import Media from '$lib/components/Media.svelte'

  import { DateTime } from 'luxon'
	
	import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>{data.event.fields.titre}</title>
	<meta name="description" content={data.event.fields.excerpt} />
</svelte:head>

<main>
  <nav><a href="/activités"><u>Retour aux activités</u></a></nav>
  <date>{DateTime.fromISO(data.event.fields.date).setLocale('fr-CA').toRelative()}</date>
	<h1 class="h1--huge">{data.event.fields.titre}</h1>

  <section>
    {#if data.event.fields.media}
    <figure>
      {#each data.event.fields.media as media}
      <Media {media} />  
      {/each}
    </figure>
    {/if}

    <div>
      <Document body={data.event.fields.description} />
      <br>
      {#if data.event.fields.lien}
      <nav><a href="{data.event.fields.lien}" class="button button--alt">{data.event.fields.cta}</a></nav>
      {/if}
    </div>
  </section>
</main>

<style lang="scss">
  main {
    // margin-top: $gap;
    padding: $gap;
  }

  section {
    display: flex;
    gap: $gap * 2;

    > div,
    > figure {
      flex: 1;
    }

    > figure {
      display: flex;
      flex-direction: column;
      gap: $gap;

      :global(img),
      :global(video) {
        border-radius: $base;
        // border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  nav {
    margin: $gap 0;
  }

  date {
    display: block;
    margin-bottom: $base;
    text-transform: capitalize;
    font-weight: bold;
  }
</style>
