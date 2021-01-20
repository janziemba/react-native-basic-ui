import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
    icon: TextStyle;
    iconContainer: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            alignItems: 'center',
            borderRadius: radiuses.large,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.medium,
        },
        icon: {
            color: colors.white,
        },
        iconContainer: {
            marginRight: spacing.small,
        },
    });

export default injectTheme;
