import * as React from 'react';
import {
    GestureResponderEvent,
    Text as RNText,
    TextProps as RNTextProps,
    TextStyle,
} from 'react-native';

import { useStyles, useTheme } from '../../theme';
import { capitalize } from '../../utils';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * An alignment of the text. The default value is `left`.
     */
    align?: 'center' | 'justify' | 'left' | 'right';
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
    /**
     * A color of the text. The default value is `dark`.
     */
    color?:
        | 'black'
        | 'dark'
        | 'danger'
        | 'disabled'
        | 'info'
        | 'light'
        | 'muted'
        | 'primary'
        | 'success'
        | 'warning'
        | 'white';
    /**
     * Called when a single tap gesture is detected.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * React Native's Text props.
     */
    rnTextProps?: Partial<RNTextProps>;
    /**
     * A size of the text. The default value is `medium`.
     */
    size?: 'huge' | 'large' | 'medium' | 'small' | 'tiny';
    /**
     * A style (decoration) of the text. The default value is `normal`.
     */
    style?: 'normal' | 'italic';
    /**
     * A weight of the text. The default value is `medium`.
     */
    weight?: 'bold' | 'medium';
}

const Text: React.FunctionComponent<Props> = (props: Props) => {
    const { typography } = useTheme();

    const {
        align = typography.alignment.text || 'left',
        children,
        color = 'dark',
        onPress,
        rnTextProps,
        size = 'medium',
        style = 'normal',
        weight = 'medium',
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo(
        (): TextStyle[] => [
            styles.base,
            styles[`align${capitalize(align)}` as keyof Styles],
            styles[`color${capitalize(color)}` as keyof Styles],
            styles[`size${capitalize(size)}` as keyof Styles],
            styles[`style${capitalize(style)}` as keyof Styles],
            styles[`weight${capitalize(weight)}` as keyof Styles],
        ],
        [align, color, size, style, styles, weight],
    );

    return (
        <RNText onPress={onPress} style={mergedStyles} suppressHighlighting {...rnTextProps}>
            {children}
        </RNText>
    );
};

export default Text;
