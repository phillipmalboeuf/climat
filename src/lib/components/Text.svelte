<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeTextSkeleton } from '$lib/clients/content_types'
  import Document from './document/Document.svelte'
  import Media from './Media.svelte'
  import Links from './Links.svelte'

  export let section: Entry<TypeTextSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
  export let small = false
  export let left = false
  export let noTitle = false
</script>

<section id={section.fields.id} class:borders={section.fields.bordures} class:small class:left>
  <main>
    {#if section.fields.sousTitre}<h6>{section.fields.sousTitre}</h6>{/if}
    {#if !noTitle && section.fields.titre}{#if small}<h4>{section.fields.titre}</h4>{:else}<h2>{section.fields.titre}</h2>{/if}{/if}
    {#if section.fields.corps}<Document body={section.fields.corps} />{/if}

    {#if section.fields.lien}
    <nav>
      <Links liens={[section.fields.lien]} />
    </nav>
    {/if}
  </main>
  {#if section.fields.media}
  <figure>
    <Media media={section.fields.media} />
  </figure>
  {/if}
</section>

<style lang="scss">
  section {
    margin: ($base * $scale * 3) 0;
    padding: ($base * $scale * 1);

    display: flex;
    align-items: center;
    gap: ($base * $scale * 2);

    main,
    figure {
      flex: 1;
    }

    nav {
      margin-top: ($base * $scale * 2);
    }

    figure {
			:global(img) {
				border-top-right-radius: $base;
				border-bottom-left-radius: $base;
			}
		}

    &.left {
      figure {
        order: -1;
      }

      main {
        display: flex;
        flex-direction: column-reverse;

        h6, h4 {
          font-family: $text;
          align-self: flex-end;
        }

        h4 {
          margin-bottom: 0;
        }
      }
    }

    &.borders {
      border: 1px solid;
      border-radius: $base;

      figure {
        border-left: 1px solid;
        margin: ($base * $scale * -1);
        padding: ($base * $scale * 0.5);

        :global(img) {
          border-top-right-radius: $base;
          border-bottom-right-radius: $base;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
</style>