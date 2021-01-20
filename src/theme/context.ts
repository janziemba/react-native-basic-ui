import * as React from 'react';

import colors, { Colors } from './colors';
import linearGradients, { LinearGradients } from './linearGradients';
import radiuses, { Radiuses } from './radiuses';
import spacing, { Spacing } from './spacing';
import typography, { Typography } from './typography';

export interface Theme {
    colors: Colors;
    linearGradients: LinearGradients;
    radiuses: Radiuses;
    spacing: Spacing;
    typography: Typography;
}

export const defaultTheme = {
    colors,
    linearGradients,
    radiuses,
    spacing,
    typography,
};

const context = React.createContext<Theme>(defaultTheme);

export default context;
