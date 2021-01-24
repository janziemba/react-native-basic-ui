import * as React from 'react';
import { ColorValue, TextStyle } from 'react-native';

import { useStyles } from '../../theme';
import getIconComponent from './getIconComponent';
import injectTheme, { Styles } from './styles';

export type IconSet =
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';

export interface Props {
    /**
     * A color of the icon. The default value is dark.
     */
    color?: ColorValue;
    /**
     * An icon set which should be used.
     */
    iconSet?: IconSet;
    /**
     * A name of the icon.
     */
    name: string;
    /**
     * A size of the icon. The default value is 24.
     */
    size?: number;
}

const Icon: React.FunctionComponent<Props> = (props: Props) => {
    const { color, iconSet, name, size = 24 } = props;

    const styles: Styles = useStyles(injectTheme);

    const VectorIcon = getIconComponent(iconSet);

    const mergedStyles = React.useMemo((): TextStyle => {
        return {
            ...styles.icon,
            color: color || styles.icon.color,
        };
    }, [color, styles]);

    return <VectorIcon allowFontScaling={false} name={name} size={size} style={mergedStyles} />;
};

export default Icon;
