<script>
  export let data;
</script>

<footer>
  <h2><i>CHINATOWN BASKETBALL CLUB</i></h2>
  <h3>WEEKLY RUNS</h3>
  <ul>
    <li>Sundays at 10AM</li>
    <li><a target="_blank" href="https://www.google.com/maps/place/Columbus+Park+Court/@40.7144694,-74.0004033,19.22z/data=!4m6!3m5!1s0x89c25bfef2806249:0xfd4015dc18a21f8e!8m2!3d40.7143152!4d-73.9998263!16s%2Fg%2F11gwmphlyl?entry=ttu">Columbus Park, NYC</a></li>
  </ul>

  <h3>CONTACT</h3>
  <ul>
    <li><a target="_blank" href="https://www.instagram.com/chinatownbasketballclub/">Instagram</a></li>
    <li><a target="_blank" href="mailto:chinatownbasketballclub@gmail.com">Email</a></li>
  </ul>

  <h3>SUNDAY FORECAST</h3>
  <p class="forecast">
    <a href="http://weather.gov" target="_blank">{data.temperature}º F, {data.probabilityOfPrecipitation.value}% chance of rain</a>
  </p>

  <p class="copyright">©Chinatown Basketball Club. All rights reserved.</p>
</footer>

<style>
  footer {
		position: relative;
		z-index: 9;
		text-align: center;
		font-weight: 100;
    padding: 3rem 0;
    /* outline: 1px solid red; */
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
		line-height: 1;
    max-width: 8em;
	}

	footer a {
		font-weight: 100;
	}

  .copyright {
    margin-top: 60px;
		font-size: 1rem;
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