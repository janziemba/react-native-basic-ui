import * as React from 'react';
import { Text } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface Props {
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
}

const Subheading: React.FunctionComponent<Props> = (props: Props) => {
    const { children } = props;

    const styles: Styles = useStyles(injectTheme);

    return <Text style={styles.text}>{children}</Text>;
};

export default Subheading;
