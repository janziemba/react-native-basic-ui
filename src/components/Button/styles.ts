import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    containerBase: ViewStyle;
    containerColorBlack: ViewStyle;
    containerColorDanger: ViewStyle;
    containerColorDark: ViewStyle;
    containerColorDisabled: ViewStyle;
    containerColorFacebook: ViewStyle;
    containerColorGoogle: ViewStyle;
    containerColorInfo: ViewStyle;
    containerColorLight: ViewStyle;
    containerColorPrimary: ViewStyle;
    containerColorSuccess: ViewStyle;
    containerColorTwitter: ViewStyle;
    containerColorWarning: ViewStyle;
    containerColorWhite: ViewStyle;
    icon: TextStyle;
    iconContainer: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        containerBase: {
            alignItems: 'center',
            borderRadius: radiuses.large,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.medium,
        },
        containerColorBlack: {
            backgroundColor: colors.black,
        },
        containerColorDanger: {
            backgroundColor: colors.danger,
        },
        containerColorDark: {
            backgroundColor: colors.dark,
        },
        containerColorDisabled: {
            backgroundColor: colors.disabled,
        },
        containerColorFacebook: {
            backgroundColor: colors.facebook,
        },
        containerColorGoogle: {
            backgroundColor: colors.google,
        },
        containerColorInfo: {
            backgroundColor: colors.info,
        },
        containerColorLight: {
            backgroundColor: colors.light,
        },
        containerColorPrimary: {
            backgroundColor: colors.primary,
        },
        containerColorSuccess: {
            backgroundColor: colors.success,
        },
        containerColorTwitter: {
            backgroundColor: colors.twitter,
        },
        containerColorWarning: {
            backgroundColor: colors.warning,
        },
        containerColorWhite: {
            backgroundColor: colors.white,
        },
        icon: {
            color: colors.white,
        },
        iconContainer: {
            marginRight: spacing.small,
        },
    });

export default injectTheme;
