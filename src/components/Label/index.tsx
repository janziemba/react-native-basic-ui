import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import { capitalize } from '../../utils';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode;
    /**
     * A color of the label. The default value is `success`.
     */
    color?:
        | 'black'
        | 'dark'
        | 'danger'
        | 'disabled'
        | 'info'
        | 'light'
        | 'muted'
        | 'primary'
        | 'success'
        | 'warning'
        | 'white';
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const Label: React.FunctionComponent<Props> = (props: Props) => {
    const { children, color = 'success', textProps } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo(
        (): ViewStyle[] => [
            styles.containerBase,
            styles[`containerColor${capitalize(color)}` as keyof Styles],
        ],
        [color, styles],
    );

    const rnTextProps = React.useMemo(() => ({ numberOfLines: 1 }), []);

    return (
        <View style={mergedStyles}>
            <Text color="white" rnTextProps={rnTextProps} size="small" {...textProps}>
                {children}
            </Text>
        </View>
    );
};

export default Label;
