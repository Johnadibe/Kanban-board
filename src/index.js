import './index.css';
import fetchData from './modules/displaylist.js';
import Meal from './modules/displayCommentPopup.js';
import {leaderBoard} from './modules/commentClass';

fetchData();
const meal = new Meal();
meal.getMeal();

const form = document.querySelector('.comment-form');
//const refresh = document.querySelector('#refresh');
const newUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UhzCqegP8IVtOrNSccjc/comments/';

const user = document.querySelector('.name');
const comment = document.querySelector('.insight');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  leaderBoard(user.value, comment.value);
  form.reset();
});

document.addEventListener('DOMContentLoaded', async () => {
  const storedScores = await fetch(newUrl);
  const response = await storedScores.json();
  Scores.displayScores(response.result);
});