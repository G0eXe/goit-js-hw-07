const refs = {
  targetBtnIncr: document.querySelector('[data-action="increment"]'),
  targetBtnDecr: document.querySelector('[data-action="decrement"]'),
  summary: document.getElementById('value'),
};

refs.targetBtnIncr.addEventListener('click', increment);
refs.targetBtnDecr.addEventListener('click', decrement);

let count = 0;

      function decrement() {
        --count;
        $("#value").text(count);
        console.log(count);
      }

      function increment() {
        ++count;
        $("#value").text(count);
        console.log(count);
      }