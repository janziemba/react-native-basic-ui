import deepmerge from 'deepmerge';
import * as React from 'react';

import ThemeContext from './context'
import defaultTheme, { Theme } from './defaultTheme';

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

interface Props {
    /**
     * A custom theme object consisting of colors, linearGradients, radiuses, spacing and typography.
     */
    theme: DeepPartial<Theme>;
}

const ThemeProvider = (props: Props) => {
    const { theme: customTheme } = props;

    const theme = deepmerge(defaultTheme, customTheme);

    return <ThemeContext.Provider value={theme as Theme} />;
};

export default ThemeProvider;
