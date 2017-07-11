var Account = function() {
this.transactions = [];

Account.prototype.makeDeposit = function(date, amount) {
  this.transactions.push(new Transaction(date, amount, true));
};

Account.prototype.withdraw = function(date, amount) {
  this.transactions.push(new Transaction(date, amount, false));
};

Account.prototype.print = function() {
  var result = "date || credit || debit || balance\n";
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];
    balance += transaction.amount;
    result += "\n" + transaction.date + " || ";
    if (transaction.is_deposit) {
      result += this.transactions[i].amount + " || || ";
    } else {
      result += " || " + this.transactions[i].amount + " || ";
    }
    result += balance;
  }
  return result;
};

};
