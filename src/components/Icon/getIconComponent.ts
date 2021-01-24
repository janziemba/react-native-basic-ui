import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

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
