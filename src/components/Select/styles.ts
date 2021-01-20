import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    icon: TextStyle;
    iconContainer: ViewStyle;
    inputAndroid: TextStyle;
    inputAndroidFocused: TextStyle;
    inputIOS: TextStyle;
    inputIOSFocused: TextStyle;
}

const injectTheme = ({ colors, radiuses, spacing, typography }: Theme) =>
    StyleSheet.create<Styles>({
        icon: {
            color: colors.success,
        },
        iconContainer: {
            marginRight: spacing.tiny,
            marginTop: 5,
        },
        inputAndroid: {
            backgroundColor: colors.light,
            borderColor: colors.disabled,
            borderRadius: radiuses.large,
            borderWidth: 1,
            color: colors.success,
            fontFamily: typography.fontFamilies.bold,
            fontSize: typography.fontSizes.medium,
            paddingHorizontal: spacing.medium,
            paddingVertical: spacing.small,
        },
        inputAndroidFocused: {
            borderColor: colors.primary,
        },
        inputIOS: {
            backgroundColor: colors.light,
            borderColor: colors.disabled,
            borderRadius: radiuses.large,
            borderWidth: 1,
            color: colors.success,
            fontFamily: typography.fontFamilies.bold,
            fontSize: typography.fontSizes.medium,
            paddingHorizontal: spacing.medium,
            paddingVertical: spacing.small,
        },
        inputIOSFocused: {
            borderColor: colors.primary,
        },
    });

export default injectTheme;
