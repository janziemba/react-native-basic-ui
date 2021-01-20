import LottieView from 'lottie-react-native';
import * as React from 'react';
import { ViewStyle } from 'react-native';

interface AnimationObject {
    assets: any[];
    ddd: number;
    fr: number;
    h: number;
    ip: number;
    layers: any[];
    nm: string;
    op: number;
    v: string;
    w: number;
}

interface Props {
    autoPlay?: boolean;
    height: number;
    loop?: boolean;
    resizeMode?: 'cover' | 'contain' | 'center';
    source: string | AnimationObject | { uri: string };
    width: number;
}

const Animation: React.FunctionComponent<Props> = (props: Props) => {
    const { autoPlay = true, height, loop = true, resizeMode = 'cover', source, width } = props;

    const styles = React.useMemo(
        (): ViewStyle => ({
            height,
            width,
        }),
        [height, width],
    );

    return (
        <LottieView
            autoPlay={autoPlay}
            loop={loop}
            resizeMode={resizeMode}
            source={source}
            style={styles}
        />
    );
};

export default Animation;
