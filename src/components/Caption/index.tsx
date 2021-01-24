import * as React from 'react';
import { Text, View } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface Props {
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode;
}

const Caption: React.FunctionComponent<Props> = (props: Props) => {
    const { children } = props;

    const styles: Styles = useStyles(injectTheme);

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.text}>
                {children}
            </Text>
        </View>
    );
};

export default Caption;
