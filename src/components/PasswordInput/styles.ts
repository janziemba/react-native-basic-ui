import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
    iconContainer: ViewStyle;
    textInput: ViewStyle;
    textInputFocused: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing, typography }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            justifyContent: 'center',
        },
        iconContainer: {
            position: 'absolute',
            right: spacing.medium,
        },
        textInput: {
            backgroundColor: colors.light,
            borderColor: colors.disabled,
            borderRadius: radiuses.large,
            borderWidth: 1,
            color: colors.dark,
            fontFamily: typography.fontFamilies.medium,
            fontSize: typography.fontSizes.medium,
            height: 44, // https://github.com/facebook/react-native/issues/25891
            paddingHorizontal: spacing.medium,
            paddingRight: 40,
            paddingVertical: spacing.small,
        },
        textInputFocused: {
            borderColor: colors.primary,
        },
    });

export default injectTheme;
