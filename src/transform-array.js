const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
    if (Object.prototype.toString.call(arr) !== '[object Array]' || arr === null ) {
        throw new Error();
    }
        let  newArr = arr.slice(0);
        for (let i=0; i < newArr.length; i++){
            if (newArr[i] === '--discard-next'){
                newArr[i] = undefined;
                newArr[i+1] = undefined;
       } else if (newArr[i] === '--discard-prev'){
                newArr[i] = undefined;
                newArr[i-1] = undefined;
       } else  if (newArr[i] === '--double-next'){
         if (newArr[i+1] !== undefined){
          newArr[i] = newArr[i+1];
        } else newArr[i] = undefined;
      } else  if (newArr[i] === '--double-prev') {
                if (newArr[i-1] !== undefined){
                    newArr[i] = newArr[i-1];
                } else newArr[i] = undefined;
       }
        }
    return newArr.filter(function (e) {
        return e !== undefined;
    });
    };


