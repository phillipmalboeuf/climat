<script lang="ts">
  import type { Entry } from "contentful";
  import type { TypeTextSkeleton } from "$lib/clients/content_types";
  import Document from "./document/Document.svelte";
  import Media from "./Media.svelte";
  import Links from "./Links.svelte";

  export let section: Entry<TypeTextSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
  export let small = false;
  export let left = false;
  export let noTitle = false;

  const showTitle =
    !section.fields.cacherLeTitre && !noTitle && !!section.fields.titre;

  const hasMain =
    !!section.fields.sousTitre ||
    showTitle ||
    !!section.fields.corps ||
    !!section.fields.lien;

    console.log(section.fields.imageEnNoirEtBlanc)
</script>

<section
  id={section.fields.id}
  class:borders={section.fields.bordures}
  class:small
  class:left
>
  {#if hasMain}
    <main>
      {#if section.fields.sousTitre}<h6>{section.fields.sousTitre}</h6>{/if}
      {#if showTitle}
        {#if small}
          <h4>{section.fields.titre}</h4>
        {:else}
          <h2>{section.fields.titre}</h2>
        {/if}
      {/if}
      {#if section.fields.corps}<Document body={section.fields.corps} />{/if}

      {#if section.fields.lien}
        <nav>
          <Links liens={[section.fields.lien]} />
        </nav>
      {/if}
    </main>
  {/if}
  {#if section.fields.media}
    <figure>
      <Media media={section.fields.media} noirEtBlanc={section.fields.imageEnNoirEtBlanc} />
    </figure>
  {/if}
</section>

<style lang="scss">
  section {
    margin: ($base * $scale * 3) 0;
    padding: ($base * $scale * 1);

    @media (max-width: $mobile) {
      margin: ($mobile_gap * 2) 0;
      padding: $mobile_gap;
    }

    display: flex;
    align-items: center;
    gap: ($base * $scale * 2);

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: ($mobile_base * $mobile_scale * 2);
    }

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

        @media (max-width: $mobile) {
          padding: 0 ($mobile_gap * 2);
        }
      }

      main {
        display: flex;
        flex: 2;
        flex-direction: column-reverse;

        h6,
        h4 {
          font-family: $text;
          align-self: flex-end;
          text-align: right;
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

        @media (max-width: $mobile) {
          border-left: none;
          border-top: 1px solid;
        }

        :global(img) {
          border-top-right-radius: $base;
          border-bottom-right-radius: $base;
          border-bottom-left-radius: 0;

          @media (max-width: $mobile) {
            border-top-right-radius: 0;
            border-bottom-right-radius: $base;
            border-bottom-left-radius: $base;
          }
        }
      }
    }
  }
</style>
