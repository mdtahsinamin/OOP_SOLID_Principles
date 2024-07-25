{
  // BankingAppWithdrawalService kno Account ar object astacehe
  // logic change kora lagbe na .
  // modification jonno closed hoya gelo

  // open for extension close for modification

  // also add the behavior -> responsibility  tar jonno closed na
  // closed hoitache existing behavior ar jonno closed
  // jeta tar responsibility na seta ta ke dilam na
  // r akta class modification amr class modde modification is bad practice
  // modification fully off kora possible na.
  class BankingAppWithdrawalService {
    private _account: Account;

    constructor(_account: Account) {
      this._account = _account;
    }

    public withdraw(amount: number) {
      this._account.withdraw(amount);
    }
  }

  // Actual action withdraw ta ke abstract korlam Parent class dia
  abstract class Account {
    balance: number;

    public deposit(amount: number) {
      this.balance = this.balance + amount;
    }
    abstract withdraw(amount: number): void;
  }

  // CurrentAccount Override korebe withdraw method ta ke
  class CurrentAccount extends Account {
    public withdrawFromCurrentAccount(amount: number) {
      // logic
    }
    // @Override
    withdraw(amount: number): void {
      // logic
    }
  }

  // SavingsAccount Override korebe withdraw method ta ke
  class SavingsAccount extends Account {
    public withdrawFromSavingsAccount(amount: number) {
      // logic
    }
    // @Override
    withdraw(amount: number): void {
      // logic
    }
  }

  // SavingsAccount Override korebe withdraw method ta ke
  class FixAccount extends Account {
    public withdrawFromFixAccount(amount: number) {
      // logic
    }
    // @Override
    withdraw(amount: number): void {
      // logic
    }
  }
}
