import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme/context';

export interface Styles {
    container: ViewStyle;
    containerInfo: ViewStyle;
    containerWarning: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            backgroundColor: colors.success,
            borderRadius: radiuses.tiny,
            paddingHorizontal: spacing.tiny,
        },
        containerInfo: {
            backgroundColor: colors.info,
        },
        containerWarning: {
            backgroundColor: colors.warning,
        },
    });

export default injectTheme;
