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
            fontSize: typography.fontSizes.large,
            lineHeight: typography.lineHeights.large,
            marginBottom: spacing.medium,
            textAlign: typography.alignment.subheading,
        },
    });

export default injectTheme;
