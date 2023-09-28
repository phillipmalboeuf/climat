<script lang="ts">
  import type { TypeLienSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import type { MouseEventHandler } from 'svelte/elements'

  export let liens: Entry<TypeLienSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[]
  // export let onClick: MouseEventHandler<HTMLAnchorElement> = undefined
</script>

{#each liens as lien}
<a 
  href={lien.fields.lien}
  on:click
  class:button={lien.fields.emphase}
  {...lien.fields.externe && {
    target: "_blank",
    rel: "noopener noreferrer"
  }}
>
  {lien.fields.titre}
</a>
{/each}