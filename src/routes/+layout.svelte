<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Nav from './_components/Nav.svelte';
	import Background from './_components/Background.svelte';
	import './styles.css';

	/** @type {import('./$types').LayoutServerData} */
	export let data;

	// $: if (browser && data?.analyticsId) {
	// 	webVitals({
	// 		path: $page.url.pathname,
	// 		params: $page.params,
	// 		analyticsId: data.analyticsId
	// 	});
	// }
</script>

<div class="app">
	<Nav />

	<Background/>
	<main>
		<slot />
	</main>

	<footer>
		<h3>CHINATOWN BASKETBALL CLUB</h3>
		<h3>Sundays at 10AM</h3>
		<p>Columbus Park, NYC</p>

		<ul>
			<li><a target="_blank" href="https://www.instagram.com/chinatownbasketballclub/">Instagram</a></li>
		</ul>
	</footer>
</div>

<style>
	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-Regular.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-Bold.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-Bold.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-Light.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-Light.woff') format('woff');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-RegularOblique.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-RegularOblique.woff') format('woff');
		font-weight: normal;
		font-style: italic;
	}

	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-BoldOblique.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-BoldOblique.woff') format('woff');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'AliasMedium';
		src: url('fonts/RTAliasMedium-LightOblique.woff2') format('woff2'),
				 url('fonts/RTAliasMedium-LightOblique.woff') format('woff');
		font-weight: 100;
		font-style: normal;
	}
	.app {
		min-height: 100vh;
	}

	main {
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		z-index: 9;
	}

	footer {
		outline: 1px solid red;
		position: relative;
		z-index: 9;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
