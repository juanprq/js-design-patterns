const Loki = require('lokijs');
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
const { join } = require('path');

const Db = require('./db');
const LokiAdapter = require('./lokiAdapter');

// Database File
const dbFile = join('dbs.json');

// LowDB
// const adapter = new FileSync(dbFile);
// const dbs = low(adapter);

// LokiJS
const ldb = new Loki(dbFile);
const LokiAdp = new LokiAdapter(ldb);


// DB module instance
const db = new Db(LokiAdp);

db.init('users');
db.add({
  collection: 'users',
  data: {
    name: 'John Doe',
    age: 32,
  },
});

console.log(db.get('users'));
