import * as React from 'react';
import {
    NativeSyntheticEvent,
    Platform,
    TextInput as RNTextInput,
    TextInputFocusEventData,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon from '../Icon';
import Scalable from '../Scalable';
import injectTheme, { Styles } from './styles';

interface Props extends TextInputProps {}

const PasswordInput: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<RNTextInput>
> = React.forwardRef<RNTextInput, Props>((props: Props, ref?: React.Ref<RNTextInput>) => {
    const { allowFontScaling = false, autoCapitalize = 'none', onBlur, onFocus } = props;

    const styles: Styles = useStyles(injectTheme);
    const { colors } = useTheme();

    const [isEditable, setIsEditable] = React.useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    React.useEffect(() => {
        // there is a bug in RN which doesn't let you paste a text
        // https://github.com/facebook/react-native/issues/28366
        // https://github.com/facebook/react-native/issues/20887
        if (Platform.OS === 'android') {
            setIsEditable(false);

            setTimeout(() => {
                setIsEditable(true);
            }, 100);
        }
    }, []);

    const handleFocus = React.useCallback(
        (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(true);

            if (onFocus) {
                onFocus(event);
            }
        },
        [onFocus, setIsFocused],
    );

    const handleBlur = React.useCallback(
        (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsFocused(false);

            if (onBlur) {
                onBlur(event);
            }
        },
        [onBlur, setIsFocused],
    );

    const mergedTextInputStyles = React.useMemo((): ViewStyle[] => {
        let result = [styles.textInput];

        if (isFocused) {
            result.push(styles.textInputFocused);
        }

        return result;
    }, [isFocused, styles]);

    const handleIconPress = React.useCallback((): void => {
        setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    return (
        <View style={styles.container}>
            <RNTextInput
                {...props}
                allowFontScaling={allowFontScaling}
                autoCapitalize={autoCapitalize}
                editable={isEditable}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholderTextColor={colors.disabled}
                ref={ref}
                secureTextEntry={!isPasswordVisible}
                style={mergedTextInputStyles}
            />
            <View style={styles.iconContainer}>
                <Scalable onPress={handleIconPress}>
                    <Icon
                        color={colors.success}
                        iconSet="MaterialCommunityIcons"
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                    />
                </Scalable>
            </View>
        </View>
    );
});

export default PasswordInput;
