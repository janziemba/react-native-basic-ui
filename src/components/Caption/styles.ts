import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/context';

export interface Styles {
    container: ViewStyle;
    text: TextStyle;
}

const injectTheme = ({ colors, spacing, typography }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            marginBottom: spacing.tiny,
        },
        text: {
            color: colors.primary,
            fontFamily: typography.fontFamilies.bold,
            fontSize: typography.fontSizes.large,
            lineHeight: typography.lineHeights.large,
            textAlign: typography.alignment.caption,
        },
    });

export default injectTheme;
