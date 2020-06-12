const validator = require('validator');

function validateRegistration(user) {
  // is it a vaild email adress
  if (validator.isEmail(user.email) === false) {
    return false;
  }

  // is the postalNumber 5 chars long
  if (
    validator.isLength(user.postalNumber.toString(), { min: 5, max: 5 }) ===
    false
  ) {
    return false;
  }
  return true;
}

module.exports = validateRegistration;
