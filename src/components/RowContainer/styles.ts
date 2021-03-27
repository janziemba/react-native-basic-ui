import { StyleSheet, ViewStyle } from 'react-native';

export interface Styles {
    alignBottom: ViewStyle;
    alignCenter: ViewStyle;
    alignTop: ViewStyle;
    base: ViewStyle;
    wrapFalse: ViewStyle;
    wrapReverse: ViewStyle;
    wrapTrue: ViewStyle;
}

const injectTheme = () =>
    StyleSheet.create<Styles>({
        alignBottom: {
            alignItems: 'flex-end',
        },
        alignCenter: {
            alignItems: 'center',
        },
        alignTop: {
            alignItems: 'flex-start',
        },
        base: {
            flexDirection: 'row',
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
