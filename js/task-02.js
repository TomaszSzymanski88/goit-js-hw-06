const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
list.setAttribute('class', 'ingredients');

const allIngredients = ingredients.forEach(all => {
  const listItem = document.createElement('li');
  list.append(listItem);
  listItem.textContent = all;
  return listItem.setAttribute('class', 'item');
});