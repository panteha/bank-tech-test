describe ('bankAccount', function() {
  var account;

  beforeEach(function() {
      account = new Account;
  });

  describe('Having a bank account', function() {
    it('Client is able to make a deposite', function() {
      account.makeDeposit('14/01/2012', 1000);
      expect(account.transactions[0].amount).toEqual(1000);
    });
  });

  describe('Having a bank account',function(){
    it('Client is able to make a withdrawal', function(){
      account.makeDeposit('14/01/2012', 1000);
      account.withdraw('14/01/2012', 500)
      expect(account.transactions[1].amount).toEqual(-500);
    });
  });

  describe('Having a bank account', function(){
    it('Client is able to print her bank statement', function(){
      account.makeDeposit("10/01/2012", 1000);
      account.makeDeposit("13/01/2012", 2000);
      account.withdraw("14/01/2012", 500);
      expect(account.print).toEqual("date || credit || debit || balance\n" +
                                    "10/01/2012 || 1000 || || 1000\n" +
                                    "13/01/2012 || 2000 || || 3000\n" +
                                    "14/01/2012 ||  || -500 || 2500\n");

    });
  });


});
