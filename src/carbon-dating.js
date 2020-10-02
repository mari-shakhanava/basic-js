const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 let ageOfSample = 0;
 console.log(sampleActivity);
 if (!sampleActivity ||
     typeof sampleActivity !== 'string'){
     return false;
 } else {
     let activityInSample = Number(sampleActivity);
     if (!activityInSample || activityInSample <= 0 || activityInSample >= 9000 || !Number.isInteger(activityInSample)){
         return false;
     } else
     {
         let k = 0.693 / HALF_LIFE_PERIOD;
         let ageOfSample = Math.log2(MODERN_ACTIVITY / activityInSample) / k;
         return Math.ceil(ageOfSample);
     }
 }

};


