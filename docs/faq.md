---
id: faq
title: FAQ
---

## Is it compatible with Expo?

Yes, it is, thanks to [@expo/vector-icons](https://docs.expo.io/guides/icons/) and [expo-linear-gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/).

## Can I change the default props? I don't want to overwrite them every time.

No, you can't. If you want to overwrite the default props you have to create your own component which extends React Native Basic UI's component. For example if you want your `Scalable` to always have a scale of `0.5`, you would need to create a new component which extends React Native Basic UI's `Scalable` and passes this prop to it. Like this:

```jsx
import { Scalable } from 'react-native-basic-ui';

const MyScalable = () => <Scalable onPress={() => {}} scale={0.5} />;
```

But you don't have to do this if you don't mind passing `scale={0.5}` prop every time you want to use the Scalable component.

## Can I change the default styles?

No, you can't. If you want to overwrite the default styles you have to create your own component.

## Can I change the theme dynamically?

Yes, you can, however the whole app would be re-rendered.
