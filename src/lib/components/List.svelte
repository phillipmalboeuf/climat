<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeListSkeleton } from '$lib/clients/content_types'
  import Text from './Text.svelte'
  import Slider from './Slider.svelte';
  import Links from './Links.svelte';
  import Media from './Media.svelte';

  export let section: Entry<TypeListSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id} class={section.fields.type}>
  {#if section.fields.titre}<h2>{section.fields.titre}</h2>{/if}
  {#if section.fields.type === 'Slider'}
  <Slider dots={section.fields.list.length} arrows>
    {#each section.fields.list ?? [] as item}
    <div class="slider__slide">
      <Text section={item} small left />
    </div>
    {/each}
  </Slider>
  {:else if section.fields.type === 'Accordéon'}
  {#each section.fields.list ?? [] as item}
  <details>
    <summary><h2>{item.fields.titre}</h2></summary>
    <Text section={item} small noTitle />
  </details>
  {/each}
  {:else if section.fields.type === 'Icônes'}
  <ol>
    {#each section.fields.list ?? [] as item}
    <li>
      <Text section={item} small left />
    </li>
    {/each}
  </ol>
  {:else}
  <ol>
    {#each section.fields.list ?? [] as item}
    <li>
      <Text section={item} small />
    </li>
    {/each}
  </ol>
  {/if}

  {#if section.fields.lien}<nav><Links liens={[section.fields.lien]} /> <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0L9.47313 2.02687L17.4944 10.0625H0V12.9375H17.4944L9.47313 20.9731L11.5 23L23 11.5L11.5 0Z" fill="#1E675E"/></svg></nav>{/if}

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

    @media (max-width: $mobile) {
      margin: ($mobile_base * $mobile_scale * 1) 0;
      padding: 0;
    }

    ol {
      list-style: none;
      padding: 0;

      display: flex;
    }

    nav {
      display: flex;
      justify-content: flex-end;
      gap: $base;

      :global(a) {
        font-weight: bold;
        font-family: $display;
        // text-decoration: underline;
      }
    }

    figure {
      width: 66%;
      margin: ($gap * 4) auto 0;

      :global(img) {
        border-top-right-radius: $gap * 2;
        border-bottom-left-radius: $gap * 2;
      }

      @media (max-width: $mobile) {
        width: 100%;
        margin: ($mobile_gap * 3) auto;
      }
    }

    &.Icônes {
      ol {
        margin-top: $gap * 3;
        display: grid;
        column-gap: $gap;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: $mobile) {
          grid-template-columns: repeat(1, 1fr);
        }

        li {

          :global(section) {
            margin: 0 0 -1px;
            border-top: 1px solid;
            border-bottom: 1px solid;

            align-items: flex-start;

            @media (max-width: $mobile) {
              flex-direction: row;
            }
          }


          :global(main) {
            // flex: 14;

            :global(p:last-child) {
              margin-bottom: 0;
            }
          }

          :global(figure) {
            max-width: $gap*1.25;

            @media (max-width: $mobile) {
              padding: 0;
            }
          }

          :global(img) {
            border-radius: 0;
          }
        }
      }
    }

    &.Logos {
      ol {
        margin-top: $gap * 2;
        display: grid;
        column-gap: $gap;
        grid-template-columns: repeat(4, 1fr);

        @media (max-width: $mobile) {
          grid-template-columns: repeat(2, 1fr);
        }

        li {

          :global(section) {
            padding: 0;
            margin-bottom: 0;
            // border-top: 1px solid;
            // border-bottom: 1px solid;

            align-items: flex-start;

            @media (max-width: $mobile) {
              flex-direction: row;
            }
          }


          :global(main) {
            display: flex;
            flex-wrap: wrap;

            :global(h4) {
              width: 100%;
              font-family: $display;
            }
          }

          :global(a:has(img)) {
            width: 100%;
          }

          :global(img) {
            width: 100%;
            max-width: $gap*11;
            max-height: $gap*8;
            object-fit: cover;
            padding: 0;
            margin-bottom: $gap;
            display: inline-block;
            border-radius: 0;
          }
        }
      }
    }

    &.Numéros {
      ol {
        margin-top: ($base * $scale * 3);
        counter-reset: counter;

        @media (max-width: $mobile) {
          flex-direction: column;
        }

        li {
          counter-increment: counter;

          position: relative;
          border-right: 1px solid;
          padding-left: $base * $scale * 3;
          padding-right: $base * $scale * 1;

          @media (max-width: $mobile) {
            padding: 0 0 0 ($mobile_base * $mobile_scale * 2);
            border-right: none;
            border-bottom: 1px solid;
          }

          &:before {
            content: counter(counter);
            position: absolute;
            top: $base * $scale * 1;
            left: $base * $scale * 1;

            font-size: $base * $scale * 2;
            font-family: $alt_display;
            font-weight: bold;
            color: $black;

            @media (max-width: $mobile) {
              font-size: $mobile_base * $mobile_scale * 2;
              top: $base;
              left: $mobile_base * $mobile_scale * -0.02;
            }
          }

          :global(section) {
            margin: 0;
          }

          &:last-child {
            border-right: none;
          }
        }
      }
    }

    &.Accordéon {
      details {
        max-width: 42em;
        
        summary {
          cursor: pointer;
          border-top: 1px solid;

          &:empty {
            display: none;
          }

          &::-webkit-details-marker {
            display: none;
            content: "";
          }

          &::marker {
            display: none;
            content: "";
          }

          h2 {
            display: flex;
            justify-content: space-between;
            margin: 0.5em 0;
          }

          h2:after {
            content: '+';
          }
        }

        &[open] {
          > summary {
            margin-bottom: 0.5em;

            h2:after {
              content: '–';
            }
          }
        }
      }
    }

    &.Avatars {
      ol {
        margin-top: $gap * 2;
        display: grid;
        column-gap: $gap * 2;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: $mobile) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 650px) {
          grid-template-columns: repeat(1, 1fr);
          margin-bottom: $gap * 2;
        }
 

        li {

          :global(section) {
            padding: 0;
            align-items: flex-start;
            flex-direction: row-reverse;
            column-gap: $gap * 1.25;

            @media (max-width: 650px) {
              margin-top: $gap;
              margin-bottom: $gap;
              align-items: center;
            }
          }

          :global(p) {
            margin-bottom: 0;
          }

          :global(h4) {
            margin-bottom: 0.25em;
          }

          :global(h6) {
            margin-bottom: 0.5em;
          }

          :global(main) {
            display: flex;
            flex: 2;
            flex-direction: column;

            :global(h4) {
              width: 100%;
              font-family: $display;
            }
          }

          :global(a:has(img)) {
            width: 100%;
          }

          :global(figure) {
            flex: unset;
          }

          :global(img) {
            width: 100%;
            max-width: $gap*4;
            aspect-ratio: 1/1;
            object-fit: cover;
            padding: 0;
            margin-bottom: 0;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>