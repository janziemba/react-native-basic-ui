import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { ScrollView } from 'react-native';
import { Padding, Spacer, Text } from 'react-native-basic-ui';

const stories = storiesOf('Text', module);

stories.addDecorator((getStory) => (
    <ScrollView>
        {/* @ts-ignore */}
        <Padding>{getStory()}</Padding>
    </ScrollView>
));

stories.add('Examples', () => (
    <>
        <Text color="black">Black</Text>
        <Spacer />
        <Text color="dark">Dark</Text>
        <Spacer />
        <Text color="danger">Danger</Text>
        <Spacer />
        <Text color="disabled">Disabled</Text>
        <Spacer />
        <Text color="info">Info</Text>
        <Spacer />
        <Text color="light">Light</Text>
        <Spacer />
        <Text color="muted">Muted</Text>
        <Spacer />
        <Text color="primary">Primary</Text>
        <Spacer />
        <Text color="success">Success</Text>
        <Spacer />
        <Text color="warning">Warning</Text>
        <Spacer />
        <Text color="white">White</Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Text size="small">Small</Text>
        <Spacer />
        <Text size="medium">Medium</Text>
        <Spacer />
        <Text size="large">Large</Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Text style="normal">Normal</Text>
        <Spacer />
        <Text style="italic">Italic</Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Text weight="medium">Medium</Text>
        <Spacer />
        <Text weight="bold">Bold</Text>
    </>
));
