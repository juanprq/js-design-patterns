class UserPref {
  constructor(
    userId,
    nickname,
    favouriteTopics,
    isSME,
    isModerator,
    isAdmin
  ) {
    return new Promise((resolve) => {
      this.userId = userId;

      if (nickname) this.setNickname(nickname);

      if (favouriteTopics) this.favTopics(favouriteTopics);

      if (isSME) this.setSME(isSME);

      if (isModerator) this.isModerator(isModerator);

      if (isAdmin) this.isAdmin(isAdmin);

      resolve(true);
    });
  }

  setNickname(nickname) {
    console.log(`- Nickname (${nickname}) set...`);
  }

  favTopics(topics) {
    console.log(`- User favourite topics (${topics.join(',')}) subscribed!`);
  }

  setSME(topics) {
    if (topics) {
      console.log(`- User is now an SME for ${topics.join(',')}...`);
    }
  }

  isModerator(opt) {
    if (opt) {
      console.log(`- User registered as a Moderator!`);
    }
  }

  isAdmin() {
    console.log('- User is now an Administrator!');
  }
}

module.exports = UserPref;

