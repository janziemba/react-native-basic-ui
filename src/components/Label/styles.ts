import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    containerBase: ViewStyle;
    containerColorBlack: ViewStyle;
    containerColorDanger: ViewStyle;
    containerColorDisabled: ViewStyle;
    containerColorInfo: ViewStyle;
    containerColorLight: ViewStyle;
    containerColorMuted: ViewStyle;
    containerColorPrimary: ViewStyle;
    containerColorSuccess: ViewStyle;
    containerColorWarning: ViewStyle;
    containerColorWhite: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        containerBase: {
            backgroundColor: colors.success,
            borderRadius: radiuses.tiny,
            paddingHorizontal: spacing.tiny,
        },
        containerColorBlack: {
            backgroundColor: colors.black,
        },
        containerColorDanger: {
            backgroundColor: colors.danger,
        },
        containerColorDisabled: {
            backgroundColor: colors.disabled,
        },
        containerColorInfo: {
            backgroundColor: colors.info,
        },
        containerColorLight: {
            backgroundColor: colors.light,
        },
        containerColorMuted: {
            backgroundColor: colors.muted,
        },
        containerColorPrimary: {
            backgroundColor: colors.primary,
        },
        containerColorSuccess: {
            backgroundColor: colors.success,
        },
        containerColorWarning: {
            backgroundColor: colors.warning,
        },
        containerColorWhite: {
            backgroundColor: colors.white,
        },
    });

export default injectTheme;
