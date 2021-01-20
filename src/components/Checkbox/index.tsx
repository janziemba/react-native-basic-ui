import * as React from 'react';
import { Pressable, View } from 'react-native';

import { Icon, RowContainer } from '@ui';
import { useStyles, useTheme } from '@ui/theme';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode | string;
    isChecked?: boolean;
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
