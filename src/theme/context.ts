import * as React from 'react';

import colors, { Colors } from './colors';
import linearGradients, { LinearGradients } from './linearGradients';
import radiuses, { Radiuses } from './radiuses';
import spacing, { Spacing } from './spacing';
import typography, { Typography } from './typography';

interface AnimationObject {
    assets: any[];
    ddd: number;
    fr: number;
    h: number;
    ip: number;
    layers: any[];
    nm: string;
    op: number;
    v: string;
    w: number;
}

interface Animations {
    loading: string | AnimationObject | { uri: string };
}

export interface Theme {
    animations: Animations;
    colors: Colors;
    linearGradients: LinearGradients;
    radiuses: Radiuses;
    spacing: Spacing;
    typography: Typography;
}

export const defaultTheme = {
    animations: {
        loading: '',
    },
    colors,
    linearGradients,
    radiuses,
    spacing,
    typography,
};

const context = React.createContext<Theme>(defaultTheme);

export default context;
