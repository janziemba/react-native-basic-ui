/* eslint-disable sort-keys, typescript-sort-keys/interface */

import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    base: ViewStyle;
    tiny: ViewStyle;
    small: ViewStyle;
    medium: ViewStyle;
    large: ViewStyle;
    huge: ViewStyle;
    gigantic: ViewStyle;
    notTop: ViewStyle;
    notRight: ViewStyle;
    notBottom: ViewStyle;
    notLeft: ViewStyle;
}

const injectTheme = ({ spacing }: Theme) =>
    StyleSheet.create<Styles>({
        base: {
            flex: 1,
        },
        tiny: {
            padding: spacing.tiny,
        },
        small: {
            padding: spacing.small,
        },
        medium: {
            padding: spacing.medium,
        },
        large: {
            padding: spacing.large,
        },
        huge: {
            padding: spacing.huge,
        },
        gigantic: {
            padding: spacing.gigantic,
        },
        notTop: {
            paddingTop: 0,
        },
        notRight: {
            paddingRight: 0,
        },
        notBottom: {
            paddingBottom: 0,
        },
        notLeft: {
            paddingLeft: 0,
        },
    });

export default injectTheme;
