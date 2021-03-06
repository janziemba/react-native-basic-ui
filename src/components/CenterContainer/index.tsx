import * as React from 'react';
import { View, ViewProps as RNViewProps, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

export interface Props {
    children?: React.ReactNode;
    /**
     * If `true`, `alignItems: 'center'` style is applied. The default value is `true`.
     */
    horizontal?: boolean;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
    /**
     * If `true`, `alignSelf: 'center'` style is applied. The default value is `false`.
     */
    self?: boolean;
    /**
     * If `true`, `justifyContent: 'center'` style is applied. The default value is `true`.
     */
    vertical?: boolean;
}

const CenterContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { children, horizontal = true, rnViewProps, self = false, vertical = true } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        let result = [styles.container];

        if (horizontal) {
            result.push(styles.containerHorizontal);
        }

        if (vertical) {
            result.push(styles.containerVertical);
        }

        if (self) {
            result = [styles.containerSelf];
        }

        return result;
    }, [horizontal, self, styles, vertical]);

    return (
        <View style={mergedStyles} {...rnViewProps}>
            {children}
        </View>
    );
};

export default CenterContainer;
