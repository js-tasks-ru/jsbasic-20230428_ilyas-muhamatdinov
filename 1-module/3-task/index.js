function ucFirst(str) {
  if (!str) {
    return str;}
  let firstLatter = str.at(0).toUpperCase();
  return firstLatter + str.substring(1);
}
