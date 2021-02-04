import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { ScrollView } from 'react-native';
import { Button, Padding, Spacer } from 'react-native-basic-ui';

const stories = storiesOf('Button', module);

stories.addDecorator((getStory) => (
    <ScrollView>
        {/* @ts-ignore */}
        <Padding>{getStory()}</Padding>
    </ScrollView>
));

stories.add('Examples', () => (
    <>
        <Button color="black" onPress={() => {}} text="Black color" />
        <Spacer />
        <Button color="danger" onPress={() => {}} text="Danger color" />
        <Spacer />
        <Button color="dark" onPress={() => {}} text="Dark color" />
        <Spacer />
        <Button color="disabled" onPress={() => {}} text="Disabled color" />
        <Spacer />
        <Button color="facebook" onPress={() => {}} text="Facebook color" />
        <Spacer />
        <Button color="google" onPress={() => {}} text="Google color" />
        <Spacer />
        <Button color="info" onPress={() => {}} text="Info color" />
        <Spacer />
        <Button
            color="light"
            onPress={() => {}}
            text="Light color"
            textProps={{ color: 'black' }}
        />
        <Spacer />
        <Button color="primary" onPress={() => {}} text="Primary color" />
        <Spacer />
        <Button color="success" onPress={() => {}} text="Success color" />
        <Spacer />
        <Button color="twitter" onPress={() => {}} text="Twitter color" />
        <Spacer />
        <Button color="warning" onPress={() => {}} text="Warning color" />
        <Spacer />
        <Button
            color="white"
            onPress={() => {}}
            text="White color"
            textProps={{ color: 'black' }}
        />
        <Spacer />
        <Button linearGradient="danger" onPress={() => {}} text="Danger linear gradient" />
        <Spacer />
        <Button linearGradient="info" onPress={() => {}} text="Info linear gradient" />
        <Spacer />
        <Button linearGradient="primary" onPress={() => {}} text="Primary linear gradient" />
        <Spacer />
        <Button linearGradient="success" onPress={() => {}} text="Success linear gradient" />
        <Spacer />
        <Button linearGradient="warning" onPress={() => {}} text="Warning linear gradient" />
    </>
));
