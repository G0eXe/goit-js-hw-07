const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
function FontSize() {
    text.style.fontSize = fontSize.value + 'px';
}

fontSize.addEventListener('input', FontSize);