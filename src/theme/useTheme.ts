import * as React from 'react';

import ThemeContext from './context';

const useTheme = () => {
    const theme = React.useContext(ThemeContext);

    return theme;
};

export default useTheme;
