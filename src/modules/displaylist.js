const getMealList = async(API_URL) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const listMeal = data.meals.slice(0, 25);
    return listMeal;
};

const displayData = (data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
 <img src="${data.strCategoryThumb}" alt="card-image">
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
            `;
    cardsContainer.appendChild(card);
};

const fetchData = async() => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    for (let i = 0; i < 15; i += 1) {
        displayData(data.categories[i]);
    }
};

export default fetchData;