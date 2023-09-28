<script lang="ts">
	import { page } from '$app/stores';  
  import Logo from '$lib/components/Logo.svelte'

  import type { TypeNavigationSkeleton } from '$lib/clients/content_types'
  import type { Entry } from 'contentful'
  import Links from './Links.svelte'

  export let navigation: Entry<TypeNavigationSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">
</script>

<footer>
	<nav>
		<a href="/">
			<Logo />
		</a>
	</nav>


	<nav class="bottom">
		<Links liens={navigation.fields.liens} />
	</nav>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: $gap * 3;
    min-height: 50vh;

    color: $banana;
		background-color: $black;

		@media (max-width: $mobile) {
			flex-direction: column;
			padding: $mobile_gap;
		}
	}

	nav {
		display: flex;
		align-items: center;
    gap: $base*$scale*2;

    &.bottom {
      align-self: flex-end;
    }
	}
</style>
