function checkSpam(str) {
  let string = str.toLowerCase();
  let checkFirst = string.indexOf('1xbet');
  let checkSecond = string.indexOf('xxx');

  if (checkFirst >= 0 || checkSecond >= 0) {
    return true;
  } else {
    return false;
  }
}
