import * as React from 'react';

import { useStyles } from '../../theme';
import Icon from '../Icon';
import RowContainer from '../RowContainer';
import injectTheme, { Styles } from './styles';

interface Props {
    children?: React.ReactNode;
    size: number;
    value?: number;
}

const Rating: React.FunctionComponent<Props> = (props: Props) => {
    const { size, value } = props;

    const styles: Styles = useStyles(injectTheme);

    const renderEmptyIcons = (): React.ReactNode[] | null => {
        if (!value) {
            return null;
        }

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
                    name="star"
                    size={size}
                    color={styles.emptyIcon.color}
                />,
            );
        }

        return icons;
    };

    const renderFullIcons = (): React.ReactNode[] | null => {
        if (!value) {
            return null;
        }

        const nearestHalf = Math.round(value * 2) / 2;
        const count =
            nearestHalf % 1 === 0 && nearestHalf > value ? Math.ceil(value) : Math.floor(value);
        const icons = [];

        for (let i = 0; i < count; i += 1) {
            icons.push(
                <Icon key={`fullIcon_${i}`} color={styles.icon.color} name="star" size={size} />,
            );
        }

        return icons;
    };

    const renderHalfIcon = (): React.ReactNode => {
        if (!value) {
            return null;
        }

        const nearestHalf = Math.round(value * 2) / 2;
        const shouldShow = nearestHalf % 1 > 0;

        if (!shouldShow) {
            return null;
        }

        return <Icon color={styles.icon.color} name="star-half" size={size} />;
    };

    if (value === undefined) {
        return null;
    }

    return (
        <RowContainer>
            {renderFullIcons()}
            {renderHalfIcon()}
            {renderEmptyIcons()}
        </RowContainer>
    );
};

export default Rating;
