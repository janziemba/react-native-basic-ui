import * as React from 'react';
import { View } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

const Divider: React.FunctionComponent = () => {
    const styles: Styles = useStyles(injectTheme);

    return <View style={styles.container} />;
};

export default Divider;
