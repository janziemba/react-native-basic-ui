---
id: faq
title: FAQ
---

## Is it compatible with Expo?

Yes, it is, thanks to [@expo/vector-icons](https://docs.expo.io/guides/icons/) and [expo-linear-gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/).

## Can I change the default props?

No, you can't. If you want to overwrite the default props you have to create your own component which extends this UI's component. For example if you want your `Scalable` to always have a scale of 0.5, you would need to create a new component which extends UI's `Scalable` and passes this prop to it.

## Can I change the default styles?

No, you can't. If you want to overwrite the default styles you have to create your own component.

## Can I change the theme dynamically?

Yes, you can, however the whole app would be re-rendered.