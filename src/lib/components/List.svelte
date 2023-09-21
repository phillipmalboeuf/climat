<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeListSkeleton } from '$lib/clients/content_types'
  import Text from './Text.svelte'

  export let section: Entry<TypeListSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id} class={section.fields.type}>
  <ol>
    {#each section.fields.list as item}
    <li>
      <Text section={item} small />
    </li>
    {/each}
  </ol>
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
  }
</style>