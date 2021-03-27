import * as React from 'react';
import { GestureResponderEvent, Image, ImageProps as RNImageProps, View } from 'react-native';

import { useStyles } from '../../theme';
import Label from '../Label';
import Padding from '../Padding';
import Rating, { Props as RatingProps } from '../Rating';
import RowContainer from '../RowContainer';
import Scalable, { Props as ScalableProps } from '../Scalable';
import Shadow from '../Shadow';
import Spacer from '../Spacer';
import Text, { Props as TextProps } from '../Text';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * Text props of the label.
     */
    labelTextProps?: Partial<TextProps>;
    /**
     * An array of texts in the labels.
     */
    labels?: string[];
    /**
     * Called when a single tap gesture is detected.
     */
    onPress: (event: GestureResponderEvent) => void;
    /**
     * A value of the rating between 0 and 5.
     */
    rating?: number;
    /**
     * Rating props.
     */
    ratingProps?: Partial<RatingProps>;
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
     * A subtitle of the card.
     */
    subtitle: string;
    /**
     * Text props of the subtitle.
     */
    subtitleTextProps?: Partial<TextProps>;
    /**
     * A title of the card.
     */
    title: string;
    /**
     * Text props of the title.
     */
    titleTextProps?: Partial<TextProps>;
}

const ExtendedCard: React.FunctionComponent<Props> = (props: Props) => {
    const {
        labels,
        labelTextProps,
        onPress,
        rating,
        ratingProps,
        ribbon,
        ribbonTextProps,
        rnImageProps,
        scalableProps,
        subtitle,
        subtitleTextProps,
        title,
        titleTextProps,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const ratingIconProps = React.useMemo(() => ({ size: 18 }), []);

    const renderRating = (): React.ReactNode => {
        if (!rating) {
            return null;
        }

        return (
            <View style={styles.ratingContainer}>
                <Rating iconProps={ratingIconProps} value={rating} {...ratingProps} />
            </View>
        );
    };

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

    const renderLabels = (): React.ReactNode => {
        if (!labels) {
            return null;
        }

        return (
            <>
                <Spacer size="small" />
                <RowContainer>
                    {labels.map((label: string) => (
                        <React.Fragment key={label}>
                            <Label color="warning" {...labelTextProps}>
                                {label}
                            </Label>
                            <Spacer size="tiny" />
                        </React.Fragment>
                    ))}
                </RowContainer>
            </>
        );
    };

    return (
        <Scalable onPress={onPress} {...scalableProps}>
            <View style={styles.container}>
                <Shadow>
                    <View style={styles.imageContainer}>
                        <Image resizeMode="cover" style={styles.image} {...rnImageProps} />
                        {renderRating()}
                        {renderRibbon()}
                    </View>
                    <Padding>
                        <Text color="info" size="large" weight="bold" {...titleTextProps}>
                            {title}
                        </Text>
                        <Text {...subtitleTextProps}>{subtitle}</Text>
                        {renderLabels()}
                    </Padding>
                </Shadow>
            </View>
        </Scalable>
    );
};

export default ExtendedCard;
