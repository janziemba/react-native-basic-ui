import * as React from 'react';
import { GestureResponderEvent, View, ViewStyle } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import { capitalize } from '../../utils';
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
        | 'dark'
        | 'disabled'
        | 'facebook'
        | 'google'
        | 'info'
        | 'light'
        | 'primary'
        | 'success'
        | 'twitter'
        | 'warning'
        | 'white';
    /**
     * Icon props.
     */
    iconProps: IconProps;
    /**
     * If `true`, the button is not pressable. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * A linear gradient of the button.
     */
    linearGradient?: 'danger' | 'info' | 'primary' | 'success' | 'warning';
    /**
     * LinearGradient props.
     */
    linearGradientProps?: Partial<LinearGradientProps>;
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * Scalable props.
     */
    scalableProps?: Partial<ScalableProps>;
    /**
     * A text of the button.
     */
    text?: string;
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {
    const {
        color = 'primary',
        iconProps,
        isDisabled = false,
        linearGradient,
        linearGradientProps,
        onPress,
        scalableProps,
        text,
        textProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const mergedIconContainerStyles = React.useMemo(
        (): ViewStyle[] => [
            styles.iconContainerBase,
            styles[`iconContainerColor${capitalize(color)}` as keyof Styles],
        ],
        [color, styles],
    );

    const renderIcon = (): React.ReactElement => <Icon color="white" size={28} {...iconProps} />;

    const renderIconContainer = (): React.ReactElement => {
        if (linearGradient) {
            return (
                <LinearGradient
                    colors={linearGradients[linearGradient]}
                    style={styles.iconContainerBase}
                    {...linearGradientProps}
                >
                    {renderIcon()}
                </LinearGradient>
            );
        }

        return <View style={mergedIconContainerStyles}>{renderIcon()}</View>;
    };

    const renderText = (): React.ReactNode => {
        if (!text) {
            return null;
        }

        return (
            <Text color="success" size="small" weight="bold" {...textProps}>
                {text}
            </Text>
        );
    };

    return (
        <Scalable isDisabled={isDisabled || !onPress} onPress={onPress} {...scalableProps}>
            <View style={styles.container}>
                {renderIconContainer()}
                {renderText()}
            </View>
        </Scalable>
    );
};

export default ActionButton;
