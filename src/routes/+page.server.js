const SPREADSHEET_ID = "1vcRHOSD1nt-bImK2LJSCQWU0y2kwFZJdk-tVxmQtmso";

export const prerender = false;

export async function load({fetch}) {
  const response = await fetch("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + "home");
  const manifesto = await response.json();

  const forecast_response = await fetch("https://api.weather.gov/gridpoints/OKX/33,35/forecast");
  const weather_data = await forecast_response.json();
  const sunday_weather = weather_data.properties.periods.find(p => p.name === "Sunday");
  
  return {
    props: 
      {
        manifesto: manifesto,
        sunday_weather: sunday_weather,
      }
  };
}
