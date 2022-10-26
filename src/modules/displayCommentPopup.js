export default class Meal {
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    this.mealContainer = document.querySelector('.comment-content');
  }
  getMeal = async () => {
    const res = await fetch(this.API_URL);
    const data = await res.json().catch((err) => new Error(err));
    this.mealPopup(data.categories);
  };
  mealPopup = (data) => {
    const seeMeal = document.querySelectorAll('.comment-btn');
    seeMeal.forEach((item, i) => {
      item.addEventListener('click', () => {
        const popupModal = document.createElement('div');
        popupModal.classList.add = 'comment';
        popupModal.innerHTML = `
            <div class='comment-popup'>
        <button id='close-btn'>
            <i class='fa-solid fa-xmark'></i>
        </button>
        <div class='reserve-display'>
            <div class='description'>
                <img src='${data[i].strCategoryThumb}' alt='meal-image'>
                <h3 class='meal-title'>${data[i].strCategory}</h3>
                <p class='meal-description'>${data[i].strCategoryDescription}</p>
                <h3 class='meal-title'>Comments</h3>
                <ul class='list-comments'>
                <li class='meal-description'>Comment 1</li>
                <li class='meal-description'>Comment 2</li>
                </ul>
                <div>
                <h3 class='meal-title'>Add a comment</h3>
                <form class= 'comment-form'>
                <input type='text' placeholder ='Your Name'>
                <textarea type='text' placehoder ='Your Insight' ></textarea>
                <button type='submit' class='comment-btn'>Comment</button>
                </form>
                </div>
            </div>
         
        </div>
    </div>
            `;
        this.mealContainer.appendChild(popupModal);
        this.closeMeal(popupModal);
      });
    });
  };

  closeMeal = (popupModal) => {
    const btnClose = document.querySelectorAll('#close-btn');
    btnClose.forEach((item) => {
      item.addEventListener('click', () => {
        popupModal.remove();
      });
    });
  };
}
