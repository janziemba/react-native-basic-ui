import * as React from 'react';
import { Animated, Keyboard, KeyboardEvent, Platform, View, ViewProps } from 'react-native';

import { useStyles } from '../../theme';
import Link from '../Link';
import Padding from '../Padding';
import injectTheme, { Styles } from './styles';

interface OwnProps {
    children?: React.ReactNode;
    dismissKeyboardText: string;
}

interface Props extends OwnProps, ViewProps {}

const AdjustableContainer: React.FunctionComponent<Props> = (props: Props) => {
    const { children, dismissKeyboardText } = props;

    const styles: Styles = useStyles(injectTheme);

    const keyboardHeight = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardWillShowListener = Keyboard.addListener(
                'keyboardWillShow',
                (event: KeyboardEvent): void => {
                    Animated.timing(keyboardHeight, {
                        duration: 250,
                        toValue: event.endCoordinates.height,
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
    }, [keyboardHeight]);

    const handleDismissKeyboardPress = React.useCallback(() => {
        Keyboard.dismiss();
    }, []);

    if (Platform.OS === 'ios') {
        return (
            <View style={styles.container}>
                {children}
                <Animated.View style={[styles.keyboardContainer, { height: keyboardHeight }]}>
                    <Padding>
                        <Link onPress={handleDismissKeyboardPress}>{dismissKeyboardText}</Link>
                    </Padding>
                </Animated.View>
            </View>
        );
    }

    return <View style={styles.container}>{children}</View>;
};

export default AdjustableContainer;
