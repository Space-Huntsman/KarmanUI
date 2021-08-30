## Popconfirm 

A simple confirmation dialog of an karman click action.

### Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.
```html
<template>
<kui-popconfirm
  title="Are you sure to delete this?"
>
  <kui-button slot="reference">Delete</kui-button>
</kui-popconfirm>
</template>
````
:::

### Customise
You can customise Popconfirm like:
:::demo
```html
<template>
<kui-popconfirm
  confirm-button-text='OK'
  canckui-button-text='No, Thanks'
  icon="kui-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <kui-button slot="reference">Delete</kui-button>
</kui-popconfirm>
</template>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Title | String | — | — |
|  confirm-button-text              | Confirm button text | String | — | — |
|  canckui-button-text              | Cancel button text | String | — | — |
|  confirm-button-type              | Confirm button type | String | — | Primary |
|  canckui-button-type              | Cancel button type | String | — | Text |
|  icon              | Icon | String | — | kui-icon-question |
|  icon-color              | Icon color | String | — | #f90 |
|  hide-icon              | is hide Icon | Boolean | — | false |

### Slot
| Name | Description |
|--- | ---|
| reference | HTML karman that triggers Popconfirm |

### Events
| Event Name | Description | Parameters |
|---------|--------|---------|
| confirm | triggers when click confirm button | — |
| cancel | triggers when click cancel button | — |
