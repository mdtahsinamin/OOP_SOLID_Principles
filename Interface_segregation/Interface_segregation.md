## Interface Segregation principle

Clients shouldn't be forced to depend on methods they do not use.

1. Try to make your interface narrow enough that client classes don't have to implement behaviors they don't need.

2. Break down `fat interfaces` to more granular and specific ons.

3. Don't create fat interfaces, not create unnecessary load on every classes

4. Create simple interface based on specific responsibility.

> আমি যদি একটা interface ক্রিয়েট করি যার মধ্যে অনেকগুলো method রয়েছে। ঔ interface কে যে ক্লাস implements(keyword) করবে তার মধ্যে ওই method গুলোর implementation করতে হবে / থাকা লাগবে। যদি এমন হয় আমার interface এর দশটি method আছে কোন একটা ক্লাস ওই interface implements(keyword) করছে, তার মানে ওই দশটি method তার ক্লাসের মধ্যে implementation করতে হবে / থাকা লাগবে, কিন্তু আরেকটা class সেইম interface কে implements(keyword) করছে বাট তার মধ্যে সব method গুলো দরকার নেই । এর ফলে ক্লাসের উপর unnecessary লোড ক্রিয়েট হয়। সমস্যাটা সলভ করতে পারি আমরা Interface Segregation principle এর মাধ্যমে।

> তাহলে হলে আমরা interface গুলোকে ছোট ছোট interface এ break করব যাতে যার যেটা দরকার সে সেটা ইউজ করতে পারে।

> আমরা বড় interface ক্রিয়েট করবো না যাতে সবার উপরে unnecessary load ক্রিয়েট না হয় 🙂
