function makeDiagonalRed(table) {
  const rowsCount = table.rows.length;
  for(let i = 0; i < rowsCount; i++) {
    const cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
