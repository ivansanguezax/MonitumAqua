let searchButton = document.querySelector("#search")


searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
});


async function sendApiRequest(){
  let API_KEY = "pSVT006wHp712KumhOmfua3LpgAGPMaJr9iSCvAI"
  let response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=-63.505657&lat=-16.859075&date=2020-08-21&&dim=0.10&api_key=${API_KEY}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data){
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}
