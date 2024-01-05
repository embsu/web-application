document.addEventListener('DOMContentLoaded', function () {
  const breedInfoDiv = document.getElementById('breed-info');
  const breedSelect = document.getElementById('breed-select');
  const apiKey = 'live_dFVawS2FZQHTQa7rhHFszUgLP4VKNNuR0G2XYiMxMR7xRa68ADA3LpJbtGBXEayB';


  fetch('https://api.thedogapi.com/v1/breeds', {          //http request to fetch the list of dog breeds
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())                      // http response to json
    .then(data => {                                         // place the data in the dropdown menu
  
      data.forEach(breed => {
        const option = document.createElement('option');  //create dropdown menu
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      // for breed selection changes
      breedSelect.addEventListener('change', function () {
        const selectedBreedId = breedSelect.value;
        // fetch and display breed information based on the selected breed ID
        fetchBreedInfo(selectedBreedId);
      });
    })
    .catch(error => {
      console.error('Error fetching breed list:', error);
      document.getElementById('breed-info').innerHTML = 'Virhe rotuja haettaessa';
    });

  function fetchBreedInfo(breedId) { // ---------------------------------RODUN NIMI
    fetch(`https://api.thedogapi.com/v1/breeds/${breedId}`, {
      headers: {
        'x-api-key': apiKey, 
      },
    })
      .then(response => response.json())
      .then(breed => {
        // create and display HTML elements for breed information
        const breedNameElement = document.createElement('p');
        breedNameElement.textContent = breed.name;

        // fetch the images associated with the breed
        fetchImagesForBreed(breedId, breedNameElement);

       // append the breedNameElement to the breedInfoDiv
      breedInfoDiv.innerHTML = ''; 
      breedInfoDiv.appendChild(breedNameElement);
    })
    .catch(error => {
      console.error('Error fetching breed information:', error);
      document.getElementById('breed-info').innerHTML = 'Virhe rodun tietoja haettaessa';
    });
}

  function fetchImagesForBreed(breedId, breedNameElement) { // ---------------------------------RODUN KUVA
    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then(response => response.json())
      .then(images => {
        if (images.length > 0) {
          // the first image of the breed
          const breedImageElement = document.createElement('img');
          breedImageElement.src = images[0].url;
          breedImageElement.alt = 'Breed Image';
          breedNameElement.appendChild(breedImageElement);
          fetchBreedDetails(breedId, breedNameElement);
        } else {
          console.log('No images available for this breed.');
        }
      })
      .catch(error => {
        console.error('Error fetching breed images:', error);
        document.getElementById('breed-info').innerHTML = 'Virhe rodun kuvaa haettaessa';

      });
  }

  function fetchBreedDetails(breedId, breedNameElement) { // ---------------------------------RODUN TIEDOT
    fetch(`https://api.thedogapi.com/v1/breeds/${breedId}`, {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then(response => response.json())
      .then(breed => {
  
        const breedTemperamentElement = document.createElement('p');
        breedTemperamentElement.textContent = `Temperament: ${breed.temperament}`;

        const breedBredForElement = document.createElement('p');
        breedBredForElement.textContent = `Bred For: ${breed.bred_for}`;

        const breedLifeSpanElement = document.createElement('p');
        breedLifeSpanElement.textContent = `Life Span: ${breed.life_span}`;

        const breedWeightElement = document.createElement('p');
        breedWeightElement.textContent = `Weight: ${breed.weight.metric} kg`;

        const breedHeightElement = document.createElement('p');
        breedHeightElement.textContent = `Height: ${breed.height.metric} cm`;


        breedNameElement.appendChild(breedTemperamentElement);
        breedNameElement.appendChild(breedBredForElement);
        breedNameElement.appendChild(breedLifeSpanElement);
        breedNameElement.appendChild(breedWeightElement);
        breedNameElement.appendChild(breedHeightElement);

        breedInfoDiv.appendChild(breedNameElement);
      })
      .catch(error => {
        console.error('Error fetching breed information:', error);
        document.getElementById('breed-info').innerHTML = 'Virhe rodun tietoja haettaessa';
      });
  }
});