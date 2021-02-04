import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Button, Padding } from 'react-native-basic-ui';

const stories = storiesOf('Button', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <Button
        color={select(
            'color',
            [
                'black',
                'danger',
                'dark',
                'disabled',
                'facebook',
                'google',
                'info',
                'light',
                'primary',
                'success',
                'twitter',
                'warning',
                'white',
            ],
            'primary',
        )}
        iconProps={{
            iconSet: select(
                'iconSet',
                [
                    'AntDesign',
                    'Entypo',
                    'EvilIcons',
                    'Feather',
                    'FontAwesome',
                    'Fontisto',
                    'Foundation',
                    'Ionicons',
                    'MaterialCommunityIcons',
                    'MaterialIcons',
                    'Octicons',
                    'SimpleLineIcons',
                    'Zocial',
                ],
                'MaterialCommunityIcons',
            ),
            name: text('icon name', 'check'),
        }}
        isDisabled={boolean('isDisabled', false)}
        isLoading={boolean('isLoading', false)}
        linearGradient={select(
            'linearGradient',
            [undefined, 'danger', 'info', 'primary', 'success', 'warning'],
            undefined,
        )}
        onPress={() => {}}
        text={text('text', 'React Native Basic UI')}
        textProps={{
            color: select(
                'text color',
                [
                    'black',
                    'dark',
                    'danger',
                    'disabled',
                    'info',
                    'light',
                    'muted',
                    'primary',
                    'success',
                    'warning',
                    'white',
                ],
                'white',
            ),
        }}
    />
));
