import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    contentContainer: ViewStyle;
    iconContainer: ViewStyle;
}

const injectTheme = ({ spacing }: Theme) =>
    StyleSheet.create<Styles>({
        contentContainer: {
            flex: 1,
            marginTop: 2,
        },
        iconContainer: {
            marginRight: spacing.small,
        },
    });

export default injectTheme;
