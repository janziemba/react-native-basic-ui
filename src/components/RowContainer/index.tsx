import * as React from 'react';
import { View, ViewProps as RNViewProps, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import { capitalize } from '../../utils';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * A vertical alignment of the content. The default value is `center`.
     */
    align?: 'bottom' | 'center' | 'top';
    children?: React.ReactNode;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
    /**
     * Whether children can wrap around after they hit the end of the container. The default value
     * is `false`.
     */
    wrap?: true | false | 'reverse';
}

const RowContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { align = 'center', children, rnViewProps, wrap = 'nowrap' } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo(
        (): ViewStyle[] => [
            styles.base,
            styles[`align${capitalize(align)}` as keyof Styles],
            styles[`wrap${capitalize(wrap.toString())}` as keyof Styles],
        ],
        [align, styles, wrap],
    );

    return (
        <View style={mergedStyles} {...rnViewProps}>
            {children}
        </View>
    );
};

export default RowContainer;
