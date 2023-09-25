<script lang="ts">
	import { page } from '$app/stores';  
  import Logo from '$lib/components/Logo.svelte'

  import type { TypeNavigationSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import Links from './Links.svelte'

  export let navigation: Entry<TypeNavigationSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<header>
	<nav class="corner">
		<a href="/">
			<Logo />
		</a>
	</nav>


	<nav class="corner">
		<Links liens={navigation.fields.liens} />
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: ($base*0.5) $base;
		margin-bottom: $base;

		position: sticky;
		top: 0;
		z-index: 10;
		background-color: $pistachio;
		border-bottom: 1px solid;
		border-radius: $base;
	}

	.corner {
		/* width: 3em;
		height: 3em; */
	}

	nav {
		display: flex;
		align-items: center;
    gap: $base*$scale*2;
	}
</style>
