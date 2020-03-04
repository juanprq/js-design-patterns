const { lock, unlock } = require('./vault');
const password = 'secret';

const obj = {
  name: 'John Doe',
  age: 32,
  city: 'Chicago',
  country: 'US',
};

const person = lock(obj, password);
person.favColor = 'Red';
person.favFruit = 'Apple';
console.log(person);

const unlocked = unlock(person, password);
// unlocked.food = 'Pizza';
console.log(unlocked);
