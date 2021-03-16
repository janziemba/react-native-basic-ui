import * as React from 'react';
import { View, ViewProps as RNViewProps } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

export interface Props {
    children?: React.ReactNode;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
}

const FlexContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { children, rnViewProps } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <View style={styles.container} {...rnViewProps}>
            {children}
        </View>
    );
};

export default FlexContainer;
