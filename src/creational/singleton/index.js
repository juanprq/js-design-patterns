const Till1 = require('./cash');
const Till2 = require('./cash');

// Both modules are the same - singleton

Till1.credit(30);
Till1.credit(20);

Till2.credit(10);
console.log('Till 1 cash', Till1.total());
console.log('Till 2 cash', Till2.total());
