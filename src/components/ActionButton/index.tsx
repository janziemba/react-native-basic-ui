import * as React from 'react';
import { GestureResponderEvent, View } from 'react-native';

import { linearGradients, useStyles } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import LinearGradient, { Props as LinearGradientProps } from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

interface Props {
    /**
     * Icon props.
     */
    iconProps: IconProps;
    /**
     * If `true`, the button is not pressable. The default value is `false`.
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

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {
    const {
        iconProps,
        isDisabled,
        linearGradientProps,
        onPress,
        scalableProps,
        text,
        textProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <Scalable isDisabled={isDisabled || !onPress} onPress={onPress} {...scalableProps}>
            <View style={styles.container}>
                <LinearGradient
                    colors={linearGradients.success}
                    style={styles.iconContainer}
                    {...linearGradientProps}
                >
                    <Icon color="white" size={28} {...iconProps} />
                </LinearGradient>
                <Text color="success" size="small" weight="bold" {...textProps}>
                    {text}
                </Text>
            </View>
        </Scalable>
    );
};

export default ActionButton;
