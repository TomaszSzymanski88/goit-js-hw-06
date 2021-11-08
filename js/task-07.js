const inputBar = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputBar.addEventListener("input", (event) => {
    let size = event.currentTarget.value + "px";
    textSize.style.fontSize = size;
});