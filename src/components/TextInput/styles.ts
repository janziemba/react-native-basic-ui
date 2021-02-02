import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    textInput: ViewStyle;
    textInputDisabled: ViewStyle;
    textInputFocused: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing, typography }: Theme) =>
    StyleSheet.create<Styles>({
        textInput: {
            backgroundColor: colors.light,
            borderColor: colors.disabled,
            borderRadius: radiuses.large,
            borderWidth: 1,
            color: colors.dark,
            fontFamily: typography.fontFamilies.medium,
            fontSize: typography.fontSizes.medium,
            paddingHorizontal: spacing.medium,
            paddingVertical: spacing.small,
        },
        textInputDisabled: {
            color: colors.disabled,
        },
        textInputFocused: {
            borderColor: colors.primary,
        },
    });

export default injectTheme;
