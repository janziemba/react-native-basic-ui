import * as React from 'react';

import ThemeContext from './context';

const useTheme = () => React.useContext(ThemeContext);

export default useTheme;
