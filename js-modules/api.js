const API_KEY = "live_IOSsAMxvLwObAUlVgUin8SFuZvN9UyZP4BXlwypBjfXuyk3uw2wyoBoeZNnHlFT4";
const BASE_URL = "https://api.thedogapi.com/v1";

export async function fetchBreeds(){
    try{
        const response = await fetch(`${BASE_URL}/breeds`, {
            headers: {"x-api-key": API_KEY},
        });
    if (!response.ok) throw new Error("Failed to fetch breeds");
    return await response.json();
    } catch (error){
        console.error(error);
        throw error;
    }
}

export async function fetchImagesByBreed(breedId){
    try {
        const response = await fetch(
            `${BASE_URL}/images/search?breed_id=${breedId}&limit=5`, {
            headers: {"x-api-key": API_KEY} }
        );
        if (!response.ok) throw new Error("Failed to fetch images");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}