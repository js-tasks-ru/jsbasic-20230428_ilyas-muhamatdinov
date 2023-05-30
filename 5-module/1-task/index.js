function hideSelf() {
  const buttonHiden = document.querySelector('.hide-self-button');
  buttonHiden.addEventListener("click", function() {
    buttonHiden.setAttribute('hidden', true);
  });
}
