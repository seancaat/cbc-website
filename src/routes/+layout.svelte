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
		<h2><i>CHINATOWN BASKETBALL CLUB</i></h2>
		<h3>DETAILS</h3>
		<ul>
			<li>Sundays at 10AM</li>
			<li>Columbus Park, NYC</li>
		</ul>

		<h3>CONTACT</h3>
		<ul>
			<li><a target="_blank" href="https://www.instagram.com/chinatownbasketballclub/">Instagram</a></li>
			<li><a target="_blank" href="mailto:chinatownbasketballclub@gmail.com">Email</a></li>
		</ul>

		<h3>SUNDAY FORECAST</h3>
		<p class="forecast">
			{data.temperature}º F, {data.probabilityOfPrecipitation.value}% chance of rain
			<br>
			via <a href="http://weather.gov" target="_blank">weather.gov</a>
		</p>

		<br/>
		<p>©Chinatown Baskebtall Club. All rights reserved.</footer>
</div>

<style>
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
		position: relative;
		z-index: 9;
		text-align: center;
		font-weight: 100;
	}

	footer h3 {
		margin-bottom: 0.25em;
	}

	footer ul, footer p {
		margin-top: 0;
		padding: 0;
	}

	footer h2 {
		display: block;
		font-size: 60px;
		margin: 0 auto 1em;
		line-height: 0.8;
	}

	footer a {
		font-weight: 100;
	}

	@media (max-width: 760px) {
		footer {
			padding: 12px 0;
		}

		footer h2 {
			font-size: 54px;
		}
	}
</style>
