function toggleText() {
  const buttonToggle = document.querySelector('.toggle-text-button');
  const textToggle = document.querySelector('#text');
  buttonToggle.addEventListener('click',function(){
    textToggle.toggleAttribute('hidden');
  });
}
