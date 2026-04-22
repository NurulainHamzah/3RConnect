// Retrieve the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const newPostParam = urlParams.get('newpost');

// Check if the query parameter is present and true
if (newPostParam === 'true') {
    // Retrieve posted materials from sessionStorage
    const postedMaterials = JSON.parse(sessionStorage.getItem('userMaterials')) || [];

    // Display the posted materials on the page
    const materialList = document.querySelector('.material-list');
    postedMaterials.forEach(material => {
        const newMaterial = document.createElement('div');
        newMaterial.className = 'material';
        newMaterial.innerHTML = `
            <h3>${material.name}</h3>
            <p>Description: ${material.description}</p>
            <p>Condition: ${material.condition}</p>
            <p>Price: RM${material.price}</p>
            <p>Contact Details: ${material.phone}</p>
            <div class="centered-media">
                <img src="${material.image}" alt="Material Image" width="450" class="media-item">
                <video width="350" height="300" controls class="media-item">
                    <source src="${material.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
        materialList.appendChild(newMaterial);
    });
}

async function postMaterial() {
    const materialName = document.getElementById('materialName').value;
    const materialDescription = document.getElementById('materialDescription').value;
    const materialCondition = document.getElementById('materialCondition').value;
    const materialPrice = document.getElementById('materialPrice').value;
    const materialPhone = document.getElementById('materialPhone').value;

    try {
        const imageURL = await getUploadedFileURL('materialImage');
        const videoURL = await getUploadedFileURL('materialVideo');

        const postedMaterial = {
            name: materialName,
            description: materialDescription,
            condition: materialCondition,
            price: materialPrice,
            phone: materialPhone,
            image: imageURL,
            video: videoURL
        };

        // Get existing userMaterials from sessionStorage or create an empty array
        const userMaterials = JSON.parse(sessionStorage.getItem('userMaterials')) || [];
        
        // Add the new material to the array
        userMaterials.push(postedMaterial);

        // Save the updated userMaterials back to sessionStorage
        sessionStorage.setItem('userMaterials', JSON.stringify(userMaterials));

        // Display a notification
        alert('Post successfully created!');

        // Redirect to the same page with a query parameter indicating a new post
        window.location.href = `?newpost=true`;
        } catch (error) {
            console.error('Error uploading files:', error);
            // Handle the error, possibly display an error message to the user
        }
}



// Function to preview the uploaded image
function previewImage() {
    const input = document.getElementById('materialImage');
    const preview = document.getElementById('imagePreview');

    const file = input.files[0];

    if (file) {
        const objectURL = URL.createObjectURL(file);
        // Display the image preview
        preview.innerHTML = `<img src="${objectURL}" alt="Image Preview" width="150">`;
    }
}

// Function to preview the uploaded video
function previewVideo() {
    const input = document.getElementById('materialVideo');
    const preview = document.getElementById('videoPreview');

    const file = input.files[0];

    if (file) {
        const objectURL = URL.createObjectURL(file);
        // Display the video preview
        preview.innerHTML = `<video width="150" height="100" controls>
                                <source src="${objectURL}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>`;
    }
}

// Function to filter materials based on keyword input
function filterMaterials() {
    const keywordInput = document.getElementById('keywordFilter').value.toLowerCase();
    const materialList = document.querySelector('.material-list');
    const materials = materialList.querySelectorAll('.material');

    materials.forEach(material => {
        const materialName = material.querySelector('h3').innerText.toLowerCase();
        const materialDescription = material.querySelector('p:nth-child(2)').innerText.toLowerCase();

        // Show or hide materials based on the keyword filter
        if (materialName.includes(keywordInput) || materialDescription.includes(keywordInput)) {
            material.style.display = 'block';
        } else {
            material.style.display = 'none';
        }
    });
}

function getUploadedFileURL(inputId) {
    return new Promise((resolve) => {
        const fileInput = document.getElementById(inputId);
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const dataURL = e.target.result;
                resolve(dataURL);
            };

            reader.readAsDataURL(file);
        } else {
            resolve(''); // Return an empty string if no file is selected
        }
    });
}


function clearFormInputs() {
    document.getElementById('materialName').value = '';
    document.getElementById('materialDescription').value = '';
    document.getElementById('materialCondition').value = '';
    document.getElementById('materialPrice').value = '';
    document.getElementById('materialPhone').value = '';
    document.getElementById('materialImage').value = ''; // Clear input file for images
    document.getElementById('materialVideo').value = ''; // Clear input file for video

    // Clear the preview elements
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('videoPreview').innerHTML = '';
}
