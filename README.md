# React Native Basic UI

## ⚠️ Documentation in progress

-   ✅ highly performant
-   ✅ lightweight
-   ✅ customizable
-   ✅ easy to use
-   ✅ typed
-   ✅ documented
-   ✅ accessible

[![npm version](https://img.shields.io/npm/v/react-native-basic-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-native-basic-ui)
![Size](https://img.shields.io/github/size/janziemba/react-native-basic-ui/dist.svg?style=flat-square)
[![Downloads](https://img.shields.io/npm/dm/react-native-basic-ui.svg?style=flat-square)](https://img.shields.io/npm/dm/react-native-basic-ui.svg)
[![Dependencies](https://img.shields.io/librariesio/github/janziemba/react-native-basic-ui.svg?style=flat-square)](https://www.npmjs.com/package/react-native-basic-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/janziemba/react-native-basic-ui/master/LICENSE)

## Screenshots

<img src="docs/assets/v01.png" width="250" height="504" />
<img src="docs/assets/v02.png" width="250" height="504" />
<img src="docs/assets/v03.png" width="250" height="504" />
<img src="docs/assets/v04.png" width="250" height="504" />
<img src="docs/assets/v05.png" width="250" height="504" />
<img src="docs/assets/v06.png" width="250" height="504" />

## Getting started

```sh
yarn add react-native-basic-ui
```

Also, complete [react-native-vector-icons installation](https://github.com/oblador/react-native-vector-icons#installation), otherwise you won't be able to use the Icon component.

## Usage

### Theme provider

You have to add a theme context to your app's root component. A default theme will be used.

```jsx
import { ThemeProvider } from 'react-native-basic-ui';

const App = () => {
    return (
        <ThemeProvider>
            ...
        </ThemeProvider>
    );
}
```

### Theme config

But you can set your own primitives and overwrite the default theme. For example:

```jsx
import { defaultTheme, ThemeProvider } from 'react-native-basic-ui';

const customTheme = {
    ...defaultTheme,
    colors: {
        primary: 'green',
    },
};

const App = () => {
    return (
        <ThemeProvider value={customTheme}>
            ...
        </ThemeProvider>
    );
}
```

### Components

Once you have included [ThemeProvider](#theme-provider) in your app, you can use the components:

```jsx
import { Button, CenterContainer } from 'react-native-basic-ui';

const ExampleComponent = () => {
    return (
        <CenterContainer>
            <Button text="Hello world" />
        </CenterContainer>
    );
};
```

### Custom components with the theme

To use the theme in your own components, you can use `useStyles` hook. You can define styles while using theme primitives:

```jsx
import { useStyles } from 'react-native-basic-ui';

const injectTheme = ({ colors, radiuses, spacing }) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.primary,
            borderRadius: radiuses.medium,
            borderTopColor: colors.white,
            marginBottom: spacing.small,
        },
    });

const ExampleComponent = () => {
    const styles = useStyles(injectTheme);

    return (
        <View style={styles.container}>
            ...
        </View>
    );
};
```

### Accessing the theme

And you can also access the theme object anywhere in the app:

```jsx
import { useTheme } from 'react-native-basic-ui';

const ExampleComponent = (props) => {
    const { isError } = props;
    const { colors } = useTheme();

    const color = isError ? colors.danger : colors.primary;

    return (
        <Text style={{ color }}>
            Hello world
        </Text>
    );
};
```

## Author

### Jan Ziemba

Checkout my <a href="https://www.react-native.cz" title="React Native Developer" target="_blank">React Native portfolio website</a>

<a href="https://www.buymeacoffee.com/janziemba" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## License

[MIT](LICENSE), © 2021 Jan Ziemba
