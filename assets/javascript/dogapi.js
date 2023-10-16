// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'live_dFVawS2FZQHTQa7rhHFszUgLP4VKNNuR0G2XYiMxMR7xRa68ADA3LpJbtGBXEayB';

// Select the filter input field and the filter button
const filterInput = document.getElementById('breed-filter');
const filterButton = document.getElementById('filter-button');

// Select the container where filtered breeds will be displayed
const filteredBreedList = document.getElementById('filtered-breed-list');

// Define a function to filter dog breeds
function filterDogBreeds() {
    const breedName = filterInput.value.trim(); // Get the user's input
    if (breedName === '') {
        alert('Please enter a breed name or keyword.');
        return;
    }

    // Define the URL for filtering dog breeds by breed name
    const filteredBreedsUrl = `https://api.thedogapi.com/v1/breeds/search?q=${breedName}&api_key=${apiKey}`;

    // Make a request to filter dog breeds by breed name
    fetch(filteredBreedsUrl)
        .then(response => response.json())
        .then(filteredBreedsData => {
            // Handle the filtered list of dog breeds here
            console.log(filteredBreedsData); // Log the filtered list of breeds to the console for testing

            // Clear the previous results
            filteredBreedList.innerHTML = '';

            // Display the filtered list of dog breeds
            for (const breed of filteredBreedsData) {
                const breedName = breed.name;
                const breedListItem = document.createElement('p');
                breedListItem.textContent = breedName;
                filteredBreedList.appendChild(breedListItem);
            }
        })
        .catch(error => {
            console.error('Error fetching filtered dog breeds:', error);
        });
}

// Add an event listener to the filter button
filterButton.addEventListener('click', filterDogBreeds);