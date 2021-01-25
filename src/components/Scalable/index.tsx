import * as React from 'react';
import {
    Animated,
    GestureResponderEvent,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
} from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

interface OwnProps {
    children: React.ReactNode;
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * A scale of the component when pressed. The default value is 0.95.
     */
    scale?: number;
}

export interface Props extends OwnProps, Omit<TouchableWithoutFeedbackProps, 'onPress'> {}

const Scalable: React.FunctionComponent<Props> = (props: Props) => {
    const { children, disabled = false, onPress, scale = 0.95 } = props;

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
        <TouchableWithoutFeedback
            {...props}
            disabled={disabled || !onPress}
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
        </TouchableWithoutFeedback>
    );
};

export default Scalable;
