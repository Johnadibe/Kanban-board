const comments = (comment, data) => {
    comment.innerHTML = '';
    if (data.error) {
        data = [];
    }
    data.map((dataId) => {
        const commentDate = document.createElement('div');
        commentDate.setAttribute('class', 'comment-date');
        const strong = document.createElement('strong');
        strong.setAttribute('class', 'comment-detail');
        strong.innerText = `${dataId.creation_date}`;
        const commentDetail = document.createElement('p');
        commentDetail.setAttribute('class', 'comment-detail');
        commentDetail.innerText = `${dataId.username}: ${dataId.comment}`;
        commentDate.appendChild(strong);
        commentDate.appendChild(commentDetail);
        comment.appendChild(commentDate);

        return null;
    });
};

export default comments;