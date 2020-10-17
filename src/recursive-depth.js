const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      if (arr.length ===0) {
        return 1;
      }
      if (Array.isArray(arr)){
        return 1 + Math.max(...arr.map(t=> this.calculateDepth(t)));
      }

      else return 0;
  }

    // throw new CustomError('Not implemented');
};

// var finalMorseArr = newArrDashes.map(function (y){
//     return y.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
// });

// t => this.calculateDepth(t)


