<script lang="ts">
  import Contenu from '$lib/components/Contenu.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import { DateTime } from 'luxon'
	
	import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
	<title>{data.page.fields.titre}</title>
	<meta name="description" content={data.page.fields.description} />
</svelte:head>

<PageHeader page={data.page} />

<main>
	<h1 hidden>{data.page.fields.titre}</h1>
	<Contenu contenu={data.page.fields.contenu} />
</main>

<aside>
  <h4>À venir</h4>

  <ol>
    {#each data.upcoming as event}
    <li>
      <a href="/activités/{event.fields.id}">
        <date>{DateTime.fromISO(event.fields.date).setLocale('fr-CA').toFormat('dd MMM').replace(' ', '\n')}</date>
        <div>
          <h3>{event.fields.titre}</h3>
          <p>{event.fields.excerpt}</p>
          {event.fields.tags?.join(' ')}
        </div>

        <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 0.00153056L14.8277 2.96255L27.3836 14.6997L0.00114253 14.7018L0.00146897 18.9015L27.384 18.8993L14.8299 30.6384L18.0026 33.5989L36.0013 16.7988L18 0.00153056Z" fill="currentColor"/></svg>
      </a>
    </li>
    {/each}
  </ol>
</aside>
<aside>
  <h4>Activités passées</h4>

  <ol>
    {#each data.passed as event}
    <li>
      <a href="/activités/{event.fields.id}">
        <date>{DateTime.fromISO(event.fields.date).setLocale('fr-CA').toFormat('dd MMM').replace(' ', '\n')}</date>
        <div>
          <h3>{event.fields.titre}</h3>
          <p>{event.fields.excerpt}</p>
          {event.fields.tags?.join(' ')}
        </div>

        <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 0.00153056L14.8277 2.96255L27.3836 14.6997L0.00114253 14.7018L0.00146897 18.9015L27.384 18.8993L14.8299 30.6384L18.0026 33.5989L36.0013 16.7988L18 0.00153056Z" fill="currentColor"/></svg>
      </a>
    </li>
    {/each}
  </ol>
</aside>


<style lang="scss">
  aside {
    padding: $gap * 2;
    margin: (-$gap);

    @media (max-width: $mobile) {
      padding: $mobile_gap;
      margin: (-$mobile_gap);
    }

    &:last-child {
      background-color: $faded_sage;
    }
  }

  h3 {
    font-weight: normal;
  }

  h4 {
    font-family: $display;
    text-transform: uppercase;
    margin-bottom: $gap * 2;
  }

  date {
    font-family: $display;
    font-size: $base * $scale * 1;
    font-weight: bold;
    white-space: pre-line;
  }

  svg {
    @media (max-width: $mobile) {
      display: none;
    }
  }

  ol {
    list-style: none;
    padding-left: 0;
    border-top: 1px solid;

    li {
      border-bottom: 1px solid;

      a {
        display: flex;
        gap: $gap * 3;
        padding: $gap ($gap * 2);
        margin: 0 ($gap * -2);

        @media (max-width: $mobile) {
          gap: $mobile_gap * 2;
          padding: $mobile_gap ($mobile_gap * 2);
          margin: 0 ($mobile_gap * -2);
        }

        date {
          width: 15%;
        }

        &:hover,
        &:focus {
          text-decoration: none;
          background-color: $turquoise;
          color: $black;
        }

        div {
          flex: 1;
        }
      }
    }
  }
</style>
