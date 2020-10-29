const apiKey = config.apiKey 

document.addEventListener('DOMContentLoaded', getPlantInfo)

function getPlantInfo() {
   fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
      .then(resp => resp.json())
      .then(data => console.log(data))
}




