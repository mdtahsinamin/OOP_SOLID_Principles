## Programming Paradigm

A paradigm is a distinct set of concept or thought patterns.

A programming paradigm is a style or "way" of programming

&rarr; `way of thinking or way of modeling`

### Advantage and Disadvantage of Procedural and OOP

- In procedural programming , all procedurals are global, and globally accessible.

- In procedural programming , all information handle in globally. Not data hide

* In OOP, all information / data and behavior (method) together at a single unit (Isolate).

## Understanding Object

- state (or data)
- behavior (or method)
- identity

Object can communicate with other object using message passing.

## Class and Object

- Class is way of creating a object, that is a no a only way.

- OOP types

  1. Class-based
  2. Prototype-based

* Class : When you create and object with the help of `class` keyword. Class consist of two things `structure` and `behavior` also give me `type` of object. Class defines the `structure` and `type` of the object (`structure`, `behavior`, `type(custom)`).

1. Example of Class based:

```java

class Account {
    // internal data / state
    private int id;
    private String name;
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
}
class Bank {
    void main(){
        Account tahsinAccount = new Account(1, "Tahsin", 100);

        Account tanzirAccount = new Account(1, "Tanzir", 200);

        tahsinAccount.deposit(100); // deposit -> message
        tanzirAccount.withdraw(50);
    }
}

```

2. Example of Prototype-based

```js

const tahsinAccount = {
  id: '1234',
  name: 'Md. Tahsin Amin';
  balance: 1000,
  deposit : function(amount){
    this.balance = this.balance + amount;
  }
  withdraw: function(amount){
    this.balance = this.balance - amount;
  }
};

const tanzirAccount = Object.create(tahsinAccount); // clone of similar structure like tahsinAccount
tanzirAccount.id = '9686',
tanzirAccount.name = 'Md. Tanzir'
tanzirAccount.balance = 5000;

```

## Common Principle

- `DRY  😬` &rarr; Don't Repeat Yourself
- `KISS 😘` &rarr; Keep It Simple Stupid
- `YAGNI😊` &rarr; You Aren't Gonna Need It

### Design Principles vs Design Patterns

1. `Design Principles` &rarr; Simple say `Guidelines`
2. `Design Patter` &rarr; Solutions for specific type of problems.

### Why we need Principles and Patterns?

Changes is the only constant in Software development.

1. Extend and make change in our code easily.
2. Build a easily manageable and maintainable system/software.
3. Collaborate on a team properly.
4. Find and fix issues in code easily.

### How to write better OOP Code

1. Understand the basic concepts.
2. Learn the OOP design principles.
3. Learn the OOP design patterns
4. Understand the project requirements and scope properly
5. Be pragmatic

### Connecting

> [!TIP]
> Encapsulation &rarr; সিঙ্গেল ইউনিট এর মধ্যে সবকিছু encapsulate করব। Encapsulate করার সময় খেয়াল রাখবো যেটা ভেরি করে সেগুলো আলাদা রাখবো আর যেগুলো যেগুলো ফিক্স তাদের আলাদা রাখবো। Encapsulate করার সময় `Single Responsibility principle` খেয়াল রাখবো যেটা Encapsulate বেটার করে, Proper Encapsulate করতে পারলে আমরা `loosely coupling` এন্ড `high cohesion` achieve করতে পারব। `High cohesion` achieve করতে হলে `single responsibility principle`, `encapsulate what varies ` সাহায্য করবে, loosely coupling এর ক্ষেত্রে `law of Demeter` সাহায্য করবে |

> [!TIP]
> Composition &rarr; একটা অবজেক্ট অন্য অবজেক্ট উপর ডিপেন্ডেন্ট কে আমরা কম্পোজিশন বলে থাকি। `Open-closed principle` অ্যান্ড `Dependency inversion principle` ফলো করলে `composition` বেটার হবে । `Coupling` এন্ড `composition` সাথে রিলেশনের আছে `program to an interface not an implementation` | `Loosely coupling` জন্য interface উপর ডিপেন্ডেন্ট হব।

> [!TIP]
> Abstraction &rarr; Overall সবকিছুই `abstraction`. `Open-closed principle`, `Dependency inversion principle` এন্ড `interface segregation principle` ফলো করলে আমরা বেটার `abstraction` পাবো।

> [!TIP]
> Inheritance &rarr; `Inheritance` এর জন্য `liskov substitution principle` ফলো করলে বেটার `Inheritance` পাওয়া যাবে। `Inheritance` এন্ড `composition` মধ্যে আমরা `Inheritance` কম ইউজ করবো `composition` বেশি ইউজ করব (Favor composition over inheritance)

### Project Ideas:

codecrafters-io/build-your-own-x
