import * as React from 'react';
import { GestureResponderEvent, TextProps as RNTextProps } from 'react-native';

import Text, { Props as TextProps } from '../Text';

interface Props {
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
    /**
     * If `true`, the link is not pressable and a disabled style is applied. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const Link: React.FunctionComponent<Props> = (props: Props) => {
    const { children, isDisabled = false, onPress, textProps } = props;

    return (
        <Text
            color={isDisabled ? 'disabled' : 'success'}
            onPress={isDisabled ? undefined : onPress}
            weight="bold"
            {...textProps}
        >
            {children}
        </Text>
    );
};

export default Link;
