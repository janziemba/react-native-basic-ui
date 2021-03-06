import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    container: ViewStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            backgroundColor: colors.muted,
            height: 1,
        },
    });

export default injectTheme;
