<script>
	import { page } from '$app/stores';
  import Logo from '$lib/components/Logo.svelte'
</script>

<header>
	<div class="corner">
		<a href="/">
			<Logo />
		</a>
	</div>

	<nav>
	</nav>

	<div class="corner">
		<button>Devenir membre</button>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $gap;
	}

	.corner {
		/* width: 3em;
		height: 3em; */
	}

	nav {
		display: flex;
		justify-content: center;
	}
</style>
