/* eslint-disable sort-keys, typescript-sort-keys/interface */

export interface Radiuses {
    tiny: number;
    small: number;
    medium: number;
    large: number;
    huge: number;
    gigantic: number;
    rounded: number;
}

const radiuses: Radiuses = {
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
    huge: 24,
    gigantic: 32,
    rounded: 1000,
};

export default radiuses;
