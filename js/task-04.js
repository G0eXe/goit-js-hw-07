let counterValue = 0;
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

const sumValue = document.querySelector('#value');

function incrementClick() {
  counterValue += 1;
  sumValue.textContent = counterValue;
}

function decrementClick() {
  counterValue -= 1;
  sumValue.textContent = counterValue;
}

increment.addEventListener('click', incrementClick);
decrement.addEventListener('click', decrementClick);