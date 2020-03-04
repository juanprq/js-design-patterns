const currencyConverter = require('./currencyConverter');

const Cost = (qty, price) => Promise.resolve(qty * price);
Cost(20, 5).then((result) => console.log(result));

const CostPlus = currencyConverter(Cost);
CostPlus(20, 5, 'INR', 'EUR')
  .then((result) => console.log(result))
  .catch(error => console.error(error.response.data));
