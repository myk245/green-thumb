const apiKey = config.apiKey; 

const cardContainer = document.querySelector('.card-container'); 

document.addEventListener('DOMContentLoaded', getPlantInfo)

// click event listener for more info button
document.onload = function () {
   document.querySelector('.button').addEventListener('click', getMoreInfo);
}

async function getPlantInfo() {
   const response = await fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`);

   const plantData = await response.json();

   await plantData.data.forEach(renderPlantCard)
}

function renderPlantCard(plant) {
   let plantCard = document.createElement('div');

   plantCard.className = 'plant-card'
   plantCard.dataset.plantId = `${plant.slug}`
      
   plantCard.innerHTML = `
   <h3>${plant.common_name}</h3>
   <div class="plant-photo-container">
      <img src='${plant.image_url}' class="plant-photo"/>
   </div>
   <br></br>
   <h4>${plant.scientific_name}</h4>
   <button type="button" class="button">More Info</button>
   `
   cardContainer.appendChild(plantCard); 
}

function getMoreinfo(event) {
   // const plantId = event.target.parentNode
   console.log("hello")
   // const response = await fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`);

   // const plantData = await response.json();

   // await plantData.data.forEach(renderPlantCard)
}

