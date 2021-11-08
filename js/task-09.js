function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const backgroundColor = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = getRandomHexColor();
})