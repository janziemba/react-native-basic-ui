import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    emptyIcon: TextStyle;
    icon: TextStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        emptyIcon: {
            color: colors.muted,
        },
        icon: {
            color: colors.star,
        },
    });

export default injectTheme;
