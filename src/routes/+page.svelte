<script>
	/** @type {import('./$types').PageData} */
	import Logo from '$lib/icons/Logo.svelte';
	export let data;

	let props = data.props;

	let manifesto = props.find(e => e.role === 'intro').value;
	let splitManifesto = ["", ""];

	const openingTag = '<strong>';
	const closingTag = '</strong>';

	const openingTagIndex = manifesto.indexOf(openingTag);
	const closingTagIndex = manifesto.indexOf(closingTag);

	if (openingTagIndex !== -1 && closingTagIndex !== -1) {
	    splitManifesto[0] = manifesto.slice(0, openingTagIndex);
	    splitManifesto[1] = manifesto.slice(closingTagIndex + closingTag.length);
	}

	console.log(manifesto);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span>
			{splitManifesto[0]}
			<Logo height={38.4} fill={"white"}/>
			{splitManifesto[1]}
		</span>
	</h1>
	<button>
		Read More
	</button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		background-image: url("$lib/images/dustin.jpg");
		background-size: cover;
		background-position: 40% 50%;
		height: 100%;
	}

	h1 {
		font-weight: 700;
		width: 20em;
		text-align: left;
	}

	button {
		display: block;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
