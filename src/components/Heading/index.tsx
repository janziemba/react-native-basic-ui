import * as React from 'react';

import { useTheme } from '../../theme';
import Spacer from '../Spacer';
import Text, { Props as TextProps } from '../Text';

export interface Props {
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
    /**
     * Text props.
     */
    textProps?: Partial<TextProps>;
}

const Heading: React.FunctionComponent<Props> = (props: Props) => {
    const { children, textProps } = props;

    const { typography } = useTheme();

    return (
        <>
            <Text align={typography.alignment.heading} size="huge" weight="bold" {...textProps}>
                {children}
            </Text>
            <Spacer size="large" />
        </>
    );
};

export default Heading;
