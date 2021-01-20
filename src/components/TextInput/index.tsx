import * as React from 'react';
import {
    NativeSyntheticEvent,
    Platform,
    TextInput as RNTextInput,
    TextInputFocusEventData,
    TextInputProps,
    ViewStyle,
} from 'react-native';

import { useStyles, useTheme } from '@ui/theme';
import injectTheme, { Styles } from './styles';

interface Props extends Omit<TextInputProps, 'editable'> {
    /**
     * If true, text is not editable and a disabled style is applied. The default value is false.
     */
    isDisabled?: boolean;
}

const TextInput: React.ForwardRefExoticComponent<
    Props & React.RefAttributes<RNTextInput>
> = React.forwardRef<RNTextInput, Props>((props: Props, ref?: React.Ref<RNTextInput>) => {
    const {
        allowFontScaling = false,
        autoCapitalize = 'none',
        isDisabled = false,
        onBlur,
        onFocus,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { colors } = useTheme();

    const [isEditable, setIsEditable] = React.useState(true);
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

        return result;
    }, [isDisabled, isFocused, styles]);

    return (
        <RNTextInput
            {...props}
            allowFontScaling={allowFontScaling}
            autoCapitalize={autoCapitalize}
            editable={!isDisabled && isEditable}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholderTextColor={colors.disabled}
            ref={ref}
            style={mergedTextInputStyles}
        />
    );
});

export default TextInput;
