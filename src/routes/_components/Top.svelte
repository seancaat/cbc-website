<script>
	import Logo from '$lib/icons/Logo.svelte';
  import GridWrapper from './Lookbook/GridWrapper.svelte';

  export let forecast; 
  export let manifesto = ""
  let splitManifesto = ["", ""];

	const openingTag = '<strong>';
	const closingTag = '</strong>';

	const openingTagIndex = manifesto.indexOf(openingTag);
	const closingTagIndex = manifesto.indexOf(closingTag);

	if (openingTagIndex !== -1 && closingTagIndex !== -1) {
	    splitManifesto[0] = manifesto.slice(0, openingTagIndex);
	    splitManifesto[1] = manifesto.slice(closingTagIndex + closingTag.length);
	}

</script>

<section class='top'>
  <div class="lead-wrapper">
  	<h1>
  		<span>
  			{splitManifesto[0]}
  			<Logo fill={"white"} />
  			{splitManifesto[1]}
  		</span>
  	</h1>
  </div>

  <GridWrapper>
    <div class='info-wrapper'>
    <div class="schedule">
      <p>Weekly Runs</p>
      <p>
        <span>Sundays at 10AM</span> at <a target="_blank" href="https://www.google.com/maps/place/Columbus+Park+Court/@40.7144694,-74.0004033,19.22z/data=!4m6!3m5!1s0x89c25bfef2806249:0xfd4015dc18a21f8e!8m2!3d40.7143152!4d-73.9998263!16s%2Fg%2F11gwmphlyl?entry=ttu">Columbus Park, NYC</a></p>
    </div>
    <!-- <div>
      <h2>Sunday Forecast</h2>
      <ul>
        <li class="forecast">
          <a href="http://weather.gov" target="_blank">
            {forecast.temperature}º F, {forecast.probabilityOfPrecipitation.value}% chance of rain
          </a>
        </li>
      </ul>
    </div> -->
  </div>
  </GridWrapper>

</section>

<style>
  section.top {
    color: white;
    margin: 12rem auto 10rem;
  }

  .lead-wrapper {
    max-width: 960px;
    width: calc(100% - 30px);
    margin: 0 auto;
  }

  .info-wrapper {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: row;
    /* justify-content: center;/ */
    gap: 2em;
  }

  .schedule {
    display: flex;
    gap: 1em;
  }

  h1 {
    position: relative;
    font-size: 48px;
    max-width: 20em;
  }

  h2 {
    font-size: 18.72px;
    text-transform: uppercase;
    margin-bottom: 0.25em;
    letter-spacing: 0.03em;
  }

  li {
    font-weight: 100;
    font-size: 20px;
    line-height: 1.4;
  }

  @media screen and (max-width: 1024px) {
    section.top {
      color: white;
      margin: 6rem auto 4rem;
    }

    h1 {
      font-size: 28px;
      max-width: unset;
    }

    h2 {
      font-size: 1rem;
    }

    li {
      font-size: 1rem;
    }
  }

  
</style>