const urlLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pwxi6JBpjAwLosQxiICj/likes';

const getLikes = async () => {
  const res = await fetch(`${urlLink}`);
  return res;
};

const addLike = async (id) => {
  const res = await fetch(`${urlLink}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return res.text();
};

export { getLikes, addLike };