import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            backgroundColor: colors.light,
            flex: 1,
        },
    });

export default injectTheme;
