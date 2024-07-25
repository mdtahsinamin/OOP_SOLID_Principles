// jodi error hoy thole amr oi object patabo na
{
  class Account {
    balance: number;

    public deposit(amount: number) {
      this.balance = this.balance + amount;
    }
  }

  // fixed using WithdrawAccount is a Account
  abstract class WithdrawableAccount extends Account {
    abstract withdraw(amount);
  }

  // CurrentAccount
  class CurrentAccount extends WithdrawableAccount {
    public withdrawFromCurrentAccount(amount: number) {
      // logic
    }
    // @override
    withdraw(amount) {}
  }

  // SavingsAccount
  class SavingsAccount extends WithdrawableAccount {
    public withdrawFromSavingsAccount(amount: number) {
      // logic
    }
    // @override
    withdraw(amount) {}
  }

  // FixAccount
  class FixAccount extends Account {
    public withdrawFromFixAccount(amount: number) {
      // logic
    }
  }

  class BankingApp {
    withdrawService: BankingAppWithdrawalService;

    withdraw() {
      // run time error dibe jodi error
    }
  }
  // akhane akta object expect kortache,  tar ja capabilities sob gulo jeno korte pare , emon ja na hoy code break hobe, crash hobe .
  class BankingAppWithdrawalService {
    private _account: WithdrawableAccount;
    constructor(_account: WithdrawableAccount) {
      this._account = _account;
    }

    public withdraw(amount: number) {
      this._account.withdraw(amount);
    }
  }
}
