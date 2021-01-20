import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    tab: ViewStyle;
    touchable: ViewStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        tab: {
            alignItems: 'center',
            borderBottomColor: colors.muted,
            borderBottomWidth: 1,
            flex: 1,
            justifyContent: 'center',
        },
        touchable: {
            flex: 1,
        },
    });

export default injectTheme;
