const PhoneXr = require('./iPhoneXR');
const PhoneXs = require('./iPhoneXS');
const PhoneXsMax = require('./iPhoneXSMax');

const iPhoneFactory = require('./iPhoneFactory');

new PhoneXs('serial 1').displayConfig();
new PhoneXr('serial xr').displayConfig();
new PhoneXsMax('serial 3').displayConfig();

iPhoneFactory('iPhone Xs Max').displayConfig();
