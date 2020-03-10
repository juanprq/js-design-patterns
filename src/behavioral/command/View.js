const colors = require('colors');
const Command = require('./Command');

class View extends Command {
  constructor(query = {}) {
    super();
    this.query = query;
  }

  execute(db) {
    const results = db.getPost(this.query);
    results.forEach((item) =>
      console.log(
        `${colors.green(item.title)} [${colors.red(item.timestamp)}]: ${
          item.content
        }`,
      ));
  }
}

module.exports = View;
