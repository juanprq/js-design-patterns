const axios = require('axios');

const currencyConverter = (fn) => async (qty, price, base, to) => {
  const result = await fn(qty, price);
  const currencyRate = await axios(`https://free.currencyconverterapi.com/api/v6/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y`);

  return (currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`].val * result);
};

module.exports = currencyConverter;
