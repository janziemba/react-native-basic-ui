import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Padding, Rating } from 'react-native-basic-ui';

const stories = storiesOf('Rating', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => <Rating value={number('value', 3)} />);
