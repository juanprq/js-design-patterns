function* getColors() {
  yield 'red';
  yield 'blue';
  yield 'yellow';
}

const colors = getColors();

console.log(colors.next());
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());

const fruits = ['apples', 'oranges', 'grapes', 'cherries', 'papayas'];

function* fruitShop() {
  for (const fruit of fruits) {
    yield fruit;
  }
}

const getFruits = fruitShop();
function makeSalad() {
  const fruitBasket = getFruits.next();

  if (!fruitBasket.done) {
    console.log(fruitBasket.value);
    makeSalad();
  } else {
    console.log('we are out of fruits');
  }
}

makeSalad();
