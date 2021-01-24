import * as React from 'react';
import { View } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gigantic';

interface Props {
    /**
     * A size of the space. The default value is large.
     */
    size?: Size;
}

const Spacer: React.FunctionComponent<Props> = (props: Props) => {
    const { size = 'large' } = props;

    const styles: Styles = useStyles(injectTheme);

    return <View style={styles[size]} />;
};

export default Spacer;
