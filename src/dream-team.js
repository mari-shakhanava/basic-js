const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
    if ( !members || Array.isArray(members) === false){
    return false;
  } else {
      membersCorrect = members.map( function(x) {
          if (typeof x === 'string') {
              return x;
          }});
      membersCorrectOnlyLettersSorted = membersCorrect.map( function (t) {
        return t.split(' ').sort().join('');
      });
      dreamTeamNameArr = membersCorrectOnlyLettersSorted.map( function (y) {
        return y.toUpperCase().slice(0,1);
      });
      return dreamTeamName = dreamTeamNameArr.join('');

  }

    };




