import * as React from 'react';

import { useStyles } from '../../theme';
import Icon, { Props as IconProps } from '../Icon';
import RowContainer from '../RowContainer';
import injectTheme, { Styles } from './styles';

export interface Props {
    /**
     * Icon props of the empty icons.
     */
    emptyIconProps?: Partial<IconProps>;
    /**
     * Icon props of the full icons.
     */
    fullIconProps?: Partial<IconProps>;
    /**
     * Icon props of the half icon.
     */
    halfIconProps?: Partial<IconProps>;
    /**
     * Icon props of all icons.
     */
    iconProps?: Partial<IconProps>;
    /**
     * A value of the rating between 0 and 5. The default value is `5`.
     */
    value: number;
}

const Rating: React.FunctionComponent<Props> = (props: Props) => {
    const { emptyIconProps, fullIconProps, halfIconProps, iconProps, value = 5 } = props;

    const styles: Styles = useStyles(injectTheme);

    const renderEmptyIcons = (): React.ReactNode[] | null => {
        const nearestHalf = Math.round(value * 2) / 2;
        const activeCount =
            nearestHalf % 1 === 0 && nearestHalf > value ? Math.ceil(value) : Math.floor(value);
        const halfShouldShow = nearestHalf % 1 > 0;
        const count = 5 - activeCount - (halfShouldShow ? 1 : 0);
        const icons = [];

        for (let i = 0; i < count; i += 1) {
            icons.push(
                <Icon
                    key={`emptyIcon_${i}`}
                    color={styles.emptyIcon.color}
                    name="star"
                    {...iconProps}
                    {...emptyIconProps}
                />,
            );
        }

        return icons;
    };

    const renderFullIcons = (): React.ReactNode[] | null => {
        const nearestHalf = Math.round(value * 2) / 2;
        const count =
            nearestHalf % 1 === 0 && nearestHalf > value ? Math.ceil(value) : Math.floor(value);
        const icons = [];

        for (let i = 0; i < count; i += 1) {
            icons.push(
                <Icon
                    key={`fullIcon_${i}`}
                    color={styles.icon.color}
                    name="star"
                    {...iconProps}
                    {...fullIconProps}
                />,
            );
        }

        return icons;
    };

    const renderHalfIcon = (): React.ReactNode => {
        const nearestHalf = Math.round(value * 2) / 2;
        const shouldShow = nearestHalf % 1 > 0;

        if (!shouldShow) {
            return null;
        }

        return (
            <Icon color={styles.icon.color} name="star-half" {...iconProps} {...halfIconProps} />
        );
    };

    return (
        <RowContainer>
            {renderFullIcons()}
            {renderHalfIcon()}
            {renderEmptyIcons()}
        </RowContainer>
    );
};

export default Rating;
