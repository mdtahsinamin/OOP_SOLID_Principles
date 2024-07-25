{
  class BankingAppWithdrawalService {
    private _account: Account;
    constructor(_account: Account) {
      this._account = _account;
    }

    public withdraw(amount: number) {
      this._account.withdraw(amount);
    }
  }

  abstract class Account {
    balance: number;

    public deposit(amount: number) {
      this.balance = this.balance + amount;
    }
    abstract withdraw(amount);
  }

  class CurrentAccount extends Account {
    public withdrawFromCurrentAccount(amount: number) {
      // logic
    }
    // @override
    withdraw(amount) {}
  }

  class SavingsAccount extends Account {
    public withdrawFromSavingsAccount(amount: number) {
      // logic
    }
    // @override
    withdraw(amount) {}
  }

  class FixAccount extends Account {
    public withdrawFromFixAccount(amount: number) {
      // logic
    }
    // @override
    withdraw(amount) {
      throw new Error("withdraws are not supported by FixAccount");
    }
  }

  class BankingApp {
    withdrawService: BankingAppWithdrawalService;

    withdraw() {
      new BankingAppWithdrawalService(new FixAccount()).withdraw(100); // code break korbe error throw korbe
    }
  }
}
