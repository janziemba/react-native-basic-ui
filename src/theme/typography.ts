import { TextStyle } from 'react-native';

export interface Typography {
    alignment: {
        caption: TextStyle['textAlign'];
        heading: TextStyle['textAlign'];
        subheading: TextStyle['textAlign'];
        text: TextStyle['textAlign'];
    };
    fontFamilies: {
        bold: string;
        medium: string;
    };
    fontSizes: {
        tiny: number;
        small: number;
        medium: number;
        large: number;
        huge: number;
    };
    lineHeights: {
        tiny: number;
        small: number;
        medium: number;
        large: number;
        huge: number;
    };
}

const typography: Typography = {
    alignment: {
        caption: 'left',
        heading: 'center',
        subheading: 'center',
        text: 'left',
    },
    fontFamilies: {
        bold: 'Palanquin-Bold',
        medium: 'Palanquin-Medium',
    },
    fontSizes: {
        tiny: 10,
        small: 12,
        medium: 14,
        large: 16,
        huge: 18,
    },
    lineHeights: {
        tiny: 18,
        small: 20,
        medium: 22,
        large: 24,
        huge: 26,
    },
};

export default typography;
