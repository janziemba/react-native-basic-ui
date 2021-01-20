import colors from './colors';

export interface LinearGradients {
    black: string[];
    danger: string[];
    google: string[];
    primary: string[];
    sky: string[];
    success: string[];
    warning: string[];
    white: string[];
}

const linearGradients: LinearGradients = {
    black: [colors.black, colors.black],
    danger: ['#da4718', colors.danger],
    google: [colors.google, colors.google],
    primary: ['#11376a', colors.primary],
    sky: [colors.info, colors.white, 'rgba(255, 255, 255, 0)'],
    success: ['#8bcc00', colors.success],
    warning: ['#eea800', colors.warning],
    white: [colors.white, colors.white],
};

export default linearGradients;
