const showPuppyButton = document.getElementById('showPuppy'); // puppyButton
const showAdultButton = document.getElementById('showAdult');
const showFriendsButton = document.getElementById('showFriends');

const imageContainer = document.getElementById('gallery'); //bodyssä gallery id

const accessToken = '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'; // Replace with your GitHub personal access token
const repo = 'embsu/gallery'; // Replace with your GitHub username and repository name
const folder = 'album1'; // pentualbum
const folder2 = 'album2';
const folder3 = 'album3';

//------------IMAGE DATA TITLEILLE------------------


// --------------------PENTUKUVAT-----------------------
showPuppyButton.addEventListener('click', () => {
  console.log('Puppy button clicked')
  // Fetch images from the "album1" folder
  fetch(`https://api.github.com/repos/${repo}/contents/${folder}`, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(images => {
      imageContainer.innerHTML = ''; // Clear existing images
      images.forEach(image => {
        if (image.type === 'file' && (image.name.endsWith('.jpeg') || image.name.endsWith('.jpg'))) {
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('kuvat');
          
          const imgElement = document.createElement('img');
          imgElement.src = image.download_url;
          imgElement.alt = 'Image';

          const title = image.name.replace(/\.[^/.]+$/, ''); // Extract the title
          const titleElement = document.createElement('div');
          titleElement.textContent = title;
          titleElement.classList.add('image-title');

          imgContainer.appendChild(imgElement);
          imgContainer.appendChild(titleElement);
          imageContainer.appendChild(imgContainer);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});

// --------------------AIKUISKUVAT -----------------------
showAdultButton.addEventListener('click', () => {
  console.log('adult button clicked')
  // Fetch images from the "album1" folder
  fetch(`https://api.github.com/repos/${repo}/contents/${folder2}`, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(images => {
      imageContainer.innerHTML = ''; // Clear existing images
      images.forEach(image => {
        if (image.type === 'file' && (image.name.endsWith('.jpeg') || image.name.endsWith('.jpg'))) {
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('kuvat');
          
          const imgElement = document.createElement('img');
          imgElement.src = image.download_url;
          imgElement.alt = 'Image';

          const title = image.name.replace(/\.[^/.]+$/, ''); // Extract the title
          const titleElement = document.createElement('div');
          titleElement.textContent = title;
          titleElement.classList.add('image-title');

          imgContainer.appendChild(imgElement);
          imgContainer.appendChild(titleElement);
          imageContainer.appendChild(imgContainer);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});

// --------------------FRIENDS-----------------------
showFriendsButton.addEventListener('click', () => {
  console.log('MISC button clicked')
  // Fetch images from the "album1" folder
  fetch(`https://api.github.com/repos/${repo}/contents/${folder3}`, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(images => {
      imageContainer.innerHTML = ''; // Clear existing images
      images.forEach(image => {
        if (image.type === 'file' && (image.name.endsWith('.jpeg') || image.name.endsWith('.jpg'))) {
          const imgContainer = document.createElement('div'); // niin luodaan div elementti ja asetetaan se kuvien containeriksi
          imgContainer.classList.add('kuvat'); // lisätään luotuun div elementtiin class kuvat
          
          const imgElement = document.createElement('img');
          imgElement.src = image.download_url;
          imgElement.alt = 'Image';

          const title = image.name.replace(/\.[^/.]+$/, ''); // Extract the title
          const titleElement = document.createElement('div');
          titleElement.textContent = title;
          titleElement.classList.add('image-title');

          imgContainer.appendChild(imgElement);
          imgContainer.appendChild(titleElement);
          imageContainer.appendChild(imgContainer);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
});

  // TOKENI: galleryfetchtoken / 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