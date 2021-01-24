import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic';

interface Props {
    bottom?: boolean;
    children?: React.ReactNode;
    left?: boolean;
    right?: boolean;
    size?: Size;
    top?: boolean;
}

const Padding: React.FunctionComponent<Props> = (props: Props) => {
    const {
        bottom = true,
        children,
        left = true,
        right = true,
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

    return <View style={mergedStyles}>{children}</View>;
};

export default Padding;
