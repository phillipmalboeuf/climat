<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeListSkeleton } from '$lib/clients/content_types'
  import Text from './Text.svelte'
    import Slider from './Slider.svelte';

  export let section: Entry<TypeListSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id} class={section.fields.type}>
  {#if section.fields.type === 'Slider'}
  <Slider dots={section.fields.list.length} arrows>
    {#each section.fields.list as item}
    <div class="slider__slide">
      <Text section={item} small left />
    </div>
    {/each}
  </Slider>
  {:else if section.fields.type === 'Accordéon'}
  {#each section.fields.list as item}
  <details>
    <summary><h2>{item.fields.titre}</h2></summary>
    <Text section={item} small noTitle />
  </details>
  {/each}
  {:else}
  <ol>
    {#each section.fields.list as item}
    <li>
      <Text section={item} small />
    </li>
    {/each}
  </ol>
  {/if}
</section>

<style lang="scss">
  section {
    margin: ($base * $scale * 3) 0;
    padding: ($base * $scale * 1);

    ol {
      list-style: none;
      padding: 0;

      display: flex;
    }

    &.Numéros {
      ol {
        counter-reset: counter;

        li {
          counter-increment: counter;

          position: relative;
          border-right: 1px solid;
          padding-left: $base * $scale * 3;
          padding-right: $base * $scale * 1;

          &:before {
            content: counter(counter);
            position: absolute;
            top: $base * $scale * 1;
            left: $base * $scale * 1;

            font-size: $base * $scale * 2;
            font-family: $alt_display;
            font-weight: bold;
            color: $black;
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
            @media (max-width: 888px) { font-size: 30px; }
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
  }
</style>