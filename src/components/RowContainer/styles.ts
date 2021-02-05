import { StyleSheet, ViewStyle } from 'react-native';

export interface Styles {
    base: ViewStyle;
    alignBottom: ViewStyle;
    alignCenter: ViewStyle;
    alignTop: ViewStyle;
    wrapFalse: ViewStyle;
    wrapReverse: ViewStyle;
    wrapTrue: ViewStyle;
}

const injectTheme = () =>
    StyleSheet.create<Styles>({
        base: {
            flexDirection: 'row',
        },
        alignBottom: {
            alignItems: 'flex-end',
        },
        alignCenter: {
            alignItems: 'center',
        },
        alignTop: {
            alignItems: 'flex-start',
        },
        wrapFalse: {
            flexWrap: 'nowrap',
        },
        wrapReverse: {
            flexWrap: 'wrap-reverse',
        },
        wrapTrue: {
            flexWrap: 'wrap',
        },
    });

export default injectTheme;
