import * as React from 'react';
// @ts-ignore
import ExpoLinearGradient, { LinearGradientProps } from 'expo-linear-gradient';

const LinearGradient: React.FunctionComponent<LinearGradientProps> = (
    props: LinearGradientProps,
) => <ExpoLinearGradient {...props} />;

export default LinearGradient;
