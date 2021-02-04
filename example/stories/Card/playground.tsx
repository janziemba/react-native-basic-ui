import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Card, Padding } from 'react-native-basic-ui';

const stories = storiesOf('Card', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <Card
        onPress={() => {}}
        ribbon={text('ribbon', 'React Native Basic UI')}
        rnImageProps={{
            defaultSource: { uri: 'https://via.placeholder.com/640x480' },
            source: { uri: 'https://placeimg.com/640/480/any' },
        }}
        title={text('title', 'React Native Basic UI')}
    />
));
