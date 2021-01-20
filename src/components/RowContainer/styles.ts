import { StyleSheet, ViewStyle } from 'react-native';

export interface Styles {
    container: ViewStyle;
    containerBottom: ViewStyle;
    containerCenter: ViewStyle;
}

const injectTheme = () =>
    StyleSheet.create<Styles>({
        container: {
            flexDirection: 'row',
        },
        containerBottom: {
            alignItems: 'flex-end',
        },
        containerCenter: {
            alignItems: 'center',
        },
    });

export default injectTheme;
