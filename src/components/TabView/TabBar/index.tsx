import * as React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';
import Tab from './Tab';

const TabBar: React.FunctionComponent<any> = (props: any) => {
    const { jumpTo, layout, navigationState, position } = props;

    const styles: Styles = useStyles(injectTheme);

    const numberOfTabs = navigationState.routes.length;

    const translateX = Animated.interpolate(position, {
        inputRange: [0, 1],
        outputRange: [0, layout.width / numberOfTabs],
    });

    return (
        <View style={styles.container}>
            {navigationState.routes.map((route: any, index: string) => (
                <Tab
                    isActive={navigationState.index === index}
                    jumpTo={jumpTo}
                    routeKey={route.key}
                    title={route.title}
                />
            ))}
            <Animated.View
                style={[
                    { width: layout.width / numberOfTabs },
                    { transform: [{ translateX }] },
                    styles.underline,
                ]}
            />
        </View>
    );
};

export default TabBar;
