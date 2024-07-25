#include <stdio.h>

typedef struct Account
{
    /* data */
    int id;
    char *name;
    double balance;
} Account;

// * Procedure -> individual work done by one procedure in one procedure have set of instruction.


void depositAccount (Account account, double amount){
   account.balance = account.balance + amount;
}

void withdraw(Account account, double amount){
  account.balance = account.balance - amount;
}

// outside not isolate in Account


int main(){
    Account tahsinAccount;
    Account tanzirAccount;

    tahsinAccount.id = 1;
    tahsinAccount.name= "Tahsin";
    tahsinAccount.balance = 500.00;

    tanzirAccount.id = 2;
    tanzirAccount.name= "Tanzir";
    tanzirAccount.balance = 600.00;


   depositAccount(tanzirAccount, 10.0);
   withdraw(tahsinAccount, 50.0);

}