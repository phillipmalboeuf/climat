<script lang="ts">
  import type { TypeLienSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'

  export let liens: Entry<TypeLienSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">[]
</script>

{#each liens as lien}
<a 
  href={lien.fields.lien}
  class:button={lien.fields.emphase}
  {...lien.fields.externe && {
    target: "_blank",
    rel: "noopener noreferrer"
  }}
>
  {lien.fields.titre}
</a>
{/each}