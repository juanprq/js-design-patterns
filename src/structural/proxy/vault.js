const Cryptr = require('cryptr');

const lock = (obj, password) => {
  const cryptr = new Cryptr(password);
  const newObj = Object
    .keys(obj)
    .reduce(
      (accum, key) => ({ ...accum, [key]: cryptr.encrypt(obj[key]) }), {},
    );

  return new Proxy(newObj, {
    set(target, key, value) {
      return (target[key] = cryptr.encrypt(value));
    },

    get(target, key) {
      return target[key];
    }
  });
}

const unlock = (obj, password) => {
  const cryptr = new Cryptr(password);
  const newObj = Object
    .keys(obj)
    .reduce((accum, key) => ({ ...accum, [key]: cryptr.decrypt(obj[key]) }), {});

  return new Proxy(newObj, {
    set() {
      throw new Error('This is a read-only object');
    }
  });
}

module.exports = {
  lock,
  unlock,
};
