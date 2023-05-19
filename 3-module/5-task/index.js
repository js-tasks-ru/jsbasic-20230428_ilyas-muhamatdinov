function getMinMax(str) {
  const numbersArray = str.split(' ')
  .filter(elem => {
    return !isNaN(parseFloat(elem)) && isFinite(elem);
  })
  .map(elem => parseFloat(elem));

  const result = {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray)
  };

  return result;
}
