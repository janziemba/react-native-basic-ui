import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    alignCenter: TextStyle;
    alignJustify: TextStyle;
    alignLeft: TextStyle;
    alignRight: TextStyle;
    base: TextStyle;
    colorBlack: TextStyle;
    colorDanger: TextStyle;
    colorDisabled: TextStyle;
    colorInfo: TextStyle;
    colorLight: TextStyle;
    colorMuted: TextStyle;
    colorPrimary: TextStyle;
    colorSuccess: TextStyle;
    colorWarning: TextStyle;
    colorWhite: TextStyle;
    sizeHuge: TextStyle;
    sizeLarge: TextStyle;
    sizeMedium: TextStyle;
    sizeSmall: TextStyle;
    sizeTiny: TextStyle;
    styleItalic: TextStyle;
    styleNormal: TextStyle;
    weightBold: TextStyle;
    weightMedium: TextStyle;
}

const injectTheme = ({ colors, typography }: Theme) =>
    StyleSheet.create<Styles>({
        alignCenter: {
            textAlign: 'center',
        },
        alignJustify: {
            textAlign: 'justify',
        },
        alignLeft: {
            textAlign: 'left',
        },
        alignRight: {
            textAlign: 'right',
        },
        base: {
            textAlignVertical: 'center',
        },
        colorBlack: {
            color: colors.black,
        },
        colorDanger: {
            color: colors.danger,
        },
        colorDisabled: {
            color: colors.disabled,
        },
        colorInfo: {
            color: colors.info,
        },
        colorLight: {
            color: colors.light,
        },
        colorMuted: {
            color: colors.muted,
        },
        colorPrimary: {
            color: colors.primary,
        },
        colorSuccess: {
            color: colors.success,
        },
        colorWarning: {
            color: colors.warning,
        },
        colorWhite: {
            color: colors.white,
        },
        sizeHuge: {
            fontSize: typography.fontSizes.huge,
            lineHeight: typography.lineHeights.huge,
        },
        sizeLarge: {
            fontSize: typography.fontSizes.large,
            lineHeight: typography.lineHeights.large,
        },
        sizeMedium: {
            fontSize: typography.fontSizes.medium,
            lineHeight: typography.lineHeights.medium,
        },
        sizeSmall: {
            fontSize: typography.fontSizes.small,
            lineHeight: typography.lineHeights.small,
        },
        sizeTiny: {
            fontSize: typography.fontSizes.tiny,
            lineHeight: typography.lineHeights.tiny,
        },
        styleItalic: {
            fontStyle: 'italic',
        },
        styleNormal: {
            fontStyle: 'normal',
        },
        weightBold: {
            fontFamily: typography.fontFamilies.bold,
        },
        weightMedium: {
            fontFamily: typography.fontFamilies.medium,
        },
    });

export default injectTheme;
