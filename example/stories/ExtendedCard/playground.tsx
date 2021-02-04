import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { ExtendedCard, Padding } from 'react-native-basic-ui';

const stories = storiesOf('ExtendedCard', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <ExtendedCard
        onPress={() => {}}
        labels={[text('label1', 'React Native Basic UI'), text('label2', 'React Native Basic UI')]}
        rating={number('value', 3)}
        ribbon={text('ribbon', 'React Native Basic UI')}
        rnImageProps={{
            defaultSource: { uri: 'https://via.placeholder.com/640x480' },
            source: { uri: 'https://placeimg.com/640/480/any' },
        }}
        subtitle={text('subtitle', 'React Native Basic UI')}
        title={text('title', 'React Native Basic UI')}
    />
));
