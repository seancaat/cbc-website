<script>
	/** @type {import('./$types').PageData} */
	import Top from './_components/Top.svelte'
	import Lookbook from './_components/Lookbook/index.svelte';
	export let data;

	let props = data.props;

	// console.log(data);

	let manifesto = props.find(e => e.role === 'intro').value;
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Top {manifesto} />
<Lookbook />

<style>
</style>
