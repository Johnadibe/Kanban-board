import './index.css';
import fetchData from './modules/displaylist.js';
import Meal from './modules/displayCommentPopup.js';

fetchData();
const meal = new Meal();
meal.getMeal();
