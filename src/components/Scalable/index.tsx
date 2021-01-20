import * as React from 'react';
import { Animated, Insets, Pressable } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
    children: React.ReactNode;
    disabled?: boolean;
    hitSlop?: Insets;
    onPress: () => void;
    scale?: number;
}

const Scalable: React.FunctionComponent<Props> = (props: Props) => {
    const { children, disabled, hitSlop, onPress, scale = 0.95 } = props;

    const animatedValue = React.useRef(new Animated.Value(0)).current;

    const pressInAnimation = Animated.timing(animatedValue, {
        duration: 100,
        toValue: 1,
        useNativeDriver: true,
    });

    const pressOutAnimation = Animated.timing(animatedValue, {
        duration: 100,
        toValue: 0,
        useNativeDriver: true,
    });

    const interpolation = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, scale],
    });

    const { callback: handlePressDebounced } = useDebouncedCallback(onPress, 500, {
        leading: true,
    });

    const handlePressIn = React.useCallback((): void => {
        pressInAnimation.start();
    }, [pressInAnimation]);

    const handlePressOut = React.useCallback((): void => {
        pressOutAnimation.start();
    }, [pressOutAnimation]);

    return (
        <Pressable
            disabled={disabled}
            hitSlop={hitSlop}
            onPress={handlePressDebounced}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.View
                style={{
                    transform: [{ scale: interpolation }],
                }}
            >
                {children}
            </Animated.View>
        </Pressable>
    );
};

export default Scalable;
