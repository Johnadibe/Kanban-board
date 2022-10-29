const reserves = (reserve, data) => {
  reserve.innerHTML = '';
  if (data.error) {
    data = [];
  }
  data.map((dataId) => {
    const reserveDate = document.createElement('div');
    reserveDate.setAttribute('class', 'reserve-date');
    const bold = document.createElement('b');
    bold.setAttribute('class', 'reserve-detail');
    bold.innerText = `${dataId.date_start} - ${dataId.date_end}`;
    const reserveDetail = document.createElement('p');
    reserveDetail.setAttribute('class', 'reserve-detail');
    reserveDetail.setAttribute('id', 'reserve-detail');
    reserveDetail.innerText = `${dataId.username}`;
    reserveDate.appendChild(bold);
    reserveDate.appendChild(reserveDetail);
    reserve.appendChild(reserveDate);

    return null;
  });
};

export default reserves;