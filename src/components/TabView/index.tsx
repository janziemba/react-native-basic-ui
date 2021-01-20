import * as React from 'react';
import Animated from 'react-native-reanimated';
import { TabView as RNTabView } from 'react-native-tab-view';

import TabBar from './TabBar';

const TabView: React.FunctionComponent<any> = (props: any) => {
    const position = React.useRef(new Animated.Value(0)).current;

    const renderTabBar = (tabBarProps: any) => <TabBar {...tabBarProps} position={position} />;

    return <RNTabView position={position} renderTabBar={renderTabBar} {...props} />;
};

export default TabView;
