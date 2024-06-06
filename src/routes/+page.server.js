const SPREADSHEET_ID = "1vcRHOSD1nt-bImK2LJSCQWU0y2kwFZJdk-tVxmQtmso";

export async function load({fetch}) {
  const response = await fetch("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + "home");
  const data = await response.json();

  console.log(data)

  return {
    props: data
  };
}
