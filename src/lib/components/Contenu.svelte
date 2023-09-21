<script lang="ts">
  import type { Entry, EntryFieldTypes } from 'contentful'
  // import type { TypeBanner, TypeBannerSkeleton, TypePageFields, TypePageSkeleton, TypeTextSkeleton } from '$lib/clients/content_types'
  import Text from './Text.svelte'
  import Banner from './Banner.svelte'
  import List from './List.svelte'

  export let contenu: Entry<any, "WITHOUT_UNRESOLVABLE_LINKS">[]
</script>

{#each contenu as section}
{#if section.sys.contentType.sys.id === 'text'}
<Text {section} />
{:else if section.sys.contentType.sys.id === 'banner'}
<Banner {section} />
{:else if section.sys.contentType.sys.id === 'list'}
<List {section} />
{/if}
{/each}

<style lang="scss">
</style>