import { getMealList } from "./displaylist.js";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const getMealData = async() => {
    const arr = [];
    const mealList = await getMealList(`${API_URL}`);
    mealList.forEach((item) => {
        const newObjArr = {
            id: item.idMeal,
            image: item.strMealThumb,
            name: item.strMeal,
            category: item.strCategory,
            origin: item.strArea,
            cookingInstruction: item.strInstructions,
        };
        arr.push(newObjArr);
    });
    return arr;
}

export default getMealData