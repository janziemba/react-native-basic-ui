import * as React from 'react';
import { Text } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode;
}

const Heading: React.FunctionComponent<Props> = (props: Props) => {
    const { children } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <Text allowFontScaling={false} style={styles.text}>
            {children}
        </Text>
    );
};

export default Heading;
