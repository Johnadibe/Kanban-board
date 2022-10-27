import getNumberCategory from './itemCounter.js';
import { getLikes, addLike } from './addLike.js';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
const cardsContainer = document.querySelector('.display');

let mealCatArray = [];

const newMealObj = (mealCatArray, likes = []) => {
    if (mealCatArray.length) {
        const newMeals = mealCatArray.map((mealCat) => {
            const numOfLikes = likes.find((like) => {
                if (like.item_id === mealCat.idCategory) {
                    return like;
                }
            });
            return {
                ...mealCat,
                countLikes: numOfLikes ? numOfLikes.likes : 0,
            };
        });
        newMeals.length && displayData(newMeals);
    }
}

const mealAPI = async() => {
    const fetchResponse = await fetch(`${API_URL}`);
    await fetchResponse.json()
        .then((data) => {
            mealCatArray = data.meals;
            return getLikes();
        })
        .then((res) => {
            res.json()
                .then((likeData) => {
                    newMealObj(mealCatArray, likeData);
                })
                .catch(() => {
                    newMealObj(mealCatArray, []);
                });
        });
};

const mealCard = (data) => {
    const card = `<div class="card">
    <div class="img">
 <img src="${data.strMealThumb}" alt="card-image">
    </div>
            <div class="content">
                <div class="name">
                    <h3>${data.strMeal}</h3>
                    <div class="likes" id="${data.idMeal}">
                        <i class="fa-solid fa-heart add-like"></i>
                        <p class="likes-info">${data.countLikes}</p>
                    </div>
                </div>
                <button class="comment-btn">Comments</button>
                <button class="reservation-btn">Reservations</button>
            </div>
            </div>
            `;
    return card;
}

const displayData = async(items) => {
    let mealCategory = '';
    items.forEach((data) => {
        const listItem = mealCard(data);
        mealCategory += listItem;
    });
    cardsContainer.innerHTML = mealCategory;

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-heart')) {
                const catID = e.target.parentNode.getAttribute('id');
                addLike(catID).then(() => {
                    const currLikeNo = Number(e.target.nextElementSibling.textContent);
                    e.target.nextElementSibling.textContent = String(currLikeNo + 1);
                })
            }
        })
    })

    const counter = document.querySelector('.counter');
    counter.textContent = getNumberCategory(cardsContainer.children);
};

document.addEventListener('DOMContentLoaded', mealAPI);
export default displayData;