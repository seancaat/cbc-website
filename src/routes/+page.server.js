const SPREADSHEET_ID = "1vcRHOSD1nt-bImK2LJSCQWU0y2kwFZJdk-tVxmQtmso";

export async function load() {
  return {
    p: await fetch("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + "home")
	  .then((res) => res.json())
	  .then((homeData) => {})
  }  
}
