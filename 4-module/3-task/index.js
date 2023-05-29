function highlight(table) {
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].cells;
    let gender = cells[2].textContent;
    let available = cells[3].getAttribute('data-available');
    let age = Number(cells[1].textContent);

    if (gender === 'm') {
      rows[i].classList.add('male');
    } else if (gender === 'f') {
      rows[i].classList.add('female');
    }

    if (available === 'true') {
      rows[i].classList.add('available');
    } else if (available === 'false'){
      rows[i].classList.add('unavailable');
    } else {
      rows[i].hidden = true;
    }

    if (age < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
