const imageContainer = document.getElementById('gallery');
const showPuppyButton = document.getElementById('showPuppy'); // puppyButton
const showAdultButton = document.getElementById('showAdult');
const showFriendsButton = document.getElementById('showFriends');

// Define your image URLs for each folder
//-------Pentualbumi
const album1Images = [
    { imageUrl: 'assets/pictures/album1/suspicious.jpg', description: 'Suspicious' },
    { imageUrl: 'assets/pictures/album1/Autoilija.jpg', description: 'Ajelulla' },
    { imageUrl: 'assets/pictures/album1/Koiranpentuilme.jpg', description: 'Koiranpentuilme' },
    { imageUrl: 'assets/pictures/album1/Reissussa.jpg', description: 'Reissussa' },
    { imageUrl: 'assets/pictures/album1/Polskittu ON.jpg', description: 'Polskittu on' },
    { imageUrl: 'assets/pictures/album1/Kerrankin paikallaan.jpeg', description: 'Kerrankin paikallaan' },
    { imageUrl: 'assets/pictures/album1/Ruska ja pentu.jpeg', description: 'Ruskassa' },
    { imageUrl: 'assets/pictures/album1/Sploot.jpg', description: 'Sploot' },
    { imageUrl: 'assets/pictures/album1/Nuuh.jpg', description: 'Hiekkaa kärsässä' },
    { imageUrl: 'assets/pictures/album1/Huuli rullalla.jpg', description: 'Huuli rullalla' },
    { imageUrl: 'assets/pictures/album1/Hampaita kutittaa.jpg', description: 'Hampaita kutittaa' },
    { imageUrl: 'assets/pictures/album1/Hyvää narua.jpg', description: 'Hyvää narua' },
    { imageUrl: 'assets/pictures/album1/Hai räjähti.jpg', description: 'Pääsin turvaan' },
    { imageUrl: 'assets/pictures/album1/Tiskiallas.jpg', description: 'Löysin tän tiskialtaasta' },
    { imageUrl: 'assets/pictures/album1/Kuuma.jpg', description: 'Riehuessa läkähtyy' },
    { imageUrl: 'assets/pictures/album1/Lurp.jpg', description: 'Lurp' },
    { imageUrl: 'assets/pictures/album1/Eka joulu.jpeg', description: 'Eka joulu' }
];

//-------Aikuisalbumi
const album2Images = [
    { imageUrl: 'assets/pictures/album2/hhhh.jpg', description: 'Ei lisättävää' },
    { imageUrl: 'assets/pictures/album2/Hiekkakärsä.jpg', description: 'Hiekkakärsä' },
    { imageUrl: 'assets/pictures/album2/Hymyä.jpg', description: 'Hymyä' },
    { imageUrl: 'assets/pictures/album2/Iltalussutukset.jpg', description: 'Iltalussutukset' },
    { imageUrl: 'assets/pictures/album2/Kesä kuivattaa.jpeg', description: 'Kesä kuivattaa' },
    { imageUrl: 'assets/pictures/album2/Lurps.jpg', description: 'Kukkaispoika' },
    { imageUrl: 'assets/pictures/album2/Mamman sylissä.jpg', description: 'Mamman sylissä' },
    { imageUrl: 'assets/pictures/album2/Piilossa.jpg', description: 'Piilossa' },
    { imageUrl: 'assets/pictures/album2/Pirtsakka päivä.jpeg', description: 'Pirtsakka päivä' },
    { imageUrl: 'assets/pictures/album2/Plöö.jpeg', description: 'Plöö' },
    { imageUrl: 'assets/pictures/album2/Pultsari.jpg', description: 'Pultsari' },
    { imageUrl: 'assets/pictures/album2/Puolukassa.jpg', description: 'Puolukassa' },
    { imageUrl: 'assets/pictures/album2/Saunasolmu.jpg', description: 'Saunasolmu' },
    { imageUrl: 'assets/pictures/album2/Talvi.jpeg', description: 'Talvi' },
    { imageUrl: 'assets/pictures/album2/Tuuli tuivertaa.jpeg', description: 'Tuuli tuivertaa' },
    { imageUrl: 'assets/pictures/album2/Veneilemässä.jpg', description: 'Veneilemässä' },
    { imageUrl: 'assets/pictures/album2/Lätäkkö.jpg', description: 'Väliviilennys' },
];

//-------Kaverialbumi
const album3Images = [
    { imageUrl: 'assets/pictures/album3/Lakaisu.jpg', description: 'Annas ku autan' },
    { imageUrl: 'assets/pictures/album3/Ipanat.jpg', description: 'Tänne sitä herkkua' },
    { imageUrl: 'assets/pictures/album3/Hero.jpg', description: 'Hero ja mä' },
    { imageUrl: 'assets/pictures/album3/Derp.jpg', description: 'Papparaisen ärsytystä' },
    { imageUrl: 'assets/pictures/album3/jonossa.jpeg', description: 'Bestiksen kaa rannalla' },
    { imageUrl: 'assets/pictures/album3/Kamut.jpg', description: 'Maalaismaisemissa' },
    { imageUrl: 'assets/pictures/album3/Puistossa.jpg', description: 'Mamman kaa puistossa' },
    { imageUrl: 'assets/pictures/album3/Kumman keppi.jpg', description: 'Yhteinen keppi' },
    { imageUrl: 'assets/pictures/album3/Nisu-Helena.jpeg', description: 'Kissasisko Nisu-Helena' },
    { imageUrl: 'assets/pictures/album3/Herra Lucifer.jpg', description: 'Kissaveli Lucifer' },
];

// Function to load images for a folder
function loadImages(images) {
    imageContainer.innerHTML = '';  // Clear previous images
    images.forEach(imageData => {    // Loop through each image URL //for loop

        const imgContainer = document.createElement('div'); // Create a container for the images (div tag)
        const image = document.createElement('img');        // Create the image element (img tag)
        const description = document.createElement('div');  // Create a description element (div tag)

        imgContainer.classList.add('kuvatContainer');   // Add 'kuvatContainer' class to the image container
        image.classList.add('kuvat');                   // Add 'kuvat' class to the image element
        description.classList.add('description');       // Add 'description' class to the description element

        
        image.src = imageData.imageUrl; // Set the image source to the image URL
        image.alt = 'Image';    // kuvan nimi sillonkun ei näy
        description.textContent = imageData.description; // Set the description text to the image description

        imgContainer.appendChild(image); // Append the image to the container
        imgContainer.appendChild(description); // Append the description to the container
        imageContainer.appendChild(imgContainer); // Append the image container to the main container
    });
}

// Add event listeners for folder buttons
showPuppyButton.addEventListener('click', () => loadImages(album1Images)); //eli kun painaa puppybuttonia, loadimages funktio käynnistyy
showAdultButton.addEventListener('click', () => loadImages(album2Images));
showFriendsButton.addEventListener('click', () => loadImages(album3Images));

// Load initial images (you can change this to load a default folder)
// loadImages(folder1Images);