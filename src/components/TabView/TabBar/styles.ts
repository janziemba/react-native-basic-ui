import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
    underline: ViewStyle;
}

const injectTheme = ({ colors }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            flexDirection: 'row',
            height: 50,
            justifyContent: 'space-around',
        },
        underline: {
            backgroundColor: colors.info,
            bottom: 0,
            height: 2,
            position: 'absolute',
        },
    });

export default injectTheme;
