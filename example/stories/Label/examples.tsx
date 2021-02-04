import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { ScrollView } from 'react-native';
import { Label, Padding, Spacer, Text } from 'react-native-basic-ui';

const stories = storiesOf('Label', module);

stories.addDecorator((getStory) => (
    <ScrollView>
        {/* @ts-ignore */}
        <Padding>{getStory()}</Padding>
    </ScrollView>
));

stories.add('Examples', () => (
    <>
        <Label color="black">
            <Text color="white">Black</Text>
        </Label>
        <Spacer />
        <Label color="dark">
            <Text color="white">Dark</Text>
        </Label>
        <Spacer />
        <Label color="danger">
            <Text color="white">Danger</Text>
        </Label>
        <Spacer />
        <Label color="disabled">
            <Text>Disabled</Text>
        </Label>
        <Spacer />
        <Label color="info">
            <Text color="white">Info</Text>
        </Label>
        <Spacer />
        <Label color="light">
            <Text>Light</Text>
        </Label>
        <Spacer />
        <Label color="muted">
            <Text color="white">Muted</Text>
        </Label>
        <Spacer />
        <Label color="primary">
            <Text color="white">Primary</Text>
        </Label>
        <Spacer />
        <Label color="success">
            <Text color="white">Success</Text>
        </Label>
        <Spacer />
        <Label color="warning">
            <Text color="white">Warning</Text>
        </Label>
        <Spacer />
        <Label color="white">
            <Text>White</Text>
        </Label>
    </>
));
