import * as React from 'react';

import Text, { Props as TextProps } from '../Text';

interface OwnProps {
    /**
     * If `true`, the link is not pressable and a disabled style is applied. The default value is `false`.
     */
    isDisabled?: boolean;
}

interface Props extends OwnProps, TextProps {}

const Link: React.FunctionComponent<Props> = (props: Props) => {
    const { children, isDisabled = false, onPress } = props;

    return (
        <Text
            {...props}
            color={isDisabled ? 'disabled' : 'success'}
            onPress={isDisabled ? undefined : onPress}
            weight="bold"
        >
            {children}
        </Text>
    );
};

export default Link;
