import * as React from 'react';
import {
    Animated,
    Keyboard,
    KeyboardEvent,
    Platform,
    View,
    ViewProps as RNViewProps,
} from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * A safe area inset on the bottom.
     */
    bottomInset: number;
    children?: React.ReactNode;
    /**
     * React Native's View props.
     */
    rnViewProps?: Partial<RNViewProps>;
}

const AdjustableContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { bottomInset, children, rnViewProps } = props;

    const styles: Styles = useStyles(injectTheme);

    const keyboardHeight = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardWillShowListener = Keyboard.addListener(
                'keyboardWillShow',
                (event: KeyboardEvent): void => {
                    Animated.timing(keyboardHeight, {
                        duration: 250,
                        toValue: event.endCoordinates.height - bottomInset,
                        useNativeDriver: false,
                    }).start();
                },
            );

            const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', (): void => {
                Animated.timing(keyboardHeight, {
                    duration: 250,
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            });

            return () => {
                keyboardWillShowListener.remove();
                keyboardWillHideListener.remove();
            };
        }

        return undefined;
    }, [bottomInset, keyboardHeight]);

    if (Platform.OS === 'ios') {
        return (
            <Animated.View
                style={[styles.container, { paddingBottom: keyboardHeight }]}
                {...rnViewProps}
            >
                {children}
            </Animated.View>
        );
    }

    return (
        <View style={styles.container} {...rnViewProps}>
            {children}
        </View>
    );
};

export default AdjustableContainer;
