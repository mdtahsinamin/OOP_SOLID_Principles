## Inheritance

Inheritance : `Hierarchical Classification`

## Why Inheritance need ?

1. One part : `Code re-used`:
   I have two object, like : Object A and Object B. In two object has similarity in behavior. Say two objects are same type. So, say code duplication, same work happened in two different objects. To avoid code duplication, So I am create a `super class`, and duplicate the common behavior in `super class`. Now Object A and Object B inherit from super class. Now Object A and Object now access the behavior of super class.

> [!NOTE]
> ধরি আমার কাছে দুইটি ক্লাস আছে। দুইটা ক্লাস বা অবজেক্ট এর বিহেবিয়ার সেম। তাই বলতে পারি দুইটি ক্লাস সেইম টাইপের বা সেম টাইপের কিছু কাজ করতেছে। এর ফলে এখানে কোড ডুপ্লিকেশন হচ্ছে কোড ডুপ্লিকেশন যেন না হয় তাই আমরা একটা super class ক্রিয়েট করছি, বাকি ক্লাসগুলো ওই super class থেকে সবকিছু ইনহেরিট করছে বিহেভিয়ার এবং property মানে হচ্ছে আমরা সুপার ক্লাসের মধ্যে আমরা কমন বিহেভের গুলো রাখবো।

> [!NOTE]
> এখানে এ যদি সুপার ক্লাস A হয় এবং B class যদি A class কে inherit করে তাহলে B ক্লাস A ক্লাসের সব behavior গুলো পাবে কিন্তু private behavior পাবেনা।

1. Second Part : `Hierarchical Classification` Representation / Abstraction of hierarchical relationship.

### Important for example

Why 'Father' and 'son' is not a good example for Inheritance in OOP?

> [!WARNING]
> বাবার সব পাবলিক behavior কি ছেলের মধ্যে থাকে ? উত্তর হল না | 🙂🙃

is a relationship? (check point)

### Note

> [!CAUTION]
> oop তে inherit মানে হচ্ছে parent ক্লাস থেকে child সবকিছু inherit করবে, parent সব behavior child class কাছে আছে কিন্তু private property and behavior নেই

In oop inherit means, child inherit all of behavior from parent, expect private behavior. Inheritance implement depends on business requirements.

> [!WARNING]
> Multilevel inheritance is a bad practice. For example News -> Sports -> Cricket. Here Cricket class can access News class public behavior. Depend on Language, some language support it .

> [!WARNING]
> Multilevel inheritance can create `Diamond 💎` problem

## Drawbacks of Inheritance

- Inheritance break the encapsulation of the super class

> [!WARNING]
> যখন একটা ক্লাস অন্য আরেকটা ক্লাসকে inherit করে তখন প্যারেন্টের ক্লাসের বেশিরভাগ জিনিস child ক্লাসের কাছে এক্সপোস সো এখানে Encapsulation ব্রেক হচ্ছে |

- A subclass can't reduce the interface of the superclass

> [!WARNING]
> একটা Sub ক্লাস কোন একটা super class কে inherit করছে , ধরো parent(super) ক্লাসের একটি পাবলিক মেথড আছে , child ক্লাসের মধ্যে ধরে নিতে হবে ওই method টি পাবলিক আছে। কোনভাবে ওই method টিকে child ক্লাস private করতে পারবে না।

- Subclasses are tightly coupled to superclasses

- When overriding methods you need to make sure that the new behavior is compatible with the base on

> [!IMPORTANT]
> parent(super) ক্লাসের কোন একটা method আছে ওই মেথড চাইল্ড ক্লাস অটোমেটিক inherit করবে| child ক্লাস চাচ্ছে যে ওই মেথরটাকে ওভাররাইট করবে। child ক্লাস ওই মেথর থেকে ডিক্লেয়ার করলো then ইমপ্লিমেন্টেশন করলো কিন্তু child class এই method এর বিহেভিয়ার চেঞ্জ করতে পারবে না।

> [!NOTE]
> Favor composition over inheritance

## How to use inheritance properly?

1. Open-closed principle
2. Liskov substitution principle
