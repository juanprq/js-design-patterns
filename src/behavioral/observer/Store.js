const colors = require('colors');

const events = require('./EventBus');

class Store {
  constructor() {
    events.on('new-post', (data) => this.writeToDb(data));
  }

  writeToDb({ topic, message }) {
    console.log(
      colors.red(
        `STORE ::: Storing "${colors.yellow(
          message
        )}" under TOPIC :: ${topic.toUpperCase()}`
      )
    );
  }
}

module.exports = new Store();
