import * as React from 'react';
import { Animated } from 'react-native';

import { colors } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import Link from '../Link';
import Text from '../Text';

interface Props {
    /**
     * A hidden content.
     */
    content: string;
    /**
     * Icon props.
     */
    iconProps?: Partial<IconProps>;
    /**
     * A visible title.
     */
    title: string;
}

const Collapsible: React.FunctionComponent<Props> = (props: Props) => {
    const { content, iconProps, title } = props;

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

    const textProps = React.useMemo(() => ({ size: 'large' as const }), []);

    return (
        <>
            <Link onPress={handlePress} textProps={textProps}>
                {title}
                {'\u00A0'}
                <Icon
                    color={colors.success}
                    iconSet="MaterialCommunityIcons"
                    name={isCollapsed ? 'chevron-down' : 'chevron-up'}
                    size={16}
                    {...iconProps}
                />
            </Link>
            {renderContent()}
        </>
    );
};

export default Collapsible;
