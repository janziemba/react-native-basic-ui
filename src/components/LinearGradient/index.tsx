import * as React from 'react';
import RNLinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

const LinearGradient: React.FunctionComponent<LinearGradientProps> = (
    props: LinearGradientProps,
) => <RNLinearGradient {...props} />;

export default LinearGradient;
