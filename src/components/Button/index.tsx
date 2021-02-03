import * as React from 'react';
import { ActivityIndicator, GestureResponderEvent, View, ViewStyle } from 'react-native';

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
    iconProps?: IconProps;
    /**
     * If `true`, the button is not pressable and a disabled style is applied. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * If `true`, a loading indicator is shown instead of a text. The default value is `false`.
     */
    isLoading?: boolean;
    /**
     * A linear gradient of the button.
     */
    linearGradient?:
        | 'danger'
        | 'info'
        | 'primary'
        | 'success'
        | 'warning';
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
    text: string;
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const {
        color = 'primary',
        iconProps,
        isDisabled = false,
        isLoading = false,
        linearGradient,
        linearGradientProps,
        onPress,
        scalableProps,
        text,
        textProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const mergedContainerStyles = React.useMemo(
        (): ViewStyle[] => [
            styles.containerBase,
            styles[`containerColor${capitalize(color)}` as keyof Styles],
        ],
        [color, styles],
    );

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

    const renderContent = (): React.ReactElement => {
        if (isLoading) {
            return <ActivityIndicator />;
        }

        return (
            <>
                {renderIcon()}
                <Text color="white" weight="bold" {...textProps}>
                    {text}
                </Text>
            </>
        );
    };

    if (linearGradient) {
        return (
            <Scalable onPress={onPress} isDisabled={isDisabled || !onPress} {...scalableProps}>
                <LinearGradient
                    colors={linearGradients[linearGradient]}
                    style={styles.containerBase}
                    {...linearGradientProps}
                >
                    {renderContent()}
                </LinearGradient>
            </Scalable>
        );
    }

    return (
        <Scalable onPress={onPress} isDisabled={isDisabled || !onPress} {...scalableProps}>
            <View style={mergedContainerStyles}>{renderContent()}</View>
        </Scalable>
    );
};

export default Button;
