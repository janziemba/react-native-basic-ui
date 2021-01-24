import * as React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { useStyles } from '../../theme';
import injectTheme, { Styles } from './styles';

interface OwnProps {
    /**
     * An alignment of the text. The default value is left.
     */
    align?: 'center' | 'justify' | 'left' | 'right';
    /**
     * An actual text or an Icon and a text.
     */
    children?: React.ReactNode | string;
    /**
     * A color of the text. The default value is dark.
     */
    color?:
        | 'black'
        | 'dark'
        | 'danger'
        | 'disabled'
        | 'info'
        | 'light'
        | 'primary'
        | 'success'
        | 'warning'
        | 'white';
    /**
     * A size of the text. The default value is medium.
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * A style (decoration) of the text. The default value is normal.
     */
    style?: 'normal' | 'italic';
    /**
     * A weight of the text. The default value is medium.
     */
    weight?: 'bold' | 'medium';
}

export interface Props extends OwnProps, Omit<TextProps, 'style'> {}

const Text: React.FunctionComponent<Props> = (props: Props) => {
    const {
        align = 'left',
        children,
        color = 'dark',
        size = 'medium',
        style = 'normal',
        weight = 'medium',
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedStyles = React.useMemo((): TextStyle[] => {
        const result = [styles.base];

        switch (align) {
            case 'center':
                result.push(styles.centered);
                break;
            case 'justify':
                result.push(styles.justified);
                break;
            case 'right':
                result.push(styles.right);
                break;
        }

        switch (color) {
            case 'black':
                result.push(styles.black);
                break;
            case 'danger':
                result.push(styles.danger);
                break;
            case 'disabled':
                result.push(styles.disabled);
                break;
            case 'info':
                result.push(styles.info);
                break;
            case 'light':
                result.push(styles.light);
                break;
            case 'primary':
                result.push(styles.primary);
                break;
            case 'success':
                result.push(styles.success);
                break;
            case 'warning':
                result.push(styles.warning);
                break;
            case 'white':
                result.push(styles.white);
                break;
        }

        switch (size) {
            case 'large':
                result.push(styles.large);
                break;
            case 'small':
                result.push(styles.small);
                break;
        }

        if (style === 'italic') {
            result.push(styles.italic);
        }

        if (weight === 'bold') {
            result.push(styles.bold);
        }

        return result;
    }, [align, color, size, style, styles, weight]);

    return (
        <RNText {...props} style={mergedStyles} suppressHighlighting>
            {children}
        </RNText>
    );
};

export default Text;
