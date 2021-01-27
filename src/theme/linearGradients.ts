import colors from './colors';

export interface LinearGradients {
    black: string[];
    danger: string[];
    facebook: string[];
    google: string[];
    primary: string[];
    success: string[];
    twitter: string[];
    warning: string[];
    white: string[];
}

const linearGradients: LinearGradients = {
    black: [colors.black, colors.black],
    danger: ['#da4718', colors.danger],
    facebook: [colors.facebook, colors.facebook],
    google: [colors.google, colors.google],
    primary: ['#11376a', colors.primary],
    success: ['#8bcc00', colors.success],
    twitter: [colors.twitter, colors.twitter],
    warning: ['#eea800', colors.warning],
    white: [colors.white, colors.white],
};

export default linearGradients;
