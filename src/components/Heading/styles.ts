import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    text: TextStyle;
}

const injectTheme = ({ colors, spacing, typography }: Theme) =>
    StyleSheet.create<Styles>({
        text: {
            color: colors.primary,
            fontFamily: typography.fontFamilies.bold,
            fontSize: typography.fontSizes.huge,
            lineHeight: typography.lineHeights.huge,
            marginBottom: spacing.large,
            textAlign: typography.alignment.heading,
        },
    });

export default injectTheme;
