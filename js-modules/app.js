import { fetchBreeds, fetchImagesByBreed } from "./api.js";
import {
    populateDropdown,
    displaySpinner,
    displayError,
    clearError,
    populateCarousel,
} from "./dom.js";

async function init() {
    displaySpinner(true);
    try{
        const breeds = await fetchBreeds();
        populateDropdown(breeds);
    } catch{
        displayError("Failed to fetch breeds. Please try again later.");
    } finally{
        displaySpinner(false);
    }

    document.getElementById("breed-dropdown").addEventListener("change", async (evt) => {
        const breedID = evt.target.value;
        if (!breedID) return;

        displaySpinner(true);
        clearError();
        try{
            const images = await fetchImagesByBreed(breedID);
            populateCarousel(images);
        } catch {
            displayError("Failed to fetch images. Please try again later.");
        } finally{
            displaySpinner(false);
        }
    });
}

init();