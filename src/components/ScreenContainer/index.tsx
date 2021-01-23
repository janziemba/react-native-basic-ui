import * as React from 'react';
import { View } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode;
}

const ScreenContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { children } = props;

    const styles: Styles = useStyles(injectTheme);

    return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;
