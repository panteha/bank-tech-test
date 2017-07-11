var Transaction = function(date, amount, is_deposit) {
this.date = date;
if (is_deposit) {
  this.amount = amount;
} else {
  this.amount = -amount;
}
this.is_deposit = is_deposit;
};
