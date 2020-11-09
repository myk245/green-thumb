const apiKey = config.apiKey 

const cardContainer = document.querySelector('.card-container'); 

document.addEventListener('DOMContentLoaded', getPlantInfo)

async function getPlantInfo() {
   const response = await fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`);

   const plantData = await response.json();

   await plantData.data.forEach(renderPlantCard)
}

// function getPlantInfo() {
//    fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
//       .then(resp => resp.json())
//       // .then(data => console.log(data.data))
//       .then(data => (data.data.forEach(renderPlantCard)))
// }

function renderPlantCard(plant) {
   let plantCard = document.createElement('div');

   plantCard.className = 'plant-card'
   plantCard.innerHTML = `
   <h3>${plant.common_name}</h3>
   <div class="plant-photo-container">
      <img src='${plant.image_url}' class="plant-photo"/>
   </div>
   <br></br>
   <h4>${plant.scientific_name}</h4>
   `
   cardContainer.appendChild(plantCard); 
}




