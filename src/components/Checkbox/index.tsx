import * as React from 'react';
import { Pressable, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon from '../Icon';
import RowContainer from '../RowContainer';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode | string;
    /**
     * A state of the checkbox.
     */
    isChecked?: boolean;
    /**
     * A callback called when the checkbox is pressed.
     */
    onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FunctionComponent<Props> = (props: Props) => {
    const { children, isChecked, onChange } = props;

    const styles: Styles = useStyles(injectTheme);
    const { colors } = useTheme();

    const iconColor = isChecked ? colors.success : colors.muted;
    const iconName = isChecked ? 'checkbox-marked' : 'checkbox-blank';

    const handlePress = React.useCallback(() => {
        onChange(!isChecked);
    }, [isChecked, onChange]);

    return (
        <Pressable onPress={handlePress}>
            <RowContainer align="top">
                <View style={styles.iconContainer}>
                    <Icon color={iconColor} iconSet="MaterialCommunityIcons" name={iconName} />
                </View>
                <View style={styles.contentContainer}>{children}</View>
            </RowContainer>
        </Pressable>
    );
};

export default Checkbox;
