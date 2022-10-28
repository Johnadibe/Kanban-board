import _ from 'lodash'; // eslint-disable-line
import './index.css';
import displayMeals from './modules/displaylist.js';
import { addLike, displayLike } from './modules/addLike.js';
import mealCounter from './modules/itemCounter.js'

const cardsContainer = document.querySelector('.display');

document.addEventListener('DOMContentLoaded', async() => {
    await displayMeals(cardsContainer);

    const allMeals = document.querySelectorAll('.card');
    const itemCounter = document.querySelector('.counter');
    itemCounter.textContent = mealCounter([...allMeals]);

    const likes = document.querySelectorAll('.likes-info');
    [...likes].forEach(async(like) => {
        await displayLike(like);
    });
});

window.addEventListener('click', async(event) => {
    const btnLike = event.target;
    if (btnLike.classList.contains('add-like')) {
        const Id = btnLike.getAttribute('data-id');
        await addLike(Id);
        const like = btnLike.nextElementSibling;
        await displayLike(like);
    }
});