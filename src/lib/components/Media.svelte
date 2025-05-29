<script lang="ts">
  import type { Asset } from 'contentful'

  export let media: Asset<"WITHOUT_UNRESOLVABLE_LINKS">
  export let small: boolean = false
  export let webp: boolean = false
  export let noLink: boolean = false
  export let noirEtBlanc: boolean = false

</script>

<style lang="scss">
  img,
  object {
    display: block;
    width: 100%;
  }

  object {
    height: 50vh;
    margin-bottom: $base;
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

  picture.noirEtBlanc {
    filter: brightness(0%);
  }

  a img {
    cursor: pointer;
  }
</style>
{#if noLink || (media?.fields.description && !media.fields.description.startsWith('http'))}

{#if media?.fields.file?.contentType?.startsWith('application/pdf')}
<object data={media.fields.file.url} type="application/pdf" aria-label={media.fields.title}></object>
<!-- <a id={media.sys.id} href={media.fields.file.url} target='_blank'>{media.fields.title}</a> <a href={media.fields.file.url} download aria-describedby={media.sys.id}>Download</a> -->

{:else if media?.fields.file?.contentType?.startsWith('video/')}
<!-- svelte-ignore a11y-media-has-caption -->
<video src="{media.fields.file.url}" autoplay muted loop playsinline />

{:else}
<picture class:captioned={media?.fields.description} class:noirEtBlanc={noirEtBlanc}>
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
  {#if media?.fields.description && !media.fields.description.startsWith('http')}
  <figcaption>{media.fields.description}</figcaption>
  {/if}
</picture>
{/if}
{:else}
<a href={media.fields.description} target="_blank" rel="external">
  <svelte:self {media} {small} {webp} noLink {noirEtBlanc} />
</a>
{/if}