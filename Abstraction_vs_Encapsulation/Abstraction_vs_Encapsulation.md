## Abstraction vs Encapsulation

1. `Abstraction` : When I am designing a class, how much I am representing and how much I am exposing / class's exposer, it design philosophy or ideas. `Blueprint` 🖨️

```ts
class Account {
  private _id: string;
  private _name: string;
  private _balance: number;

  deposit(amount: number) {
    // code
  }

  withdraw(amount: number) {
    // code
  }
}
```

In example, Account class deposit and withdraw is a abstraction, how it do work, how it implement doesn't matter. `Public interface` is abstraction. Publicly accessible.

2. `Encapsulation` : Encapsulation is actually implementation. I am implement encapsulation using access modifiers. Encapsulation maintain on the abstraction. Abstraction help to achieve the encapsulation. 🥷

```ts
class Account {
  private _id: string;
  private _name: string;
  private _balance: number;
  private _api;

  deposit(amount: number) {
    // code
    api.validator();
  }

  withdraw(amount: number) {
    // code
    api.validator();
  }
}
```
