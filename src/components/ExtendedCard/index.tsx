import * as React from 'react';
import { Image, ImageProps, View } from 'react-native';

import { useStyles } from '../../theme';
import Label from '../Label';
import Padding from '../Padding';
import Rating from '../Rating';
import RowContainer from '../RowContainer';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Shadow from '../Shadow';
import Spacer from '../Spacer';
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
     * An array of texts in the labels.
     */
    labels?: string[];
    /**
     * A value of the rating between 0 and 5.
     */
    rating?: number;
    /**
     * A text in the ribbon.
     */
    ribbon?: string;
    /**
     * A subtitle of the card.
     */
    subtitle: string;
    /**
     * A title of the card.
     */
    title: string;
}

export interface Props extends OwnProps, Pick<ScalableProps, 'onPress'> {}

const ExtendedCard: React.FunctionComponent<Props> = (props: Props) => {
    const {
        imageDefaultSource,
        imageSource,
        labels,
        onPress,
        rating,
        ribbon,
        subtitle,
        title,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const renderRating = (): React.ReactNode => {
        if (!rating) {
            return null;
        }

        return (
            <View style={styles.ratingContainer}>
                <Rating size={18} value={rating} />
            </View>
        );
    };

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

    const renderLabels = (): React.ReactNode => {
        if (!labels) {
            return null;
        }

        return (
            <>
                <Spacer size="small" />
                <RowContainer>
                    {labels.map((label) => (
                        <React.Fragment key={label}>
                            <Label color="warning">{label}</Label>
                            <Spacer size="tiny" />
                        </React.Fragment>
                    ))}
                </RowContainer>
            </>
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
                        {renderRating()}
                        {renderRibbon()}
                    </View>
                    <Padding>
                        <Text color="info" size="large" weight="bold">
                            {title}
                        </Text>
                        <Text>{subtitle}</Text>
                        {renderLabels()}
                    </Padding>
                </Shadow>
            </View>
        </Scalable>
    );
};

export default ExtendedCard;
