import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Checkbox, Padding, Text } from 'react-native-basic-ui';

const stories = storiesOf('Checkbox', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <Checkbox isChecked={boolean('isChecked', false)} onChange={() => {}}>
        <Text>React Native Basic UI</Text>
    </Checkbox>
));
