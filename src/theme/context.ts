import * as React from 'react';

import defaultTheme, { Theme } from './defaultTheme';

const ThemeContext = React.createContext<Theme>(defaultTheme);

export default ThemeContext;
