import * as React from 'react';
import { Image, ImageProps, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Scalable, Shadow, Text } from '@ui';
import { useStyles, useTheme } from '@ui/theme';
import injectTheme, { Styles } from './styles';

export interface Props {
    imageDefaultSource?: ImageProps['defaultSource'];
    imageSource: ImageProps['source'];
    isFirst?: boolean;
    isLast?: boolean;
    onPress: () => void;
    ribbon?: string;
    title: string;
}

const Card: React.FunctionComponent<Props> = (props: Props) => {
    const {
        imageDefaultSource,
        imageSource,
        isFirst = false,
        isLast = false,
        onPress,
        ribbon,
        title,
    } = props;

    const styles: Styles = useStyles(injectTheme);
    const { linearGradients } = useTheme();

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
            <View style={mergedContainerStyles}>
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
