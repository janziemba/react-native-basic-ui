import * as React from 'react';
// @ts-ignore
import { LinearGradient as ExpoLinearGradient, LinearGradientProps } from 'expo-linear-gradient';

export interface Props extends LinearGradientProps {}

const LinearGradient: React.FunctionComponent<LinearGradientProps> = (
    props: LinearGradientProps,
) => <ExpoLinearGradient {...props} />;

export default LinearGradient;
