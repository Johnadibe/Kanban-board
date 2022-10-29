const getMealList = async(API_URL) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const listMeal = data.meals.slice(0, 25);
    return listMeal;
};

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s";

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
};

const displayMeals = async(container) => {
    const meals = await getMealData();
    meals.forEach((meal) => {
        const mealCard = `
    <div class="card">
    <div class="img">
 <img src="${meal.image}" alt="${meal.image}">
    </div>
            <div class="content">
                <div class="name">
                    <h3>${meal.name}</h3>
                    <div class="likes" id="${meal.id}">
                        <i class="fa-solid fa-heart add-like" data-id="${meal.id}"></i>
                        <p class="likes-info" data-id="${meal.id}">0 Likes</p>
                    </div>
                </div>
              <button class="comment-btn" data-id="${meal.id}" onClick="commentClick([${meal.id}, '${meal.image}', '${meal.name}', '${meal.category}', '${meal.origin}'])">Comments</button>
          <button class="reservation-btn" data-id="${meal.id}">Reservations</button>
            </div>
            </div>`;
        container.innerHTML += mealCard;
    });
};

export { getMealData, displayMeals };