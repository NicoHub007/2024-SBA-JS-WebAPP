export function populateDropdown(breeds) {
    const dropdown = document.getElementById("breed-dropdown");
    breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        dropdown.appendChild(option);
    });
}

export function displaySpinner(visible) {
    const spinner = document.getElementById("spinner");
    spinner.style.display = visible ? "block" : "none";
}

export function displayError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

export function clearError() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";
}

export function populateCarousel(images) {
    const carouselInner = document.getElementById("carousel-images");
    carouselInner.innerHTML = "";

    images.forEach((img, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
        const imgElement = document.createElement("img");
        imgElement.src = img.url;
        imgElement.className = "d-block w-100";
        carouselItem.appendChild(imgElement);
        carouselInner.appendChild(carouselItem);
    });
}