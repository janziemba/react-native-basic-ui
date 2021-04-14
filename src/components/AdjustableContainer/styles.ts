import { StyleSheet, ViewStyle } from 'react-native';

export interface Styles {
    container: ViewStyle;
}

const injectTheme = () =>
    StyleSheet.create<Styles>({
        container: {
            flex: 1,
        },
    });

export default injectTheme;
