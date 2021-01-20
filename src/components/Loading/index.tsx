import * as React from 'react';

import { useTheme } from '@ui/theme';
import Animation from '../Animation';
import CenterContainer from '../CenterContainer';

const Loading: React.FunctionComponent = () => {
    const { animations } = useTheme();

    if (!animations.loading) {
        return null;
    }

    return (
        <CenterContainer>
            <Animation height={120} source={animations.loading} width={160} />
        </CenterContainer>
    );
};

export default Loading;
