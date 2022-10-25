const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const cardsContainer = document.querySelector('.display');

const displayData = (data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
 <img src="${data.strCategoryThumb}" alt="card-image">
            <div class="content">
                <div class="name">
                    <h3>${data.strCategory}</h3>
                    <div class="likes">
                        <i class="fa-solid fa-heart add-like"></i>
                        <p class="likes-info"><span class="likes-number">5 </span>likes</p>
                    </div>
                </div>
                <button class="comment-btn">Comments</button>
                <button class="reservation-btn">Reservations</button>
            </div>
            `;
    cardsContainer.appendChild(card);
}

const fetchData = async() => {
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < 15; i += 1) {
        displayData(data.categories[i]);
    }
}

export default fetchData;