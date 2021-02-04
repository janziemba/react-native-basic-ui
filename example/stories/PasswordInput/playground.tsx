import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Padding, PasswordInput } from 'react-native-basic-ui';

const stories = storiesOf('PasswordInput', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    <PasswordInput
        hasError={boolean('hasError', false)}
        isDisabled={boolean('isDisabled', false)}
        onBlur={() => {}}
        onChange={() => {}}
        onFocus={() => {}}
        placeholder={text('placeholder', 'React Native Basic UI')}
        value={text('value', 'React Native Basic UI')}
    />
));
