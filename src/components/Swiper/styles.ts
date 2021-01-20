import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    dot: ViewStyle;
    footer: ViewStyle;
    inactiveDot: ViewStyle;
    nextButtonContainer: ViewStyle;
    paginationContainer: ViewStyle;
}

const injectTheme = ({ colors, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        dot: {
            backgroundColor: colors.white,
        },
        footer: {
            backgroundColor: colors.white,
            paddingHorizontal: spacing.medium,
            paddingTop: spacing.medium,
        },
        inactiveDot: {
            backgroundColor: colors.white,
        },
        nextButtonContainer: {
            alignItems: 'flex-end',
            flex: 1,
        },
        paginationContainer: {
            paddingBottom: spacing.medium,
            paddingTop: 0,
        },
    });

export default injectTheme;
