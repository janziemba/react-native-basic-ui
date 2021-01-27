---
id: Button
title: Button
---

## Props

### `color`

A color of the button. The default value is `primary`.

| Type                                                                                      | Required |
| ------------------------------------------------------------------------------------------| -------- |
| enum('black', 'danger', 'facebook', 'google', 'primary', 'success', 'twitter', 'warning') | No       |

### `disabled`

If `true`, the button is not pressable and a disabled style is applied. The default value is `false`.

| Type   | Required |
| -------| -------- |
| string | No       |

### `icon`

A name of the icon.

| Type   | Required |
| -------| -------- |
| string | No       |

### `iconSet`

An icon set which should be used. The default value is `MaterialIcons`.

| Type                       | Required |
| ---------------------------| -------- |
| enum('AntDesign', 'Entypo', 'EvilIcons', 'Feather', 'FontAwesome', 'Fontisto', 'Foundation', 'Ionicons', 'MaterialCommunityIcons', 'MaterialIcons', 'Octicons', 'SimpleLineIcons', 'Zocial') | No       |

### `text`

A text of the button.

| Type   | Required |
| -------| -------- |
| string | Yes      |
