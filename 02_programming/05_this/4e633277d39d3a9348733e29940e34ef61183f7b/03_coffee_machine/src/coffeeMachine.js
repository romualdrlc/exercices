const machine = {
  // Complete here
  litersOfCoffee: 0,
  qauntityExpresso: 0.08,
  quantityLongCoffe: 0.15,

  fillWithLitersOfCoffee: function(nLitre) {
    this.litersOfCoffee += nLitre;
    return this;
  },
  longCoffee: function() {
    if (this.quantityLongCoffe <= this.litersOfCoffee) {
      this.litersOfCoffee = this.litersOfCoffee - this.quantityLongCoffe;
      return true;
    }else {
      return false;
    }
  },
  expresso: function() {
    if (this.qauntityExpresso <= this.litersOfCoffee) {
      this.litersOfCoffee = this.litersOfCoffee - this.qauntityExpresso;
      return true;
    }else {
      return false;
    }
  }
};

module.exports = machine;
