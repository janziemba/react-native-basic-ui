import * as React from 'react';
import { Image, ImageProps, View, ViewStyle } from 'react-native';

import { Label, Padding, Rating, RowContainer, Scalable, Shadow, Spacer, Text } from '@ui';
import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';

export interface Props {
    imageDefaultSource?: ImageProps['defaultSource'];
    imageSource: ImageProps['source'];
    isFirst?: boolean;
    isLast?: boolean;
    labels?: string[];
    onPress: () => void;
    rating?: number;
    ribbon?: string;
    subtitle: string;
    title: string;
}

const ExtendedCard: React.FunctionComponent<Props> = (props: Props) => {
    const {
        imageDefaultSource,
        imageSource,
        isFirst = false,
        isLast = false,
        labels,
        onPress,
        rating,
        ribbon,
        subtitle,
        title,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const mergedContainerStyles = React.useMemo((): ViewStyle[] => {
        const result = [styles.container];

        if (isFirst) {
            result.push(styles.containerFirst);
        }

        if (isLast) {
            result.push(styles.containerLast);
        }

        return result;
    }, [isFirst, isLast, styles]);

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
            <View style={mergedContainerStyles}>
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
