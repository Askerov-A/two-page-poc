export const URL = 'http://localhost:8081/items';
export const POPULAR_URL = 'http://localhost:8081/popular';
export const STATIC_DATA_URL = 'http://localhost:8081/static-data';

export const getItems = async (url) => {
    console.log("WE ARE DOING A REQUEST");

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
