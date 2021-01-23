import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme/context';

export interface Styles {
    tiny: ViewStyle;
    small: ViewStyle;
    medium: ViewStyle;
    large: ViewStyle;
    huge: ViewStyle;
    gigantic: ViewStyle;
}

const injectTheme = ({ spacing }: Theme) =>
    StyleSheet.create<Styles>({
        tiny: {
            height: spacing.tiny,
            width: spacing.tiny,
        },
        small: {
            height: spacing.small,
            width: spacing.small,
        },
        medium: {
            height: spacing.medium,
            width: spacing.medium,
        },
        large: {
            height: spacing.large,
            width: spacing.large,
        },
        huge: {
            height: spacing.huge,
            width: spacing.huge,
        },
        gigantic: {
            height: spacing.gigantic,
            width: spacing.gigantic,
        },
    });

export default injectTheme;
