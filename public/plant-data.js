const apiKey = config.apiKey 

const cardContainer = document.querySelector('.card-container'); 

document.addEventListener('DOMContentLoaded', getPlantInfo)

function getPlantInfo() {
   fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
      .then(resp => resp.json())
      // .then(data => console.log(data.data))
      .then(data => (data.data.forEach(renderPlantCard)))
}

function renderPlantCard(plant) {
   let plantCard = document.createElement('div');

   plantCard.className = 'card'
   plantCard.innerHTML = `
   <h3>${plant.common_name}</h3>
   <img src='${plant.image_url}'/>
   `
   cardContainer.appendChild(plantCard); 
}




