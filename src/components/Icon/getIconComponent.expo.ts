import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
    // @ts-ignore
} from '@expo/vector-icons';

import { IconSet } from './index';

const getIconComponent = (iconSet?: IconSet) => {
    switch (iconSet) {
        case 'AntDesign':
            return AntDesign;
        case 'Entypo':
            return Entypo;
        case 'EvilIcons':
            return EvilIcons;
        case 'Feather':
            return Feather;
        case 'FontAwesome':
            return FontAwesome;
        case 'Fontisto':
            return Fontisto;
        case 'Foundation':
            return Foundation;
        case 'Ionicons':
            return Ionicons;
        case 'MaterialCommunityIcons':
            return MaterialCommunityIcons;
        case 'MaterialIcons':
            return MaterialIcons;
        case 'Octicons':
            return Octicons;
        case 'SimpleLineIcons':
            return SimpleLineIcons;
        case 'Zocial':
            return Zocial;
        default:
            return MaterialIcons;
    }
};

export default getIconComponent;
