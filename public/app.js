const config = '../config.js';
const apiKey = config.API_KEY; 

document.addEventListener('DOMContentLoaded', getPlantInfo)

function getPlantInfo() {
   fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
      .then(resp => resp.json())
      .then(plantInfo => console.log(plantInfo))
}




