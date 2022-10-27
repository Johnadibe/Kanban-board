
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
                </ul>
                <div>
                <h3 class='meal-title'>Add a comment (<span>0</span>)</h3>
                <form class= 'comment-form'>
                <input type='text' placeholder ='Your Name' class='name'>
                <textarea type='text' placeholder ='Your Insight' class='insight'></textarea>
                <button type='submit' class='comment-btn' >Comment</button>
                </form>
                </div>
            </div>
         
        </div>
    </div>
            `;
        this.mealContainer.appendChild(popupModal);
        this.closeMeal(popupModal);
        const form = document.querySelector('comment-form');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const username = document.querySelector('.name').value.trim();
          const newComment = document.querySelector('.insight').value.trim();
          let { id } = form;
          id = id.replace(/form/, '');
          const comment = new Comment(id, username, newComment);
          if (username && newComment) {
            postComment(comment);
            const date = Date().split(' ').splice(1, 3).join(' ')
              .split(' ')
              .reverse();
            const month = ('JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(date.slice(2).join('')) / 3 + 1);
            const comHeader = document.querySelector('.popup h3 span');
            const savedComments = document.querySelector('.list-comments');
            comHeader.textContent = commentCounter(parseInt(comHeader.textContent, 10));
            savedComments.innerHTML += `<li>${date[0].concat(`-0${month}-${date[1]}`)} ${comment.username}: ${comment.comment}</li>`;
          }
          form.reset();
        });
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

