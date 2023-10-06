<script lang="ts">
  import type { Entry } from 'contentful'
  import type { TypeBannerSkeleton } from '$lib/clients/content_types'

  export let section: Entry<TypeBannerSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<section id={section.fields.id}>
  <ul>
    {#each section.fields.list as item}
    <li>{item}&nbsp;–</li>
    {/each}
    {#each section.fields.list as item}
    <li>{item}&nbsp;–</li>
    {/each}
  </ul>
</section>

<style lang="scss">
  section {
    margin: ($base * $scale * 1) 0 ($base * $scale * 1) ($base * $scale * -1);
    width: 100vw;
    overflow: hidden;
    // padding: ($base * $scale * 1);

    ul {
      list-style: none;
      padding: 0;

      display: flex;
      width: fit-content;
      gap: ($base * $scale * 1);

      will-change: transform;
      animation: slide 24s linear 0s infinite;

      li {
        color: $black;
        font-size: ($base * $scale * 4);
        font-family: $alt_display;
      }
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0) translateZ(0);
    }

    to {
      transform: translateX(-50%) translateZ(0);
    }
  }
</style>