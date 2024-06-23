import { env } from '$env/dynamic/private';
export async function load({fetch}) {

  const forecast_response = await fetch("https://api.weather.gov/gridpoints/OKX/33,35/forecast");
  const weather_data = await forecast_response.json();
  const sunday_weather = weather_data.properties.periods.find(p => p.name === "Sunday") || weather_data.properties.periods.find(p => p.name === "Today");

  return sunday_weather;

	// return { analyticsId: env.VERCEL_ANALYTICS_ID };
}
