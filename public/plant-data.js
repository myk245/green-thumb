const apiKey = config.apiKey; 

const cardContainer = document.querySelector('.card-container'); 

// fetch from Trefle API and render plant cards when DOM loads
document.addEventListener('DOMContentLoaded', getPlantInfo)

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
   <a href="/plants/${plant.slug}">
      <button type="button" class="button" onclick="getMoreInfo(event)">More Info</button>
   </a>
   `
   cardContainer.appendChild(plantCard); 
}

async function getMoreInfo(event) {
   console.log(event.target.parentNode.parentNode.dataset.plantId)
   const plantId = event.target.parentNode.parentNode.dataset.plantId
   // console.log(event.target.parentNode.dataset.plantId)
   
   const response = await fetch(`https://trefle.io/api/v1/species/${plantId}?token=${apiKey}`);

   const plantData = await response.json();

   console.log(plantData.data)

   // await plantData.renderMoreDetails();
}

// when more info button is pressed, bring user to plant show page
// will create a separate view file for this and then have the button's onClick event listener redirect to that view
function renderMoreDetails(plant) {
   let plantPage = document.createElement('div'); 

   plantPage.className = 'plant-page'; 

   plantPage.innerHTML = `
      <h3>${plant.data.common_name}</h3>
      <div class="plant-photo-container">
      <img src='${plant.data.image_url}' class="plant-photo"/>
      </div>
      <br></br>
      <h4>${plant.data.scientific_name}</h4>
      <p>Edible?: ${plant.data.edible}</p>
   `
   cardContainer.appendChild(plantPage); 
}
