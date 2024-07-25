## Concrete class vs Abstract class vs interface

### Previous Concept :

1. Class concept come from, I am need a structure for create an object, so-that I am create object more ever i need using that structure. Class give a structure of object.

   > [!TIP]
   > ক্লাসের কনসেপ্ট কিভাবে আসছিল: অবজেক্ট ক্রিয়েট এর জন্য একটা structure দরকার যাতে ওই structure ধরে আমরা অবজেক্ট ক্রিয়েট করতে পারি| 🫗

2. Inheritance concept come from, I have two similar classes, conceptually tell that two classes are same type, so I am create a parent class that have similar behavior inherit the child class.
   > [!TIP]
   > দুইটা অবজেক্ট similar কাজ করে, conceptually দুইটা অবজেক্ট একই টাইপের বা রিলেটেড । তাই আমরা parent and child relationship এ গেছি। 🥳

### Concept :

- Concrete class : Normally I am creating a class that is concrete class. It means this which behavior expose or which behavior not expose. Note : `Concrete class : knows all the implementation of abstraction`
  > [!NOTE]
  > নরমালি যদি আমার কোন class ক্রিয়েট করি সেটা হলো কংক্রিট ক্লাস । ক্লাসে যা যা behavior expose করার দরকার বা যা যা behavior থাকা দরকার তা আছে , তাহলে আমরা বলতে পারি এটা কমপ্লিট ক্লাস । কমপ্লিট ক্লাসই concrete class. 🧱

Abstract class: `Abstract class: knows partial implementation or no implementation of abstraction`. Simple inherit use `extends` keyword

> [!NOTE]
> কখনো class ডিজাইন করতে গিয়ে মনে হয় এমন একটা class ডিজাইন করলাম যে ক্লাসের behavior এবং তার exposer কেমন হবে তা আমরা জানি, মানে হচ্ছে আমার abstraction কিভাবে হবে তার সম্পর্কে অবগত । ওই abstraction কিছু জিনিস কিভাবে ইমপ্লিমেন্ট করা হবে এটা আমার জানি না , তখন আমরা ওই ক্লাসের বিহেভের গুলো কে বলতে পারি abstract । ওই behavior এর সম্পর্কে ওই class কোন ধারণা নেই| কেউ যদি ওই abstract ক্লাসটাকে inherit করে কাজ করে সেই ক্লাসটি নিজেই ওই behavior এর implementation বানিয়ে নেবে | 😉

interface : interface is a just abstraction. `No implement of abstraction`. `implements` keyword use

> [!NOTE]
> interface behavior এর একটা abstraction দেয় | 😅

### Note :

> [!NOTE]
> abstract class যদি আমি extends করি তখন আমার hierarchical chain থেকে সরাসরি inherit করি

> [!NOTE]
> Interface ব্যবহার করে implement করলে আমরা সরাসরি তাকে inherit বলি না , বাট এই interface ওই ক্লাসকে একটা কন্ট্রাক্ট দেয় ও তাকে ইম্পোজ করে । Interface যে class কে কন্ট্রাক্ট দেয়, তাকে ওই method গুলোর implement থাকতে হবে বা beahavior গুলো থাকতে হবে |

### Interview question :

When you use abstract and interface ? \*\* language depended question

> [!NOTE]
> Ans: ধরি আমার একটা abstract ক্লাস তার মধ্যে শুধুমাত্র abstract method আছে , কিন্তু কোন implemented মেথড নেই তখন চিন্তা করতে হবে ওই ক্লাসটা abstract ক্লাস হওয়ার কোন দরকার আছে কি-না , ফাস্ট চেক করতে হবে সব method abstract method টা কিনা , সেকেন্ড চেক কোন hierarchical রিলেশন দরকার আছে কিনা "is a relationship" দরকার আছে কিনা তার উপর ডিপেন্ড করে abstract ক্লাস তৈরি করব।

> [!NOTE]
> is a relationship থাকে and যদি implemented এবং unimplemented behavior থাকে তাহলে অ্যাপসটা ক্লাস না হলে interface

> [!TIP]
> interface flexible. behavior related

