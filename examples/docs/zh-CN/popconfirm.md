## Popconfirm 气泡确认框

点击元素，弹出气泡确认框。

### 基础用法

Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。
:::demo 在 Popconfirm 中，只有 `title` 属性可用，`content` 属性不会被展示。
```html
<template>
<kui-popconfirm
  title="这是一段内容确定删除吗？"
>
  <kui-button slot="reference">删除</kui-button>
</kui-popconfirm>
</template>
````
:::

### 自定义

可以在 Popconfirm 中自定义内容。
:::demo
```html
<template>
<kui-popconfirm
  confirm-button-text='好的'
  canckui-button-text='不用了'
  icon="kui-icon-info"
  icon-color="red"
  title="这是一段内容确定删除吗？"
>
  <kui-button slot="reference">删除</kui-button>
</kui-popconfirm>
</template>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | 标题 | String | — | — |
|  confirm-button-text              | 确认按钮文字 | String | — | — |
|  canckui-button-text              | 取消按钮文字 | String | — | — |
|  confirm-button-type              | 确认按钮类型 | String | — | Primary |
|  canckui-button-type              | 取消按钮类型 | String | — | Text |
|  icon              | Icon | String | — | kui-icon-question |
|  icon-color              | Icon 颜色 | String | — | #f90 |
|  hide-icon              | 是否隐藏 Icon | Boolean | — | false |

### Slot
| 参数 | 说明 |
|--- | ---|
| reference | 触发 Popconfirm 显示的 HTML 元素 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| confirm | 点击确认按钮时触发 | — |
| cancel | 点击取消按钮时触发 | — |
