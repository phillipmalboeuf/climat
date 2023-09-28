<script lang="ts">
  import type { TypePageSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
    import Media from './Media.svelte';

  export let page: Entry<TypePageSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

{#if page.fields.bigHeader}
<header>
	<h1 class="h1--huge">{page.fields.titre}</h1>
	{#if page.fields.media}
	<figure>
		<Media media={page.fields.media} />
	</figure>
	{/if}
</header>
{/if}

<style lang="scss">
  header {
		padding: $gap;
		@media (max-width: $mobile) { padding: $mobile_gap; }

		figure {
			margin-top: $gap * 3;
			@media (max-width: $mobile) { margin-top: $mobile_gap * 2; }

			:global(img) {
				border-top-right-radius: $gap;
				border-bottom-left-radius: $gap;
			}
		}
	}
</style>