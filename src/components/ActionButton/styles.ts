import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    container: ViewStyle;
    iconContainerBase: ViewStyle;
    iconContainerColorBlack: ViewStyle;
    iconContainerColorDanger: ViewStyle;
    iconContainerColorDark: ViewStyle;
    iconContainerColorDisabled: ViewStyle;
    iconContainerColorFacebook: ViewStyle;
    iconContainerColorGoogle: ViewStyle;
    iconContainerColorInfo: ViewStyle;
    iconContainerColorLight: ViewStyle;
    iconContainerColorPrimary: ViewStyle;
    iconContainerColorSuccess: ViewStyle;
    iconContainerColorTwitter: ViewStyle;
    iconContainerColorWarning: ViewStyle;
    iconContainerColorWhite: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            alignItems: 'center',
        },
        iconContainerBase: {
            alignItems: 'center',
            borderRadius: radiuses.rounded,
            height: 50,
            justifyContent: 'center',
            padding: spacing.tiny,
            width: 50,
        },
        iconContainerColorBlack: {
            backgroundColor: colors.black,
        },
        iconContainerColorDanger: {
            backgroundColor: colors.danger,
        },
        iconContainerColorDark: {
            backgroundColor: colors.dark,
        },
        iconContainerColorDisabled: {
            backgroundColor: colors.disabled,
        },
        iconContainerColorFacebook: {
            backgroundColor: colors.facebook,
        },
        iconContainerColorGoogle: {
            backgroundColor: colors.google,
        },
        iconContainerColorInfo: {
            backgroundColor: colors.info,
        },
        iconContainerColorLight: {
            backgroundColor: colors.light,
        },
        iconContainerColorPrimary: {
            backgroundColor: colors.primary,
        },
        iconContainerColorSuccess: {
            backgroundColor: colors.success,
        },
        iconContainerColorTwitter: {
            backgroundColor: colors.twitter,
        },
        iconContainerColorWarning: {
            backgroundColor: colors.warning,
        },
        iconContainerColorWhite: {
            backgroundColor: colors.white,
        },
    });

export default injectTheme;
