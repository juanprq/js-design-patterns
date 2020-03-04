const obj = {
  name: 'John Doe',
  age: 32,
  city: 'Chicago',
  country: 'US',
};

const makeReactive = (baseObj, observer) => new Proxy(baseObj, {
  set(target, key, value) {
    observer({
      [key]: value
    });

    return Reflect.set(...arguments);
  }
});

const reactive = makeReactive(obj, (res) => console.log(res));
reactive.color = 'Green';
reactive.age = 33;

