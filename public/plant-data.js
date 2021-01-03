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
   <button type="button" class="button" onclick="getMoreInfo(event)">More Info</button>
   `
   cardContainer.appendChild(plantCard); 
}

async function getMoreInfo(event) {
   // console.log(event.target.parentNode.dataset.plantId)
   const plantId = event.target.parentNode.dataset.plantId
   
   const response = await fetch(`https://trefle.io/api/v1/species/${plantId}?token=${apiKey}`);

   const plantData = await response.json();

   await renderMoreDetails(plantData);
}

// when more info button is pressed, modal will pop 
// up with additional details for the specific plant
function renderMoreDetails(plant) {
   console.log(plant.data)

   let plantModal = document.createElement('div'); 
   plantModal.className = 'modal fade'
   plantModal.innerHTML = `
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
         </div>
         <div class="modal-body">
      </div>
      <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Save changes</button>
         </div>
      </div>
   </div>
   </div>
   `
   
   cardContainer.appendChild(plantModal); 
}
