const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  let defOptions = {
      repeatTimes: 1,
      separator: '+',
      addition: '',
      additionRepeatTimes: 1,
      additionSeparator: '|'
  };

  let separatorString = '';
  let additionStr = String(options.addition);

   if (!options.separator){
     options.separator = defOptions.separator;
   }
   if (!options.additionSeparator){
     options.additionSeparator = defOptions.additionSeparator;
   }

   if (!options.repeatTimes){
     options.repeatTimes = defOptions.repeatTimes;
   }
    if (!options.additionRepeatTimes){
        options.additionRepeatTimes = defOptions.additionRepeatTimes;
    }

    if (options.addition !== undefined){
      separatorString = (additionStr + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
    }

    return resultStr = (str + separatorString + options.separator).repeat(options.repeatTimes-1)+ (str + separatorString);

};
  