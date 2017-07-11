describe ('Transaction', function() {
  var bankaccount;

  describe('Transaction', function(){
    it('Transaction has a credite state', function(){
      transaction = new Transaction('01/01/2017', 100, true);
      expect(transaction.amount).toEqual(100);
    });
  });

  describe('Transaction', function(){
    it('Transaction has a debite state', function(){
      transaction = new Transaction('01/01/2017', 100, false);
      expect(transaction.amount).toEqual(-100);
    });
  });

  describe('Transaction', function(){
    it('Transaction has a date', function(){
      transaction = new Transaction('01/01/2017', 100, false);
      expect(transaction.date).toEqual('01/01/2017');
    });
  });

});
