const categoryItem = document.querySelectorAll('.item');
console.log(`'В списке ${categoryItem.length}'`);

const categoryList = document.querySelectorAll('.item');
categoryList.forEach(category => {
  console.log('Категория:', category.querySelector('h2').textContent);
  console.log('Категория элементов', category.querySelectorAll('li').length);
});