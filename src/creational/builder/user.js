const { randomBytes } = require('crypto');

class User {
  constructor(name, email, age, photo) {
    return new Promise((resolve) => {
      this.name = name;
      this.email = email;
      this.age = age;
      this.photo = photo;
      resolve(this.doSignup());
    });
  }

  setPhoto() {
    console.log(`- New photo ${this.photo} uploaded for ${this.name}`);
  }

  doSignup() {
    if (this.photo) {
      this.setPhoto();
    }
    console.log(`- ${this.name} signed up as a new user!`);
    return randomBytes(12).toString('hex');
  }
}

module.exports = User;

