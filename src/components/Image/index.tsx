import * as React from 'react';
import { View } from 'react-native';
import { CachedImage, CachedImageProps } from 'react-native-img-cache';

import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';

export interface Props extends CachedImageProps {}

const Image: React.FunctionComponent<Props> = (props: Props) => {
    const styles: Styles = useStyles(injectTheme);

    return (
        <View style={styles.container}>
            <CachedImage {...props} />
        </View>
    );
};

export default Image;
