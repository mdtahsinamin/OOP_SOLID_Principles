## How to create relationship between objects

- Inheritance
- Composition

## Composition:

`Object to Object relationship` 💘

When the class uses another object to provide some or all of its functionality

##### `Has a Relationship` / `reference of this object`

> [!NOTE]
> যখন কোন একটা অবজেক্ট আর একটা অবজেক্টকে রেফার করি বা ব্যবহার করে তাকে আমরা Composition বলে থাকি । 💘

## State and Composition

1. State : build-in data type property, int, number, string, overall property, that is state

2. Composition: Reference of another object
   > [!NOTE]
   > যখন কোন একটা অবজেক্টের মধ্যে অন্য কোন অবজেক্টের রেফারেন্স রাখি তখন আমরা বলতে পারব এখানে কম্পোজিশন হয়েছে।

> [!IMPORTANT]
> Overall say class properties are state of this class, if have primitive data type or non-primitive data. If have object relationship that say have composition.

## How to use composition properly?

1. `Program to an interface` not an implementation. Depend on abstractions not a concrete classes

> [!IMPORTANT]
> আমার যখন composition করি তখন অবজেক্ট to অবজেক্ট রিলেশন ক্রিয়েট হয়, কিন্তু তার সাথে ও একটা ডিপেন্ডেন্সি ক্রিয়েট হয়, ডিপেন্ডেন্সি যখন ক্রিয়েট হবে তখন আমরা খেয়াল করব যে একটা যেন loosely coupled করতে পারি, এরকম না হয় যে ডিপেন্ডেন্সি লেভেলের চেঞ্জ হলে আমার ক্লাস লেভেলে চেঞ্জ করতে হয় | 🧱 🥷

2. `Dependency inversion principle`
   - High level classes shouldn't depend on low level classes
   - Both should depend on abstractions
   - Abstraction shouldn't depend on details. Details should depend on abstractions
