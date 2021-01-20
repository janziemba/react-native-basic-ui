import * as React from 'react';
import { View } from 'react-native';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

import { useStyles } from '@ui/theme';
import Icon from '../Icon';
import injectTheme, { Styles } from './styles';

interface Props extends PickerSelectProps {}

const Select: React.FunctionComponent<Props> = (props: Props) => {
    const { onClose, onOpen, value } = props;

    const styles: Styles = useStyles(injectTheme);

    const [isFocused, setIsFocused] = React.useState(false);

    const mergedSelectStyles = React.useMemo((): Partial<Styles> => {
        let result = {
            iconContainer: styles.iconContainer,
            inputAndroid: styles.inputAndroid,
            inputIOS: styles.inputIOS,
        };

        if (isFocused) {
            result.inputAndroid = {
                ...styles.inputAndroid,
                ...styles.inputAndroidFocused,
            };
            result.inputIOS = {
                ...styles.inputIOS,
                ...styles.inputIOSFocused,
            };
        }

        return result;
    }, [isFocused, styles]);

    const handleOpen = React.useCallback(() => {
        setIsFocused(true);

        if (onOpen) {
            onOpen();
        }
    }, [onOpen]);

    const handleClose = React.useCallback(() => {
        setIsFocused(false);

        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const renderIcon = (): React.ReactNode => (
        <View style={styles.iconContainer}>
            <Icon color={styles.icon.color} iconSet="MaterialCommunityIcons" name="chevron-down" />
        </View>
    );

    return (
        <RNPickerSelect
            {...props}
            Icon={renderIcon}
            onClose={handleClose}
            onDonePress={handleClose}
            onOpen={handleOpen}
            placeholder={{}}
            style={mergedSelectStyles}
            textInputProps={{
                allowFontScaling: false,
            }}
            useNativeAndroidPickerStyle={false}
            value={value}
        />
    );
};

export default Select;
