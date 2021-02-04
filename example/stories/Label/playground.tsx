import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Label, Padding, RowContainer, Text } from 'react-native-basic-ui';

const stories = storiesOf('Label', module);

// @ts-ignore
stories.addDecorator((getStory) => <Padding>{getStory()}</Padding>);

stories.add('Playground', () => (
    // without RowContainer, the Label would take a full width
    <RowContainer>
        <Label
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
                'success',
            )}
        >
            <Text color="white">{text('children', 'React Native Basic UI')}</Text>
        </Label>
    </RowContainer>
));
