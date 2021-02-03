---
id: default-theme
title: Default theme
---

## Colors
- ![#000000](https://placehold.it/15/000000/000000?text=+) `#000000` - black
- ![#3d3d3d](https://placehold.it/15/3d3d3d/000000?text=+) `#3d3d3d` - dark
- ![#f6511d](https://placehold.it/15/f6511d/000000?text=+) `#f6511d` - danger
- ![#cccccc](https://placehold.it/15/cccccc/000000?text=+) `#cccccc` - disabled
- ![#1877f2](https://placehold.it/15/1877f2/000000?text=+) `#1877f2` - facebook
- ![#4285f4](https://placehold.it/15/4285f4/000000?text=+) `#4285f4` - google
- ![#00a6ed](https://placehold.it/15/00a6ed/000000?text=+) `#00a6ed` - info
- ![#f5f5f5](https://placehold.it/15/f5f5f5/000000?text=+) `#f5f5f5` - light
- ![#eeeeee](https://placehold.it/15/eeeeee/000000?text=+) `#eeeeee` - muted
- ![#0d2c54](https://placehold.it/15/0d2c54/000000?text=+) `#0d2c54` - primary
- ![#ffd837](https://placehold.it/15/ffd837/000000?text=+) `#ffd837` - star
- ![#7fb800](https://placehold.it/15/7fb800/000000?text=+) `#7fb800` - success
- ![#1da1f2](https://placehold.it/15/1da1f2/000000?text=+) `#1da1f2` - twitter
- ![#ffb400](https://placehold.it/15/ffb400/000000?text=+) `#f5f5f5` - warning
- ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` - white


## Linear gradients

```jsx
{
    danger: ['#da4718', colors.danger],
    info: ['#008dc9', colors.info],
    primary: ['#11376a', colors.primary],
    success: ['#8bcc00', colors.success],
    warning: ['#eea800', colors.warning],
}
```

## Radiuses

```jsx
{
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
    huge: 24,
    gigantic: 32,
    rounded: 1000,
}
```

## Spacing

```jsx
{
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
    huge: 20,
    gigantic: 24,
}
```

## Typography

```jsx
{
    alignment: {
        caption: 'left',
        heading: 'center',
        subheading: 'center',
        text: 'left',
    },
    fontFamilies: {
        bold: Platform.select({
            android: 'Roboto',
            default: 'Roboto',
            ios: 'System',
        }),
        medium: Platform.select({
            android: 'Roboto',
            default: 'Roboto',
            ios: 'System',
        }),
    },
    fontSizes: {
        tiny: 10,
        small: 12,
        medium: 14,
        large: 16,
        huge: 18,
    },
    lineHeights: {
        tiny: 18,
        small: 20,
        medium: 22,
        large: 24,
        huge: 26,
    },
}
```
