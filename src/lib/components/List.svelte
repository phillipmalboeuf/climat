<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeListSkeleton } from '$lib/clients/content_types'
  import Text from './Text.svelte'
    import Slider from './Slider.svelte';

  export let section: Entry<TypeListSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id} class={section.fields.type}>
  {#if section.fields.titre}<h2>{section.fields.titre}</h2>{/if}
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

    @media (max-width: $mobile) {
      margin: ($mobile_base * $mobile_scale * 1) 0;
      padding: ($mobile_base * $mobile_scale * 1);
    }

    ol {
      list-style: none;
      padding: 0;

      display: flex;
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
            padding: 0;
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
              left: $mobile_base * $mobile_scale * -1.5;
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
  }
</style>