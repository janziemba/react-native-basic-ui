import * as React from 'react';
import { GestureResponderEvent, Image, ImageProps as RNImageProps, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import LinearGradient from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Shadow from '../Shadow';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * A text in the ribbon.
     */
    ribbon?: string;
    /**
     * Text props of the ribbon.
     */
    ribbonTextProps?: Partial<TextProps>;
    /**
     * React Native's Image props.
     */
    rnImageProps: RNImageProps;
    /**
     * Scalable props.
     */
    scalableProps?: Partial<ScalableProps>;
    /**
     * A title of the card.
     */
    title: string;
    /**
     * Text props of the title.
     */
    titleTextProps?: Partial<TextProps>;
}

const Card: React.FunctionComponent<Props> = (props: Props) => {
    const {
        onPress,
        ribbon,
        ribbonTextProps,
        rnImageProps,
        scalableProps,
        title,
        titleTextProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const renderRibbon = (): React.ReactNode => {
        if (!ribbon) {
            return null;
        }

        return (
            <View style={styles.ribbonContainer}>
                <Text align="center" color="white" size="small" weight="bold" {...ribbonTextProps}>
                    {ribbon}
                </Text>
            </View>
        );
    };

    return (
        <Scalable onPress={onPress} {...scalableProps}>
            <View style={styles.container}>
                <Shadow>
                    <View style={styles.imageContainer}>
                        <Image resizeMode="cover" style={styles.image} {...rnImageProps} />
                        {renderRibbon()}
                    </View>
                    <LinearGradient colors={linearGradients.success} style={styles.linearGradient}>
                        <Text color="white" size="large" weight="bold" {...titleTextProps}>
                            {title}
                        </Text>
                    </LinearGradient>
                </Shadow>
            </View>
        </Scalable>
    );
};

export default Card;
