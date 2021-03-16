import * as React from 'react';
import {
    NativeSyntheticEvent,
    Platform,
    TextInput as RNTextInput,
    TextInputFocusEventData,
    TextInputProps as RNTextInputProps,
    View,
    ViewStyle,
} from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import Scalable from '../Scalable';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * If `true`, an error style is applied. The default value is `false`.
     */
    hasError?: boolean;
    /**
     * Icon props.
     */
    iconProps?: Partial<IconProps>;
    /**
     * If `true`, the text is not editable and a disabled style is applied. The default value is `false`.
     */
    isDisabled?: boolean;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as
     * an argument to the callback handler.
     */
    onChange?: (text: string) => void;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    /**
     * The string that will be rendered before text input has been entered.
     */
    placeholder?: string;
    /**
     * React Native's TextInput props.
     */
    rnTextInputProps?: Partial<RNTextInputProps>;
    /**
     * A value of the input.
     */
    value?: string;
}

const PasswordInput: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<RNTextInput>
> = React.forwardRef<RNTextInput, Props>((props: Props, ref?: React.Ref<RNTextInput>) => {
    const {
        hasError = false,
        iconProps,
        isDisabled = false,
        onBlur,
        onChange,
        onFocus,
        placeholder,
        rnTextInputProps,
        value,
    } = props;

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

        if (isDisabled) {
            result.push(styles.textInputDisabled);
        }

        if (hasError) {
            result.push(styles.textInputWithError);
        }

        return result;
    }, [hasError, isDisabled, isFocused, styles]);

    const handleIconPress = React.useCallback((): void => {
        setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    return (
        <View style={styles.container}>
            <RNTextInput
                editable={!isDisabled && isEditable}
                onBlur={handleBlur}
                onChangeText={onChange}
                onFocus={handleFocus}
                placeholder={placeholder}
                placeholderTextColor={colors.disabled}
                ref={ref}
                secureTextEntry={!isPasswordVisible}
                style={mergedTextInputStyles}
                value={value}
                {...rnTextInputProps}
            />
            <View style={styles.iconContainer}>
                <Scalable onPress={handleIconPress}>
                    <Icon
                        color={colors.success}
                        iconSet="MaterialCommunityIcons"
                        name={isPasswordVisible ? 'eye-off' : 'eye'}
                        {...iconProps}
                    />
                </Scalable>
            </View>
        </View>
    );
});

export default PasswordInput;
