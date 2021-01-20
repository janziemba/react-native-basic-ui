import { useDimensions } from '@react-native-community/hooks';
import * as React from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import type { CarouselProps } from 'react-native-snap-carousel/lib/typescript/carousel/types';

import { FlexContainer, Link, Spacer, RowContainer } from '@ui';
import { useStyles } from '@ui/theme';
import injectTheme, { Styles } from './styles';

interface OwnProps {
    children: React.ReactNodeArray;
    nextButtonText: string;
    onSnapToItem?: (index: number) => void;
    previousButtonText: string;
    scrollEnabled?: boolean;
}

type Props = OwnProps & Partial<CarouselProps<number>>;

const Swiper: React.FunctionComponent<Props> = (props: Props) => {
    const {
        children,
        nextButtonText,
        onSnapToItem,
        previousButtonText,
        scrollEnabled = true,
    } = props;

    const styles: Styles = useStyles(injectTheme);

    const slides = [...Array(children.length).keys()]; // [0, 1, 2]
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const carouselRef = React.useRef<Carousel<number>>(null);

    const {
        window: { width },
    } = useDimensions();

    const handleSnapToItem = React.useCallback(
        (index: number): void => {
            setCurrentIndex(index);

            if (onSnapToItem) {
                onSnapToItem(index);
            }
        },
        [onSnapToItem, setCurrentIndex],
    );

    const handlePreviousButtonPress = (): void => {
        if (carouselRef.current) {
            carouselRef.current.snapToPrev();
        }
    };

    const handleNextButtonPress = (): void => {
        if (carouselRef.current) {
            carouselRef.current.snapToNext();
        }
    };

    const renderPreviousButton = (): React.ReactNode => {
        if (currentIndex === 0) {
            return null;
        }

        return (
            <Link onPress={handlePreviousButtonPress} size="large" weight="bold">
                {previousButtonText}
            </Link>
        );
    };

    const renderNextButton = (): React.ReactNode => {
        if (currentIndex === slides[slides.length - 1]) {
            return null;
        }

        return (
            <Link
                disabled={!scrollEnabled}
                onPress={handleNextButtonPress}
                size="large"
                weight="bold"
            >
                {nextButtonText}
            </Link>
        );
    };

    const renderFooter = (): React.ReactElement => {
        return (
            <View style={styles.footer}>
                <RowContainer>
                    <FlexContainer>{renderPreviousButton()}</FlexContainer>
                    <Spacer />
                    <View style={styles.nextButtonContainer}>{renderNextButton()}</View>
                </RowContainer>
                <Pagination
                    activeDotIndex={currentIndex}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.dot}
                    dotsLength={slides.length}
                    inactiveDotStyle={styles.inactiveDot}
                />
            </View>
        );
    };

    const renderItem = (baseData: { index: number }): React.ReactNode => {
        if (!children) {
            return null;
        }

        return (
            <>
                {children[baseData.index]}
                {renderFooter()}
            </>
        );
    };

    return (
        <Carousel<number>
            {...props}
            ref={carouselRef}
            data={slides}
            // @ts-ignore
            disableScrollViewPanResponder
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            itemWidth={width}
            onSnapToItem={handleSnapToItem}
            renderItem={renderItem}
            scrollEnabled={scrollEnabled}
            sliderWidth={width}
        />
    );
};

export default Swiper;
