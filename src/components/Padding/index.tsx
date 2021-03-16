import * as React from 'react';
import { View, ViewProps as RNViewProps, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic';

export interface Props {
    /**
     * If `false`, the padding is not applied on the bottom. The default value is `true`.
     */
    bottom?: boolean;
    children?: React.ReactNode;
    /**
     * If `false`, the padding is not applied on the left. The default value is `true`.
     */
    left?: boolean;
    /**
     * If `false`, the padding is not applied on the right. The default value is `true`.
     */
    right?: boolean;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
    /**
     * A size of the padding. The default value is `large`.
     */
    size?: Size;
    /**
     * If `false`, the padding is not applied on the top. The default value is `true`.
     */
    top?: boolean;
}

const Padding: React.FunctionComponent<Props> = (props: Props) => {
    const {
        bottom = true,
        children,
        left = true,
        right = true,
        rnViewProps,
        size = 'large',
        top = true,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        let result = [styles.base, styles[size]];

        if (!top) {
            result.push(styles.notTop);
        }

        if (!right) {
            result.push(styles.notRight);
        }

        if (!bottom) {
            result.push(styles.notBottom);
        }

        if (!left) {
            result.push(styles.notLeft);
        }

        return result;
    }, [bottom, left, right, size, top, styles]);

    return (
        <View style={mergedStyles} {...rnViewProps}>
            {children}
        </View>
    );
};

export default Padding;
