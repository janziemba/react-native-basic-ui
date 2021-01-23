import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useStyles } from '../../theme';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode;
    color?: 'info' | 'success' | 'warning';
}

const Label: React.FunctionComponent<Props> = (props: Props) => {
    const { children, color = 'success' } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        let result = [styles.container];

        switch (color) {
            case 'info':
                result.push(styles.containerInfo);
                break;
            case 'warning':
                result.push(styles.containerWarning);
                break;
        }

        return result;
    }, [color, styles]);

    return (
        <View style={mergedStyles}>
            <Text color="white" numberOfLines={1} size="small">
                {children}
            </Text>
        </View>
    );
};

export default Label;
