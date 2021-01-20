import { StyleSheet, ViewStyle } from 'react-native';

export interface Styles {
    container: ViewStyle;
    containerHorizontal: ViewStyle;
    containerSelf: ViewStyle;
    containerVertical: ViewStyle;
}

const injectTheme = () =>
    StyleSheet.create<Styles>({
        container: {
            flex: 1,
        },
        containerHorizontal: {
            alignItems: 'center',
        },
        containerSelf: {
            alignSelf: 'center',
        },
        containerVertical: {
            justifyContent: 'center',
        },
    });

export default injectTheme;
