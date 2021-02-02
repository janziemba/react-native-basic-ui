import * as React from 'react';

import ThemeContext from './context';
import { Theme } from './defaultTheme';

export type InjectTheme = (theme: Theme) => any;

const useStyles = (injectTheme: InjectTheme) => {
    const theme = React.useContext(ThemeContext);

    return React.useMemo(() => injectTheme(theme), [injectTheme, theme]);
};

export default useStyles;
