import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '@ui/theme/context';

export interface Styles {
    container: ViewStyle;
}

const injectTheme = ({ colors, radiuses }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            backgroundColor: colors.white,
            borderRadius: radiuses.large,
            elevation: 3,
            shadowColor: colors.black,
            shadowOffset: {
                height: 1,
                width: 0,
            },
            shadowOpacity: 0.12,
            shadowRadius: 10,
            // we need to have zIndex on iOS, otherwise the shadow is under components that
            // are rendered later
            zIndex: 1,
        },
    });

export default injectTheme;
