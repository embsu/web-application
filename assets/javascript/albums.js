const imageContainer = document.getElementById('gallery');
const showPuppyButton = document.getElementById('showPuppy'); 
const showAdultButton = document.getElementById('showAdult');
const showFriendsButton = document.getElementById('showFriends');

//-------Puppy album
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

//-------Adult album
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
    { imageUrl: 'assets/pictures/album2/Saunasolmu.jpg', description: 'Kuperkeikka' },
    { imageUrl: 'assets/pictures/album2/Talvi.jpeg', description: 'Talvi' },
    { imageUrl: 'assets/pictures/album2/Tuuli tuivertaa.jpeg', description: 'Tuuli tuivertaa' },
    { imageUrl: 'assets/pictures/album2/Veneilemässä.jpg', description: 'Veneilemässä' },
    { imageUrl: 'assets/pictures/album2/Lätäkkö.jpg', description: 'Väliviilennys' },
];

//-------Buddy album
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

// load images for a folder
function loadImages(images) {
    imageContainer.innerHTML = '';  // Clear previous images
    images.forEach(imageData => {    // Loop through each image URL

        const imgContainer = document.createElement('div'); // container for the images
        const image = document.createElement('img');        // the image element 
        const description = document.createElement('div');  // description element

        imgContainer.classList.add('kuvatContainer');   // add 'kuvatContainer' class to the image container
        image.classList.add('kuvat');                   // add 'kuvat' class to the image element
        description.classList.add('description');       // add 'description' class to the description element
        
        image.src = imageData.imageUrl; // image source to the image URL
        image.alt = 'Image';    // pic alt name when image is not found
        description.textContent = imageData.description; // description text to the image description

        imgContainer.appendChild(image); // append the image to the container
        imgContainer.appendChild(description); // append the description to the container
        imageContainer.appendChild(imgContainer); // append the image container to the main container
    });
}

// event listeners for folder buttons
showPuppyButton.addEventListener('click', () => loadImages(album1Images)); //when you click the button, load images from the folder
showAdultButton.addEventListener('click', () => loadImages(album2Images));
showFriendsButton.addEventListener('click', () => loadImages(album3Images));

