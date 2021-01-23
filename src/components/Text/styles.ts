import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '../../theme/context';

export interface Styles {
    base: TextStyle;
    black: TextStyle;
    bold: TextStyle;
    centered: TextStyle;
    danger: TextStyle;
    disabled: TextStyle;
    info: TextStyle;
    italic: TextStyle;
    justified: TextStyle;
    large: TextStyle;
    light: TextStyle;
    primary: TextStyle;
    right: TextStyle;
    small: TextStyle;
    success: TextStyle;
    warning: TextStyle;
    white: TextStyle;
}

const injectTheme = ({ colors, typography }: Theme) =>
    StyleSheet.create<Styles>({
        base: {
            color: colors.dark,
            fontFamily: typography.fontFamilies.medium,
            lineHeight: typography.lineHeights.medium,
            fontSize: typography.fontSizes.medium,
            textAlign: typography.alignment.text,
            textAlignVertical: 'center',
        },
        black: {
            color: colors.black,
        },
        bold: {
            fontFamily: typography.fontFamilies.bold,
        },
        centered: {
            textAlign: 'center',
        },
        danger: {
            color: colors.danger,
        },
        disabled: {
            color: colors.disabled,
        },
        info: {
            color: colors.info,
        },
        italic: {
            fontStyle: 'italic',
        },
        justified: {
            textAlign: 'justify',
        },
        large: {
            fontSize: typography.fontSizes.large,
            lineHeight: typography.lineHeights.large,
        },
        light: {
            color: colors.light,
        },
        primary: {
            color: colors.primary,
        },
        right: {
            textAlign: 'right',
        },
        small: {
            fontSize: typography.fontSizes.small,
            lineHeight: typography.lineHeights.small,
        },
        success: {
            color: colors.success,
        },
        warning: {
            color: colors.warning,
        },
        white: {
            color: colors.white,
        },
    });

export default injectTheme;
