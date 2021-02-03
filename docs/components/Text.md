---
id: Text
title: Text
---

## Props

### `align`

An alignment of the text. The default value is `left`.

| Type                                       | Required |
| -------------------------------------------| -------- |
| enum('center', 'justify', 'left', 'right') | No       |

### `color`

A color of the text. The default value is `dark`.

| Type                                                                                                   | Required |
| -------------------------------------------------------------------------------------------------------| -------- |
| enum('black', 'dark', 'danger', 'disabled', 'info', 'light', 'primary', 'success', 'warning', 'white') | No       |

### `onPress`

Called when a single tap gesture is detected.

| Type     | Required |
| ---------| -------- |
| function | Yes      |

### `rnTextProps`

Check [React Native Text documentation](https://reactnative.dev/docs/text#props).

| Type   | Required |
| -------| -------- |
| object | No       |

### `size`

A size of the text. The default value is `medium`.

| Type                                             | Required |
| -------------------------------------------------| -------- |
| enum('huge', 'large', 'medium', 'small', 'tiny') | No       |

### `style`

A style (decoration) of the text. The default value is `normal`.

| Type                     | Required |
| -------------------------| -------- |
| enum('normal', 'italic') | No       |

### `weight`

A weight of the text. The default value is `medium`.

| Type                   | Required |
| -----------------------| -------- |
| enum('bold', 'medium') | No       |
