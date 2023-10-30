<script lang="ts">
	import { page } from '$app/stores';  
  import Logo from '$lib/components/Logo.svelte'

  import type { TypeListSkeleton, TypeNavigationSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import Links from './Links.svelte'
  import List from './List.svelte'

  export let list: Entry<TypeListSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
	export let navigation: Entry<TypeNavigationSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<footer>
	<nav>
		<a href="/">
			<Logo />
		</a>
	</nav>

	<main>
		<List section={list} />
	</main>

	<nav class="bottom">
		<Links liens={navigation.fields.liens} />
	</nav>
</footer>

<style lang="scss">
	footer {
		padding: $gap * 3;
    min-height: 50vh;

    color: $banana;
		background-color: $black;

		@media (max-width: $mobile) {
			padding: $mobile_gap;
		}
	}

	main {
		width: 100%;
	}

	nav {
		display: flex;
		width: 100%;
    gap: $base*$scale*2;

    &.bottom {
			justify-content: flex-end;
    }
	}
</style>
