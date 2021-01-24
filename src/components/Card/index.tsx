import * as React from 'react';
import { Image, ImageProps, View } from 'react-native';

import { useStyles, useTheme } from '../../theme';
import LinearGradient from '../LinearGradient';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Shadow from '../Shadow';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

interface OwnProps {
    /**
     * A static image to display while downloading the final image off the network.
     */
    imageDefaultSource?: ImageProps['defaultSource'];
    /**
     * The image source (either a remote URL or a local file resource).
     *
     * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
     * The native side will then choose the best uri to display based on the measured size of the image container.
     * A cache property can be added to control how networked request interacts with the local cache.
     *
     * The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
     */
    imageSource: ImageProps['source'];
    /**
     * A text in the ribbon.
     */
    ribbon?: string;
    /**
     * A title of the card.
     */
    title: string;
}

export interface Props extends OwnProps, Pick<ScalableProps, 'onPress'> {}

const Card: React.FunctionComponent<Props> = (props: Props) => {
    const { imageDefaultSource, imageSource, onPress, ribbon, title } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

    const renderRibbon = (): React.ReactNode => {
        if (!ribbon) {
            return null;
        }

        return (
            <View style={styles.ribbonContainer}>
                <Text align="center" color="white" size="small" weight="bold">
                    {ribbon}
                </Text>
            </View>
        );
    };

    return (
        <Scalable onPress={onPress}>
            <View style={styles.container}>
                <Shadow>
                    <View style={styles.imageContainer}>
                        <Image
                            defaultSource={imageDefaultSource}
                            resizeMode="cover"
                            source={imageSource}
                            style={styles.image}
                        />
                        {renderRibbon()}
                    </View>
                    <LinearGradient colors={linearGradients.success} style={styles.linearGradient}>
                        <Text color="white" size="large" weight="bold">
                            {title}
                        </Text>
                    </LinearGradient>
                </Shadow>
            </View>
        </Scalable>
    );
};

export default Card;
