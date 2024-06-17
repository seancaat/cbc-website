<script>
	import benji from '$lib/images/benji.jpg';
</script>

<svelte:head>
	<title>CBC Blog: In the Paint</title>
	<meta name="description" content="Chinatown Basketball Club Blog" />
</svelte:head>

<div class="text-column">
	<h1>
    <span>IN<br>THE<br>PAINT</span>
  </h1>
  <p>CBC Community Spotlight</p>

  <section class='entry'>
    <h2>GUAVABABA - GB Stories Vol. 1</h2>
    <p>Andrew Liu, Connor Sen Warnick, Benji Hsu</p>
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/907294942?h=f9d5d36a74&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus risus, pulvinar sed feugiat nec, tempor in nibh. </p>
  </section>

  <section class='entry'>
    <h2>Characters Disappearing</h2>
    <p>Connor Sen Warnick</p>
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/775998654?h=b618a89590&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus risus, pulvinar sed feugiat nec, tempor in nibh. </p>
  </section>
  
</div>

<style>
  h1 {
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    line-height: 1;
    margin-bottom: 0;
  }

  h1 + p {
    margin-top: 0;
    text-transform: uppercase;
    text-align: center;
  }

  .entry {
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 2px solid rgba(255, 255, 255, 0.516);
    padding-bottom: 3rem;
  }

  .entry:last-of-type {
    margin-top: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.516);
  }

	img {
		width: 100%;
		max-width: 100%;
	}

  /* iframe {
    display: block;
    margin: 2rem auto;
  } */

	.text-column {
    margin: 10rem auto;
    position: relative;
    z-index: 2;
    max-width: calc(100% - 30px);
  }

  h2 {
    margin-bottom: 0;
  }
  h2 + p {
    margin-top: 0;
  }

  @media screen and (min-width: 1024px) {
    .text-column {
      max-width: 500px;
      margin: 10rem auto;
    }
  }
</style>
