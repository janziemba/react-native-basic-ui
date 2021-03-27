/* eslint-disable sort-keys, typescript-sort-keys/interface */

import { Platform } from 'react-native';

type Alignment = 'center' | 'justify' | 'left' | 'right';

export interface Typography {
    alignment: {
        caption: Alignment;
        heading: Alignment;
        subheading: Alignment;
        text: Alignment;
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
        bold: Platform.select({
            android: 'Roboto',
            default: 'Roboto',
            ios: 'System',
        }),
        medium: Platform.select({
            android: 'Roboto',
            default: 'Roboto',
            ios: 'System',
        }),
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
