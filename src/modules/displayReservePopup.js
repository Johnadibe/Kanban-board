import { getMealData } from './displaylist.js';
import reserves from './reserve.js';
import reserveCount from './reserveCounter.js';

const reserveContent = document.querySelector('.reserve-content');

const getInfo = async (id) => {
  const res = await getMealData();
  const info = res.splice(0);
  const filtered = info.filter((int) => parseInt(int.id, 10) === id);
  return filtered[0].cookingInstruction;
};

const fetchData = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/reservations?item_id=${id}`);
  const data2 = res.json();
  return data2.then((data) => data);
};

const displayReservation = async (id, image, name, category, origin, data) => {
  const elp = await fetchData(id);

  const info2 = await getInfo(id);
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');

  const popupTop = document.createElement('div');
  popupTop.setAttribute('class', 'popup-top');

  const popupItemImage = document.createElement('div');
  popupItemImage.setAttribute('class', 'img-meal-container');

  const imageMeal = document.createElement('img');
  imageMeal.setAttribute('src', `${image}`);
  imageMeal.setAttribute('class', 'img-meal');
  imageMeal.setAttribute('alt', 'image');

  popupItemImage.appendChild(imageMeal);

  const closebtn = document.createElement('button');
  closebtn.setAttribute('class', 'close-btn');

  const closeI = document.createElement('i');
  closeI.setAttribute('class', 'fa-solid fa-xmark');

  closebtn.appendChild(closeI);

  popupTop.appendChild(popupItemImage);
  popupTop.appendChild(closebtn);

  const popupDescriptionContainer = document.createElement('div');
  popupDescriptionContainer.setAttribute('class', 'popup-description-container');

  const popupDescription = document.createElement('div');
  popupDescription.setAttribute('class', 'popup-description');

  const nameTitle = document.createElement('h3');
  nameTitle.setAttribute('class', 'desc-title');
  nameTitle.innerText = 'Name: ';

  const nameDetail = document.createElement('p');
  nameDetail.setAttribute('class', 'detail');
  nameDetail.innerText = `${name}`;
  nameTitle.appendChild(nameDetail);

  const categoryTitle = document.createElement('h3');
  categoryTitle.setAttribute('class', 'desc-title');
  categoryTitle.innerText = 'Category: ';

  const categoryDetail = document.createElement('p');
  categoryDetail.setAttribute('class', 'detail');
  categoryDetail.innerText = `${category}`;
  categoryTitle.appendChild(categoryDetail);

  const originTitle = document.createElement('h3');
  originTitle.setAttribute('class', 'desc-title');
  originTitle.innerText = 'Origin: ';

  const originDetail = document.createElement('p');
  originDetail.setAttribute('class', 'detail');
  originDetail.innerText = `${origin}`;
  originTitle.appendChild(originDetail);

  popupDescription.appendChild(nameTitle);
  popupDescription.appendChild(categoryTitle);
  popupDescription.appendChild(originTitle);

  const instructionContainer = document.createElement('article');
  const instructionTitle = document.createElement('h3');
  instructionTitle.setAttribute('class', 'desc-title');
  instructionTitle.innerText = 'Instruction';

  const instructionDetail = document.createElement('p');
  instructionDetail.setAttribute('class', 'detail');
  instructionDetail.innerText = `${info2}`;

  instructionContainer.appendChild(instructionTitle);
  instructionContainer.appendChild(instructionDetail);
  popupDescriptionContainer.appendChild(popupDescription);
  popupDescriptionContainer.appendChild(instructionContainer);

  const popupComment = document.createElement('div');
  const commentTitle = document.createElement('h3');
  commentTitle.setAttribute('class', 'desc-title detail-3');
  commentTitle.innerText = '';
  reserveCount(commentTitle, elp);
  popupComment.appendChild(commentTitle);

  const commentHolder = document.createElement('div');
  commentHolder.setAttribute('class', 'comment_holder');
  popupComment.appendChild(commentHolder);
  reserves(commentHolder, elp);

  const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const formHeading = document.createElement('h3');
  formHeading.setAttribute('class', 'desc-detail detail-4');
  formHeading.innerText = 'Add a reservation';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '1');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const startDate = document.createElement('input');
  startDate.setAttribute('name', 'start_date');
  startDate.setAttribute('class', 'start-date');
  startDate.setAttribute('value', 'yyyy-MM-dd');
  startDate.setAttribute('required', true);
  startDate.setAttribute('type', 'date');
  const endDate = document.createElement('input');
  endDate.setAttribute('name', 'end_date');
  endDate.setAttribute('class', 'end-date');
  endDate.setAttribute('value', 'yyyy-MM-dd');
  endDate.setAttribute('required', true);
  endDate.setAttribute('type', 'date');
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
  formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'reserve');
  formbutton.innerText = 'Reservation';

  popupForm.appendChild(formHeading);
  popupForm.appendChild(username);
  popupForm.appendChild(startDate);
  popupForm.appendChild(endDate);
  popupForm.appendChild(formbutton);

  popup.appendChild(popupTop);
  popup.appendChild(popupDescriptionContainer);
  popup.appendChild(popupComment);
  popup.appendChild(popupForm);

  reserveContent.appendChild(popup);

  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    const modalpopup = document.querySelector('.popup');
    modalpopup.classList.remove('hidden');
    reserveContent.innerHTML = '';
    document.body.classList.remove('vertical-scroll');
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const thefetch = await fetch(data, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: username.value,
        date_start: startDate.value,
        date_end: endDate.value,
      }),
    });
    const { status } = thefetch;
    if (status === 201) {
      commentHolder.innerHTML = '';
      commentTitle.innerHTML = '';
      form.reset();
      const p = await fetchData(id);
      reserves(commentHolder, p);
      reserveCount(commentTitle, p);
    }
  });
};

export default displayReservation;