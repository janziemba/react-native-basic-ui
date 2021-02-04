// @ts-ignore
import { register as registerKnobs, withKnobs } from '@storybook/addon-ondevice-knobs';
import { addDecorator, configure, getStorybookUI } from '@storybook/react-native';

registerKnobs();
addDecorator(withKnobs);

configure(() => {
    require('./stories/ActionButton/playground.tsx');
    require('./stories/Button/examples.tsx');
    require('./stories/Button/playground.tsx');
    require('./stories/Card/playground.tsx');
    require('./stories/Checkbox/playground.tsx');
    require('./stories/Collapsible/playground.tsx');
    require('./stories/Divider/playground.tsx');
    require('./stories/ExtendedCard/playground.tsx');
    require('./stories/Label/examples.tsx');
    require('./stories/Label/playground.tsx');
    require('./stories/PasswordInput/playground.tsx');
    require('./stories/Rating/playground.tsx');
    require('./stories/Text/examples.tsx');
    require('./stories/Text/playground.tsx');
    require('./stories/TextInput/playground.tsx');
}, module);

export default getStorybookUI({
    asyncStorage: null,
});
