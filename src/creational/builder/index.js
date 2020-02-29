const Pizza = require('./pizza');
const SignupBuilder = require('./signupBuilder');

const pepperoni = new Pizza();

pepperoni.setBase('Whole Wheat');
pepperoni.setSauce('Tomato Basil');
pepperoni.setCheese('Smoked Mozzarella');
pepperoni.setToppings(['Pepperoni', 'Basil']);

pepperoni.bake();

// This is a more interesting example.

new SignupBuilder('John Doe', 'john@email.com', 25)
  .setPhoto('johndoe.jpg')
  .setNick('John_D')
  .setAdmin()
  .create();

// We need to be careful with this since we are mutating the object
// one interesting approach could be to implement this using something like a Functor.
