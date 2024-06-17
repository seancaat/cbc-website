<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from '$lib/icons/Logo.svelte'
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/shop">Shop</a>
			</li>
			<li>
				<a href="/blog">In the Paint</a>
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
		font-weight: 700;
	}

	li a {
		text-decoration: none;
	}
	
</style>
