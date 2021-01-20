import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';

interface Props {
    align?: 'top' | 'center' | 'bottom';
    children?: React.ReactNode;
}

const RowContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { align = 'center', children } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): ViewStyle[] => {
        const result = [styles.container];

        switch (align) {
            case 'center':
                result.push(styles.containerCenter);
                break;
            case 'bottom':
                result.push(styles.containerBottom);
                break;
        }

        return result;
    }, [align, styles]);

    return <View style={mergedStyles}>{children}</View>;
};

export default RowContainer;
