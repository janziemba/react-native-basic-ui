import * as React from 'react';

import ThemeContext, { Theme } from './context';

export type InjectTheme = (theme: Theme) => any;

const useStyles = (injectTheme: InjectTheme) => {
    const theme = React.useContext(ThemeContext);

    const stylesheet = React.useMemo(() => {
        const themedStyles = injectTheme(theme);

        return themedStyles;
    }, [injectTheme, theme]);

    return stylesheet;
};

export default useStyles;
