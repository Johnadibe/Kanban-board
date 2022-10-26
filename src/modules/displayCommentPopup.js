let ArrayOfFetchedData;
let comment_Counter = 0;
const mainId = document.getElementById("mainId");
const popCharacter = document.getElementById("overlay");
const close = () => {
  popCharacter.style.display = "none";
  mainId.style.display = "block";
};

const MealDisplay = async () => {
  const gettingList = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const response = await fetch(gettingList);
  const fetchedData = await response.json();
  ArrayOfFetchedData = fetchedData;
};
MealDisplay();

const displayMeals = (e) => {
  for (let i = 0; i < ArrayOfFetchedData.length; i += 1) {
    if (
      ArrayOfFetchedData[i].strCategory ===
      e.target.parentNode.children[2].innerHTML
    ) {
      const characterModal = document.createElement("div");
      characterModal.classList.add("characterModal");
      const closeBtn = document.createElement("button");
      closeBtn.setAttribute("id", "btnClose");
      closeBtn.innerHTML = "X";
      closeBtn.addEventListener("click", () => {
        close();
      });

      characterModal.appendChild(closeBtn);

      const Img = document.createElement("img");
      Img.classList.add("pictureModal");
      Img.src = ArrayOfFetchedData[i].strCategoryThumb;
      characterModal.appendChild(Img);

      const h = document.createElement("h3");
      h.innerHTML = ArrayOfFetchedData[i].strCategory;
      characterModal.appendChild(h);

      const modalDetail = document.createElement("div");
      modalDetail.classList.add("modalDetail");

      const id = document.createElement("p");
      id.classList.add("Ffield");
      id.innerHTML = "ID : " + ArrayOfFetchedData[i].idCategory;
      modalDetail.appendChild(id);

      const description = document.createElement("p");
      description.classList.add("Ffield");
      description.innerHTML = "Description : " + ArrayOfFetchedData[i].strCategoryDescription;
      modalDetail.appendChild(description);

      const display_comments = document.createElement("div");
      display_comments.classList.add("display-comments");
      // title Comment counter
      const CommentTitle = document.createElement("h4");
      CommentTitle.innerHTML = `Comments ${comment_Counter}`;
      display_comments.appendChild(CommentTitle);

      // list of comments
      const commentList = document.createElement("ul");
      const listItem = document.createElement("li");
      listItem.innerHTML = `Comment1`;
      commentList.appendChild(listItem);
      commentList.appendChild(listItem);
      display_comments.appendChild(commentList);

      // Form to add comments
      const formComments = document.createElement("form");
      const commentName = document.createElement("input");
      commentName.setAttribute("placeholder", "Your name");
      commentName.setAttribute("type", "text");
      const commentInsight = document.createElement("input");
      commentInsight.setAttribute("placeholder", "Your Insight");
      commentName.setAttribute("type", "text");
      commentName.classList.add('btn');
      commentInsight.classList.add('btn');
      commentName.setAttribute('id','comment');
      commentInsight.setAttribute('id','comment');

      const SubmitBtn = document.createElement("button");
      SubmitBtn.setAttribute("type", "submit");
      SubmitBtn.classList.add('btn');
      SubmitBtn.innerHTML = "Comment";

      formComments.appendChild(commentName);
      formComments.appendChild(commentInsight);
      formComments.appendChild(SubmitBtn);

      characterModal.appendChild(modalDetail);
      characterModal.appendChild(display_comments);
      characterModal.appendChild(formComments);
      popCharacter.appendChild(characterModal);
    }
  }
};
export {displayMeals , MealDisplay };