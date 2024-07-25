{
  // BankingAppWithdrawalService class modification jonno open karon logic change hole amr ber BankingAppWithdrawalService class modde change korte ache
  // bad design

  // BankingAppWithdrawalService only know about withdraw , don't know about the CurrentAccount withdraw,
  // CurrentAccount and SavingsAccount ar sate  tightly coupled hoyar kotha na
  // child class information jana lage ta bad practice
  class BankingAppWithdrawalService {
    private _account: Account; // account upor dependency ache, kno account upor withdraw korbo

    constructor(_account: Account) {
      this._account = _account;
    }

    public withdraw(amount: number) {
      // checking
      if (this._account instanceof CurrentAccount) {
        this._account.withdrawFromCurrentAccount(amount);
      }
      //
      else if (this._account instanceof SavingsAccount) {
        this._account.withdrawFromSavingsAccount(amount);
      }
    }
  }

  class Account {
    balance: number;

    public deposit(amount: number) {
      this.balance = this.balance + amount;
    }
  }

  class CurrentAccount extends Account {
    public withdrawFromCurrentAccount(amount: number) {
      // logic
    }
  }

  class SavingsAccount extends Account {
    public withdrawFromSavingsAccount(amount: number) {
      // logic
    }
  }

  class FixAccount extends Account {
    public withdrawFromFixAccount(amount: number) {
      // logic
    }
  }
}
