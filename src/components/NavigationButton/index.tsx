import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import { ScreenName } from '@screens';
import Button, { Props as ButtonProps } from '../Button';

interface OwnProps {
    componentId: string;
    screen: ScreenName;
    title?: string;
}

interface Props extends OwnProps, Omit<ButtonProps, 'onPress'> {}

const NavigationButton: React.FunctionComponent<Props> = (props: Props) => {
    const { componentId, screen, title } = props;

    const handlePress = React.useCallback((): void => {
        Navigation.push(componentId, {
            component: {
                name: screen,
                options: {
                    topBar: { title: { text: title } },
                },
            },
        });
    }, [componentId, screen, title]);

    return <Button {...props} onPress={handlePress} />;
};

export default NavigationButton;
