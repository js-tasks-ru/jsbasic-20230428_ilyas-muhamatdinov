function checkSpam(str) {
  let string = str.toLowerCase();
  let checkFirst = string.indexOf('1xbet');
  let checkSecond = string.indexOf('xxx');

  return checkFirst >= 0 || checkSecond >= 0;
}
