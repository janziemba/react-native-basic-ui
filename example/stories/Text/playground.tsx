import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Padding, Text } from 'react-native-basic-ui';

const stories = storiesOf('Text', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <Text
        align={select('align', ['center', 'justify', 'left', 'right'], 'left')}
        color={select(
            'color',
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
            'dark',
        )}
        onPress={() => {}}
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        style={select('style', ['normal', 'italic'], 'normal')}
        weight={select('weight', ['medium', 'bold'], 'medium')}
    >
        {text('children', 'React Native Basic UI')}
    </Text>
));
