// import displayCounter from './counterFile.js';
// import { addLikeToItem, getLikesToItems } from './like.js';

// const displayData = async(item) => {
//     const cardContainer = document.querySelector('.display');
//     cardContainer.innerHTML = '';
//     item.forEach((meal) => {
//         const card = document.createElement('div');
//         card.id = meal.idMeal;
//         card.classList.add('card');
//         card.innerHTML = `
//         <div class="img">
//           <img src="${meal.strMealThumb}" alt="${meal.image}">
//              </div>
//                      <div class="content">
//                         <div class="name">
//                              <h3>${meal.name}</h3>
//                              <div class="likes" id="${meal.id}">
//                                  <i class="fa-solid fa-heart add-like" data-id="${meal.id}"></i>
//                                <p class="likes-info" data-id="${meal.id}">0 Likes</p>
//                            </div>
//                        </div>
//                    <button class="comment-btn" data-id="${meal.id}">Comments</button>
//            <button class="reservation-btn" data-id="${meal.id}>Reservations</button>
//                     </div>
//       `;
//         const btnLikedElement = item.querySelector('.btn-liked');
//         const printLike = (data) => {
//             const likesReturned = data.find(
//                 (element) => element.item_id === food.idMeal,
//             );
//             btnLikedElement.innerHTML = likesReturned !== undefined ? `<i class="fas fa-heart"></i> (${likesReturned.likes})` : '<i class="far fa-heart"></i> (0)';
//         };
//         getLikesToItems()
//             .then(printLike)
//             .catch((e) => e);

//         btnLikedElement.addEventListener('click', async() => {
//             await addLikeToItem(food.idMeal);
//             getLikesToItems()
//                 .then(printLike)
//                 .catch((e) => e);
//         });
//         board.appendChild(item);
//     });
//     const buttonComments = document.querySelectorAll('.btn-recipe');
//     buttonComments.forEach((element, index) => {
//         element.addEventListener('click', () => {
//             popUp(index);
//         });
//     });
// };

// const getAllData = async(url, foodChosen) => {
//     const request = new Request(url);
//     const response = await fetch(request);
//     const responseJson = await response.json();
//     const responseInfo = responseJson.meals;
//     await displayData(responseInfo);
//     const itemcount = document.querySelectorAll('article');
//     displayCounter(foodChosen, itemcount.length);
// };

// export { getAllData as default };












// /* eslint-disable array-callback-return */
// /* eslint-disable consistent-return */

import getMealData from "./getmeals.js";

// // const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';


export const getMealList = async(API_URL) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const listMeal = data.meals.slice(0, 25);
    return listMeal;
}


// const getMealData = async() => {
//     const arr = [];
//     const mealList = await getMealList(API_URL);
//     mealList.forEach((item) => {
//         const newObjArr = {
//             id: item.idMeal,
//             image: item.strMealThumb,
//             name: item.strMeal,
//             category: item.strCategory,
//             origin: item.strArea,
//             cookingInstruction: item.strInstructions,
//         };
//         arr.push(newObjArr);
//     });
//     return arr;
// }

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
              <button class="comment-btn" data-id="${meal.id}">Comments</button>
          <button class="reservation-btn" data-id="${meal.id}">Reservations</button>
            </div>
            </div>`;
        container.innerHTML += mealCard;
    });
};

export default displayMeals