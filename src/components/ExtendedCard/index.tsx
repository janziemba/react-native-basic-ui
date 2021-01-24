import * as React from 'react';
import { Image, ImageProps, View } from 'react-native';

import { useStyles } from '../../theme';
import Label from '../Label';
import Padding from '../Padding';
import Rating from '../Rating';
import RowContainer from '../RowContainer';
import Scalable from '../Scalable';
import Shadow from '../Shadow';
import Spacer from '../Spacer';
import Text from '../Text';
import injectTheme, { Styles } from './styles';

export interface Props {
    imageDefaultSource?: ImageProps['defaultSource'];
    imageSource: ImageProps['source'];
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
