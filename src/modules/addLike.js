const urlLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/likes';

const getLikes = async() => {
    const res = await fetch(urlLink);
    const data = await res.json();
    return data;
};

const addLike = async(id) => {
    await fetch(urlLink, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            item_id: id,
        }),
    });
};

const displayLike = async(liketxt) => {
    const Id = liketxt.getAttribute('data-id');
    const listLikes = await getLikes();
    const numOfLikes = listLikes.filter((likeObj) => likeObj.item_id === Id);
    if (numOfLikes.length > 0) {
        liketxt.textContent = `${numOfLikes[0].likes} Likes`;
    }
};

export { addLike, displayLike };