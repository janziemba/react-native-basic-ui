import * as React from 'react';
import { Insets, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import LinearGradient from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

const hitSlop: Insets = { bottom: 10, left: 10, right: 10, top: 10 };

interface OwnProps {
    /**
     * A color of the button. The default value is `primary`.
     */
    color?: 'black' | 'danger' | 'facebook' | 'google' | 'primary' | 'success' | 'twitter' | 'warning';
    /**
     * If `true`, the button is not pressable and a disabled style is applied. The default value is `false`.
     */
    disabled?: boolean;
    /**
     * A name of the icon.
     */
    icon?: IconProps['name'];
    /**
     * An icon set which should be used. The default value is `MaterialIcons`.
     */
    iconSet?: IconProps['iconSet'];
    /**
     * A text of the button.
     */
    text: string;
}

export interface Props extends OwnProps, Pick<ScalableProps, 'onPress'> {}

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const { color = 'primary', disabled, icon, iconSet, onPress, text } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const renderIcon = (): React.ReactNode => {
        if (!icon) {
            return null;
        }

        return (
            <View style={styles.iconContainer}>
                <Icon color={styles.icon.color} name={icon} iconSet={iconSet} size={18} />
            </View>
        );
    };

    return (
        <Scalable disabled={disabled || !onPress} hitSlop={hitSlop} onPress={onPress}>
            <LinearGradient colors={linearGradients[color]} style={styles.container}>
                {renderIcon()}
                <Text color="white" weight="bold">
                    {text}
                </Text>
            </LinearGradient>
        </Scalable>
    );
};

export default Button;
