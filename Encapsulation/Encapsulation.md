## Encapsulation

The action of enclosing something in or as if in a capsule.

## Encapsulation in OOP

1. The idea of bundling data and method that work on that data within one unit.

2. Used to hide the internal representation, or state of an object from the outside.
> [!NOTE]
> যতোটুকু দরকার তার বাহিরে আমি কিছু expose করবো না , আমি hide করব 🥷

Encapsulate what varies:

```js
const getOrderTotal = (order) => {
  // subtotal
  let total = order.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;
    return acc;
  }, 0);

  // add tax
  if (order.country === "US") {
    total = total * 0.07;
  }
};
```

1. Method/Function Level:

- In here subtotal and tax calculation logics are encapsulate under the function.
> [!NOTE]
> একটা function মধ্যে কোন লজিক কে encapsulate করা যায় তাকে method level encapsulate বলে 🥷

1. Class Level:

- In class level, we encapsulate the property and behavior.

- How I expose or hide the behavior or property using the access modifiers.
> [!NOTE]
> class level এর মধ্যে similar ডাটা এন্ড behavior কে এক জায়গায় এনে encapsulate করতেছি তাকে class লেভেল encapsulate বলে 🥷 |

> [!NOTE]
> expose করা বা hide করা এটা কিভাবে ensure করব তখন আমরা access modifier ইউজ করি |

```js
const getOrderTotal = (order) => {
  let total = order.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;
    return acc;
  }, 0);

  total = total * getTexRate(order.country);

  return total;
};

// beshi change hobe tokhon take alada babe isolate korbo
const getTexRate = (country) => {
  if (country === "US") {
    return 0.07;
  }
};
```
