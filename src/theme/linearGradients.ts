import colors from './colors';

export interface LinearGradients {
    danger: string[];
    info: string[];
    primary: string[];
    success: string[];
    warning: string[];
}

const linearGradients: LinearGradients = {
    danger: ['#da4718', colors.danger],
    info: ['#008dc9', colors.info],
    primary: ['#11376a', colors.primary],
    success: ['#8bcc00', colors.success],
    warning: ['#eea800', colors.warning],
};

export default linearGradients;
