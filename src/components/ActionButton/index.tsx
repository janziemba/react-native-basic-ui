import * as React from 'react';
import { Insets, View } from 'react-native';

import { linearGradients, useStyles } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import LinearGradient from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

const hitSlop: Insets = { bottom: 10, left: 10, right: 10, top: 10 };

interface OwnProps {
    /**
     * If true, the button is not pressable. The default value is false.
     */
    disabled?: boolean;
    /**
     * A name of the icon.
     */
    icon: IconProps['name'];
    /**
     * An icon set which should be used.
     */
    iconSet?: IconProps['iconSet'];
    /**
     * A text of the button.
     */
    text: string;
}

interface Props extends OwnProps, IconProps, Pick<ScalableProps, 'onPress'> {}

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {
    const { disabled, icon, iconSet, onPress, text } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <Scalable disabled={disabled || !onPress} hitSlop={hitSlop} onPress={onPress}>
            <View style={styles.container}>
                <LinearGradient colors={linearGradients.success} style={styles.iconContainer}>
                    <Icon color="white" iconSet={iconSet} name={icon} size={28} />
                </LinearGradient>
                <Text color="success" size="small" weight="bold">
                    {text}
                </Text>
            </View>
        </Scalable>
    );
};

export default ActionButton;
