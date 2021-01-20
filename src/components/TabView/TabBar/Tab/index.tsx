import * as React from 'react';
import { Pressable, View } from 'react-native';

import { useStyles } from '@ui/theme';
import Text from '../../../Text';
import injectTheme, { Styles } from './styles';

interface Props {
    isActive: boolean;
    jumpTo: (key: string) => void;
    routeKey: string;
    title: string;
}

const Tab: React.FunctionComponent<any> = (props: Props) => {
    const { isActive, jumpTo, routeKey, title } = props;

    const styles: Styles = useStyles(injectTheme);

    const handlePress = React.useCallback(() => {
        jumpTo(routeKey);
    }, [jumpTo, routeKey]);

    return (
        <Pressable
            key={routeKey}
            accessibilityLabel={title}
            accessibilityRole="tab"
            onPress={handlePress}
            style={styles.touchable}
        >
            <View style={styles.tab}>
                <Text color={isActive ? 'info' : 'success'} weight="bold">
                    {title}
                </Text>
            </View>
        </Pressable>
    );
};

export default Tab;
