import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    icon: TextStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        icon: {
            color: colors.dark,
        },
    });

export default injectTheme;
