class Account {
    // internal data / state
    private int id;
    private String name;
    private User user;
    private double balance;


    public Account(int id, String name, double balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // behavior that inside in Account class / state handle 
    void deposit(double amount){
        balance = balance + amount;
    }
    void withdraw(double amount){
        balance= balance - amount;
    }
    // message passing 
    String getAccountName(){
        return user.getName();
    }
}

// Isolate in Account class or variable

class User {
    private String name;

    public getName(){
        return name;
    }
}

class Bank {
    void main(){
        Account tahsinAccount = new Account(1, "Tahsin", 100); 
        
        Account tanzirAccount = new Account(1, "Tanzir", 200);

        tahsinAccount.deposit(100); // deposit -> message
        tanzirAccount.withdraw(50);
    }
}