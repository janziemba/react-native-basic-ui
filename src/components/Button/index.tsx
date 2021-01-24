import * as React from 'react';
import { Insets, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon, { IconSet } from '../Icon';
import LinearGradient from '../LinearGradient';
import Scalable from '../Scalable';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

const hitSlop: Insets = { bottom: 10, left: 10, right: 10, top: 10 };

export interface Props {
    disabled?: boolean;
    color?: 'black' | 'danger' | 'google' | 'primary' | 'success' | 'warning';
    icon?: string;
    iconSet?: IconSet;
    onPress: () => void;
    text: string;
}

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
