import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Collapsible, Padding } from 'react-native-basic-ui';

const stories = storiesOf('Collapsible', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <Collapsible
        content={text('content', 'React Native Basic UI')}
        iconProps={{}}
        title={text('content', 'React Native Basic UI')}
    />
));
