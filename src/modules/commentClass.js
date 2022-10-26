const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const app_id = 'UhzCqegP8IVtOrNSccjc';
const identifierUrl = `${url}apps/${app_id}/comments/`;

const leaderBoard = async (user, userComment) => {
  const response = await fetch(identifierUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: `${user}`, Comment: `${userComment}` }),
  });
  const res = await response.json();
  return res.result;
};

export { leaderBoard };
