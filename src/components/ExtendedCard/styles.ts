import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../theme';

export interface Styles {
    container: ViewStyle;
    image: ImageStyle;
    imageContainer: ViewStyle;
    linearGradient: ViewStyle;
    ratingContainer: ViewStyle;
    ribbonContainer: ViewStyle;
}

const injectTheme = ({ colors, radiuses, spacing }: Theme) =>
    StyleSheet.create<Styles>({
        container: {
            marginHorizontal: spacing.large,
            marginVertical: spacing.small,
        },
        image: {
            flex: 1,
            height: 150,
            width: undefined,
        },
        imageContainer: {
            borderBottomColor: colors.light,
            borderBottomWidth: 1,
            borderTopLeftRadius: radiuses.large,
            borderTopRightRadius: radiuses.large,
            flex: 1,
            height: 150,
            overflow: 'hidden',
        },
        linearGradient: {
            alignItems: 'center',
            borderBottomLeftRadius: radiuses.large,
            borderBottomRightRadius: radiuses.large,
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: spacing.large,
            paddingVertical: spacing.medium,
        },
        ratingContainer: {
            bottom: 0,
            padding: spacing.small,
            position: 'absolute',
            right: 0,
        },
        ribbonContainer: {
            alignItems: 'center',
            backgroundColor: colors.danger,
            padding: spacing.tiny,
            position: 'absolute',
            right: -40,
            top: 25,
            transform: [{ rotate: '45deg' }],
            width: 160,
        },
    });

export default injectTheme;
