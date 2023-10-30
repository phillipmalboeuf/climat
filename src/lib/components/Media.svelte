<script lang="ts">
  import type { Asset } from 'contentful'

  export let media: Asset
  export let small: boolean = false
  export let webp: boolean = false
</script>

<style lang="scss">
  img {
    display: block;
    width: 100%;
  }

  picture.captioned {
    position: relative;
    display: block;

    figcaption {
      position: absolute;
      bottom: 0;
      right: 0;

      color: $banana;
      font-size: $base / $scale;
      padding: $base / $scale / 2 $base / $scale;
      text-shadow: 0 0 5px $black;
    }
  }
</style>

<picture class:captioned={media?.fields.description}>
  {#if media?.fields.file}
  {#if small}
  <source srcSet="{media.fields.file.url}?w=400{webp ? '&fm=webp' : ''}" media="(max-width: 900px)" />
  <source srcSet="{media.fields.file.url}?w=600{webp ? '&fm=webp' : ''}" media="(max-width: 1200px)" />
  <img src="{media.fields.file.url}?w=800{webp ? '&fm=webp' : ''}" alt="{media.fields.title} {media.fields.description}" />
  {:else}
  <source srcSet="{media.fields.file.url}?w=900{webp ? '&fm=webp' : ''}" media="(max-width: 900px)" />
  <source srcSet="{media.fields.file.url}?w=1200{webp ? '&fm=webp' : ''}" media="(max-width: 1200px)" />
  <img src="{media.fields.file.url}?w=1800{webp ? '&fm=webp' : ''}" alt="{media.fields.title} {media.fields.description}" />
  {/if}
  {/if}
  {#if media?.fields.description}
  <figcaption>{media.fields.description}</figcaption>
  {/if}
</picture>