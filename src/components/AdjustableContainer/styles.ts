import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
    keyboardContainer: ViewStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            flex: 1,
        },
        keyboardContainer: {
            alignItems: 'flex-end',
            backgroundColor: colors.white,
            borderTopColor: colors.light,
            borderTopWidth: 1,
        },
    });

export default injectTheme;
