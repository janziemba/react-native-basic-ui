import * as React from 'react';
import { Insets, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Scalable } from '@ui';
import { linearGradients, useStyles } from '@ui/theme';
import Icon, { Props as IconProps } from '../Icon';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

const hitSlop: Insets = { bottom: 10, left: 10, right: 10, top: 10 };

interface OwnProps {
    disabled?: boolean;
    onPress: () => void;
    text: string;
}

interface Props extends OwnProps, IconProps {}

const ActionButton: React.FunctionComponent<Props> = (props: Props) => {
    const { disabled, onPress, text } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <Scalable disabled={disabled || !onPress} hitSlop={hitSlop} onPress={onPress}>
            <View style={styles.container}>
                <LinearGradient colors={linearGradients.success} style={styles.iconContainer}>
                    <Icon color="white" size={28} {...props} />
                </LinearGradient>
                <Text color="success" size="small" weight="bold">
                    {text}
                </Text>
            </View>
        </Scalable>
    );
};

export default ActionButton;
