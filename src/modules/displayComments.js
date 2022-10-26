export default class Comments {
    constructor(name, comment) {
      this.name = name;
      this.comment = comment;
    }
  
    static displayComments(comment) {
      const list = document.querySelector('.list-comments');
      for (let i = 0; i < scores.length; i += 1) {
        list.innerHTML += `<li>${comment[i].user}: ${comment[i].comment}</li>`;
      }
    }
  }