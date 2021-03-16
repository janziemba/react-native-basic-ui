import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import RowContainer from '../RowContainer';
import injectTheme, { Styles } from './styles';

export interface Props {
    children?: React.ReactNode | string;
    /**
     * Icon props.
     */
    iconProps?: Partial<IconProps>;
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
    const { children, iconProps, isChecked, onChange } = props;

    const styles: Styles = useStyles(injectTheme);
    const { colors } = useTheme();

    const handlePress = React.useCallback(() => {
        onChange(!isChecked);
    }, [isChecked, onChange]);

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <RowContainer align="top">
                <View style={styles.iconContainer}>
                    <Icon
                        color={isChecked ? colors.success : colors.muted}
                        iconSet="MaterialCommunityIcons"
                        name={isChecked ? 'checkbox-marked' : 'checkbox-blank'}
                        {...iconProps}
                    />
                </View>
                <View style={styles.contentContainer}>{children}</View>
            </RowContainer>
        </TouchableWithoutFeedback>
    );
};

export default Checkbox;
