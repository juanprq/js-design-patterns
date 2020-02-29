const PhoneXR = require('./iPhoneXR');
const PhoneXS = require('./iPhoneXS');
const PhoneXSMax = require('./iPhoneXSMax');

const iPhoneFactory = (type, serialNum) => {
  switch (type) {
    case 'iPhone Xr':
      return new PhoneXR(serialNum);
    case 'iPhone Xs':
      return new PhoneXS(serialNum);
    case 'iPhone Xs Max':
      return new PhoneXSMax(serialNum);
    default:
      console.log('Unknown iPhone type...');
      return null;
  }
};

module.exports = iPhoneFactory;

