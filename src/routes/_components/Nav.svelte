<script>
	import { page } from '$app/stores';
	import Logo from '$lib/icons/Logo.svelte'
</script>

<header>
	<nav>
		<ul>
			<li>
				<a>Home</a>
			</li>
			<li>
				<a>About</a>
			</li>
			<li>
				<a>Shop</a>
			</li>
			<li>
				<a>In the Paint</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		display: flex;
		list-style-type: none;
		gap: 1em;
		padding: 0;
	}

	li {
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
</style>
