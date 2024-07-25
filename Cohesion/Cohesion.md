## Cohesion

Cohesion represents the clarity of the responsibilities of module

> সেম টাইপের জিনিসগুলো একসাথে থাকার প্রবণতা &rarr; Cohesion 💏

> ক্লাস ডিজাইন করব, ক্লাস হচ্ছে একটা মডিউল, ক্লাসের যেগুলো আসল রেসপন্সিবিলিটি আছে, যদি আমি ডিফারেন্ট রেসপন্সিবিলিটি তাকে দেই যেগুলো তার মধ্যে পড়ে না তাহলে low cohesion হবে।

> Specific class যে property এন্ড behavior হ্যান্ডেল করতে পারে তাকে অতটুকুই দিয়ে encapsulate করা উচিত

#### Low Cohesion

| User                 |
| -------------------- |
| getName()            |
| setName(newName)     |
| getEmail()           |
| setEmail(email)      |
| validateEmail(email) |
| sendEmail(email)     |

#### High Cohesion

| User             |
| ---------------- |
| getName()        |
| setName(newName) |
| getEmail()       |
| setEmail(email)  |
