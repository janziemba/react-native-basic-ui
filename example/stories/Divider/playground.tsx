import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Divider, Padding } from 'react-native-basic-ui';

const stories = storiesOf('Divider', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => <Divider />);
