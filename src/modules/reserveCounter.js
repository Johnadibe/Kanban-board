const reserveCount = (res, count) => {
  const sp = count.length ? count.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Reservations (${sp})`;
  res.appendChild(span1);
};

export default reserveCount;