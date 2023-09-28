<script lang="ts">
	import { page } from '$app/stores';  
  import Logo from '$lib/components/Logo.svelte'

  import type { TypeNavigationSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import Links from './Links.svelte'
  import Menu from './Menu.svelte'

  export let navigation: Entry<TypeNavigationSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<header>
	<nav>
		<a href="/">
			<Logo />
		</a>
	</nav>


	<nav class="links">
		<Links liens={navigation.fields.liens} />
	</nav>

	<Menu liens={navigation.fields.liens} />
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
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	.links {
		@media (max-width: $mobile) { display: none; }
	}

	nav {
		display: flex;
		align-items: center;
    gap: $base*$scale*2;
	}
</style>
