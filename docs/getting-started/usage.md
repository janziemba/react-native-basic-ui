---
id: usage
title: Usage
---

## Theme configuration

If you want to use the default theme, you can fully skip this step. But if you want to set your own primitives and overwrite the [default theme](default-theme), you have to wrap your app with a `ThemeProvider`. For example:

```jsx
import { ThemeProvider } from 'react-native-basic-ui';

const customTheme = {
    colors: {
        primary: 'green',
    },
};

const App = () => {
    return (
        <ThemeProvider theme={customTheme}>
            ...
        </ThemeProvider>
    );
}
```

## Components

Now you can use the components:

```jsx
import { Button, CenterContainer } from 'react-native-basic-ui';

const ExampleComponent = () => {
    return (
        <CenterContainer>
            <Button onPress={() => {}} text="Hello world" />
        </CenterContainer>
    );
};
```

## Custom components with the theme

To use the theme in your own components, you can use `useStyles` hook. You can define styles while using [theme primitives](default-theme):

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

## Accessing the theme

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
