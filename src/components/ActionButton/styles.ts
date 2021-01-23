import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme/context';

export interface Styles {
    container: ViewStyle;
    iconContainer: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            alignItems: 'center',
        },
        iconContainer: {
            alignItems: 'center',
            backgroundColor: colors.success,
            borderRadius: radiuses.rounded,
            height: 50,
            justifyContent: 'center',
            padding: spacing.tiny,
            width: 50,
        },
    });

export default injectTheme;
