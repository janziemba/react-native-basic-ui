---
id: Button
title: Button
---

## Props

### `color`

A color of the button. The default value is `primary`.

| Type                                                                                                                                    | Required |
| ----------------------------------------------------------------------------------------------------------------------------------------| -------- |
| enum('black', 'danger', 'dark', 'disabled', 'facebook', 'google', 'info', 'light', 'primary', 'success', 'twitter', 'warning', 'white') | No       |

### `iconProps`

Icon props. Check [Icon documentation](Icon.md#props).

| Type   | Required |
| -------| -------- |
| object | No       |

### `isDisabled`

If `true`, the button is not pressable and a disabled style is applied. The default value is `false`.

| Type   | Required |
| -------| -------- |
| string | No       |

### `isLoading`

If `true`, a loading indicator is shown instead of a text. The default value is `false`.

| Type   | Required |
| -------| -------- |
| string | No       |

### `linearGradient`

A linear gradient of the button.

| Type                                                    | Required |
| --------------------------------------------------------| -------- |
| enum('danger', 'info', 'primary', 'success', 'warning') | No       |

### `linearGradientProps`

LinearGradient props. Check [LinearGradient documentation](LinearGradient.md#props).

| Type   | Required |
| -------| -------- |
| object | No       |

### `onPress`

Called when a single tap gesture is detected.

| Type     | Required |
| ---------| -------- |
| function | Yes      |

### `scalableProps`

Scalable props. Check [Scalable documentation](Scalable.md#props).

| Type   | Required |
| -------| -------- |
| object | No       |

### `text`

A text of the button.

| Type   | Required |
| -------| -------- |
| string | Yes      |

### `textProps`

Text props. Check [Text documentation](Text.md#props).

| Type   | Required |
| -------| -------- |
| object | No       |
