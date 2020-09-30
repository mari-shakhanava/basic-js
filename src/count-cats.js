const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsNumber = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let n = 0; n < matrix[i].length; n++) {
            if (matrix[i][n] === '^^'){
              catsNumber++;
            }
        }

    } return catsNumber;
};
