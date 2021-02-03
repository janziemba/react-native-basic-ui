import * as React from 'react';
import { TextProps as RNTextProps } from 'react-native';

import { useTheme } from '../../theme';
import Spacer from '../Spacer';
import Text, { Props as TextProps } from '../Text';

interface Props {
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const Caption: React.FunctionComponent<Props> = (props: Props) => {
    const { children, textProps } = props;

    const { typography } = useTheme();

    return (
        <>
            <Text
                align={typography.alignment.caption}
                color="disabled"
                size="large"
                weight="bold"
                {...textProps}
            >
                {children}
            </Text>
            <Spacer size="tiny" />
        </>
    );
};

export default Caption;
