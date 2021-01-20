import * as React from 'react';
import { View } from 'react-native';

import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic';

interface Props {
    children?: React.ReactNode;
    size?: Size;
}

const Spacer: React.FunctionComponent<Props> = (props: Props) => {
    const { children, size = 'large' } = props;

    const styles: Styles = useStyles(injectTheme);

    return <View style={styles[size]}>{children}</View>;
};

export default Spacer;
