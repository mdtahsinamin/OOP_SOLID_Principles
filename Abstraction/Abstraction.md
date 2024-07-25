## Abstraction

Abstraction is the process of generalizing complex events in the real world to the abstract ideas the underlay them, tucking away the complexities of situation.

In simple word, abstraction means how it look like such as overview, or idea , not in details.

## Context matters

Abstraction differ in context. For example `Flight simulator ✈️` app , general define the color, height , width of this flight. Another example `Flight booking app`, general define the number seat, booking behavior etc.

- In general abstraction define (context based) the representation `state` and the `behavior`.

> কোন context আমারা জিনিসটাকে রিপ্রেজেন্ট করতেছি , তার উপর ডিপেন্ড করে আমারা কতটুকু রিপ্রেজেন্ট করতেছি। 😵

- Don't expose everything. Abstraction shows only important things to the user and hides the internal details. How much we expose the details based on context.

```ts
class Account {
  id: string;
  name: string;
  balance: number;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  deposit(amount: number) {
    this.balance = this.balance + amount;
  }
}
```

> class define the abstraction of Account. Every class is Abstraction.

> context উপর বেজ করে আমি রিয়েল লাইফে এর কতটুকু জিনিস আমি আমার code এ নিয়ে আসতেছি, সেখানে আবার কতটুকু expose করতে আছি অন্যদের সাথে এটাই &rarr; abstraction 😵

Based on Context, how much I implement in my code and how much I expose it with others.

> আমি কোন একটা জিনিস বুঝার জন্য বা আইডিয়া করার জন্য যতটুকু আমি জানতে আছি এটাই &rarr; abstraction. 😵
