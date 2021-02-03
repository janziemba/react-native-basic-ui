import * as React from 'react';
import { GestureResponderEvent, Insets, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import LinearGradient, { Props as LinearGradientProps } from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * A color of the button. The default value is `primary`.
     */
    color?:
        | 'black'
        | 'danger'
        | 'facebook'
        | 'google'
        | 'primary'
        | 'success'
        | 'twitter'
        | 'warning';
    /**
     * Icon props.
     */
    iconProps?: IconProps;
    /**
     * If `true`, the button is not pressable and a disabled style is applied. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * LinearGradient props.
     */
    linearGradientProps?: LinearGradientProps;
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * Scalable props.
     */
    scalableProps?: ScalableProps;
    /**
     * A text of the button.
     */
    text: string;
    /**
     * Text props.
     */
    textProps?: TextProps;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const {
        color = 'primary',
        iconProps,
        isDisabled,
        linearGradientProps,
        onPress,
        scalableProps,
        text,
        textProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const renderIcon = (): React.ReactNode => {
        if (!iconProps) {
            return null;
        }

        return (
            <View style={styles.iconContainer}>
                <Icon color={styles.icon.color} size={18} {...iconProps} />
            </View>
        );
    };

    return (
        <Scalable
            onPress={onPress}
            isDisabled={isDisabled || !onPress}
            {...scalableProps}
        >
            <LinearGradient
                colors={linearGradients[color]}
                style={styles.container}
                {...linearGradientProps}
            >
                {renderIcon()}
                <Text color="white" weight="bold" {...textProps}>
                    {text}
                </Text>
            </LinearGradient>
        </Scalable>
    );
};

export default Button;
