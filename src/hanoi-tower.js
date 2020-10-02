const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = 2**disksNumber -1;
  let speedInSec = Math.floor(turnsNumber/turnsSpeed *60 *60);
  return {turns:turnsNumber, seconds: speedInSec};
};
