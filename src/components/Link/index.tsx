import * as React from 'react';

import Text, { OwnProps as TextProps } from '../Text';

interface OwnProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onPress: () => void;
}

export interface Props extends OwnProps, TextProps {}

const Link: React.FunctionComponent<Props> = (props: Props) => {
    const { children, disabled = false, onPress } = props;

    return (
        <Text
            color={disabled ? 'disabled' : 'success'}
            {...props}
            onPress={disabled ? undefined : onPress}
            weight="bold"
        >
            {children}
        </Text>
    );
};

export default Link;
