import * as React from 'react';
import { Animated } from 'react-native';

import { colors } from '@ui/theme';
import Icon from '../Icon';
import Link from '../Link';
import Text from '../Text';

interface Props {
    content: string;
    title: string;
}

const Collapsible: React.FunctionComponent<Props> = (props: Props) => {
    const { content, title } = props;

    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const opacity = React.useRef(new Animated.Value(0)).current;

    const uncollapsingAnimation = Animated.timing(opacity, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
    });

    const collapsingAnimation = Animated.timing(opacity, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
    });

    const handlePress = React.useCallback((): void => {
        if (isCollapsed) {
            setIsCollapsed(false);

            uncollapsingAnimation.start();
        } else {
            collapsingAnimation.start(() => setIsCollapsed(true));
        }
    }, [collapsingAnimation, isCollapsed, uncollapsingAnimation]);

    const renderContent = (): React.ReactNode => {
        if (isCollapsed) {
            return null;
        }

        return (
            <Animated.View style={{ opacity }}>
                <Text>{content}</Text>
            </Animated.View>
        );
    };

    return (
        <>
            <Link size="large" onPress={handlePress}>
                {title}
                {'\u00A0'}
                <Icon
                    color={colors.success}
                    iconSet="MaterialCommunityIcons"
                    name={isCollapsed ? 'chevron-down' : 'chevron-up'}
                    size={16}
                />
            </Link>
            {renderContent()}
        </>
    );
};

export default Collapsible;
