const count = (com, cout) => {
  const sp = cout.length ? cout.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Comments (${sp})`;
  com.appendChild(span1);
};

export default count;
