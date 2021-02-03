import * as React from 'react';
import {
    Animated,
    GestureResponderEvent,
    Insets,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
} from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const hitSlop: Insets = { bottom: 10, left: 10, right: 10, top: 10 };

export interface Props {
    children: React.ReactNode;
    /**
     * If `true`, the scalable is not pressable. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * React Native's TouchableWithoutFeedback props.
     */
    rnTouchableWithoutFeedbackProps?: TouchableWithoutFeedbackProps;
    /**
     * A scale of the component when pressed. The default value is `0.95`.
     */
    scale?: number;
}

const Scalable: React.FunctionComponent<Props> = (props: Props) => {
    const { children, isDisabled = false, onPress, rnTouchableWithoutFeedbackProps, scale = 0.95 } = props;

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
            disabled={isDisabled || !onPress}
            hitSlop={hitSlop}
            onPress={handlePressDebounced}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...rnTouchableWithoutFeedbackProps}
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
