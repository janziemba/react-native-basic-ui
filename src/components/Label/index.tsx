import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

interface OwnProps {
    /**
     * A color of the label. The default value is `success`.
     */
    color?: 'info' | 'success' | 'warning';
    /**
     * Text props.
     */
    textProps?: TextProps;
}

interface Props extends OwnProps, Pick<TextProps, 'children'> {}

const Label: React.FunctionComponent<Props> = (props: Props) => {
    const { children, color = 'success', textProps } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        let result = [styles.container];

        switch (color) {
            case 'info':
                result.push(styles.containerInfo);
                break;
            case 'warning':
                result.push(styles.containerWarning);
                break;
        }

        return result;
    }, [color, styles]);

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
