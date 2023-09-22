<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeDashboardSkeleton } from '$lib/clients/content_types'
  import Document from './document/Document.svelte'
  import Media from './Media.svelte'

  export let section: Entry<TypeDashboardSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id}>
  <nav>
    {#each section.fields.items as item}
    <a href={item.fields.lien}
      class="{item.fields.couleur} {item.fields.coins.join(' ')} {item.fields.taille}"
      style="grid-column-start: {item.fields.colStart}; grid-column-end: {item.fields.colEnd}; grid-row-start: {item.fields.rowStart}; grid-row-end: {item.fields.rowEnd};">
      {#if item.fields.text}<strong>{item.fields.text}</strong>{/if}
      {#if item.fields.media}
      <figure>
        <Media media={item.fields.media} />
      </figure>
      {/if}
    </a>
    {/each}
  </nav>
</section>

<style lang="scss">
  section {
    // margin: ($base * $scale * 3) 0;
    // padding: ($base * $scale * 1);
  }

  nav {
    display: grid;
    min-height: 88vh;
    column-gap: $base;
    row-gap: $base;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: $base * $scale * 2;

      position: relative;
      overflow: hidden;

      &.top_right {
        border-top-right-radius: $base * $scale;
      }

      &.bottom_left {
        border-bottom-left-radius: $base * $scale;
      }

      &.top_left {
        border-top-left-radius: $base * $scale;
      }

      &.bottom_right {
        border-bottom-right-radius: $base * $scale;
      }

      &.top_right.bottom_right.top_left.bottom_left {
        border-radius: $base * $scale * 4;
        padding: $base;
      }

      &.medium,
      &.large {
        // font-weight: bold;
        font-size: $base * $scale;
        font-family: $display;
        line-height: 1;
      }

      &.large {
        font-size: $base * $scale * 3;
      }

      &.black {
        background-color: $black;
        color: $banana;
      }

      &.moss {
        background-color: $moss;
        color: $banana;
      }

      &.sage {
        background-color: $sage;
        color: $black;
      }

      &.turquoise {
        background-color: $turquoise;
        color: $black;
      }

      &.banana {
        background-color: $banana;
        color: $black;
      }

      figure {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        :global(img) {
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>