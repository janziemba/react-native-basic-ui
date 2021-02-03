import * as React from 'react';
import { View, ViewProps as RNViewProps, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface Props {
    /**
     * A vertical alignment of the content. The default value is `center`.
     */
    align?: 'top' | 'center' | 'bottom';
    children?: React.ReactNode;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
}

const RowContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { align = 'center', children, rnViewProps } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        const result = [styles.container];

        switch (align) {
            case 'center':
                result.push(styles.containerCenter);
                break;
            case 'bottom':
                result.push(styles.containerBottom);
                break;
        }

        return result;
    }, [align, styles]);

    return (
        <View style={mergedStyles} {...rnViewProps}>
            {children}
        </View>
    );
};

export default RowContainer;
