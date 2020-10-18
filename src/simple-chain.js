const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined ){  //    if (arguments.length === 0) {    !value || value.length === 0 || value === undefined

        this.chain.push('( )');
    } else {
        this.chain.push(`( ${value} )`);
        return this;
    }
  },
  removeLink(position) {
    if ( typeof position !== 'number' || !Number.isInteger(position) || (position <= 0) || (position > this.chain.length) ){
        this.chain = [];
        throw new Error();
    } else {
       this.chain.splice(position - 1, 1);
       return this;
    };
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;


