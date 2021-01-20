import * as React from 'react';
import { Navigation } from 'react-native-navigation';

import { ScreenName } from '@screens';
import Link, { Props as LinkProps } from '../Link';

interface OwnProps {
    componentId: string;
    screen: ScreenName;
    title?: string;
}

interface Props extends OwnProps, Partial<LinkProps> {}

const NavigationLink: React.FunctionComponent<Props> = (props: Props) => {
    const { children, componentId, screen, title } = props;

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

    return (
        <Link {...props} onPress={handlePress}>
            {children}
        </Link>
    );
};

export default NavigationLink;
