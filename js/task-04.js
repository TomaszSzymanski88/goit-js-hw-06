let counterValue = 0;

const decrement = document.querySelector('#counter').firstElementChild;
const increment = document.querySelector('#counter').lastElementChild;
const value = document.querySelector('#value');

decrement.addEventListener("click", () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
});

increment.addEventListener("click", () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
});
