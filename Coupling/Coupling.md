## Coupling

Coupling is the degree of interdependence between software modules

- No Dependency
- Loosely Coupled 💏
- Tightly Coupled 💏

> [!NOTE]
> Coupling বলতে বুঝায় একটা মডিউল আর একটা মডেলের সাথে communication করে, তার মানে হচ্ছে প্রথম মডিউলটি পরের মডেলের উপর ডিপেন্ডেন্ট |

> [!NOTE]
> একটা মডিউল অন্য একটা মডিউল সাথে dependency বেশি থাকে তাকে আমরা tightly coupled বলি

> [!NOTE]
> Cohesion বলতে বুঝায় একটা single unit নিজেদের সাথে কতটা similar বা similar টাইপ এর জিনিসগুলো একসাথে করছে রাখে বা করছে

### Ideal Work

High cohesion, loose coupling

> [!IMPORTANT]
> High cohesion মানে হচ্ছে সে single responsibilities ফলো করে এবং সে single ইউনিটের মধ্যে তার রিলেটেড জিনিসগুলো বা behavior গুলো রাখবে |

> [!WARNING]
> loose coupling মানে হচ্ছে একটা module সাথে আরেকটা module এর over dependency থাকবে না। যেভাবে achieve করব : specific concrete implementation এর উপর dependency রাখবো না, interface উপর dependency রাখবো বা কম module এর উপর dependency রাখবো
