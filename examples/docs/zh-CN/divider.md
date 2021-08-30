## Divider 分割线

区隔内容的分割线。

### 基础用法

对不同章节的文本段落进行分割。

:::demo
```html
<template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <kui-divider></kui-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>
```
:::

### 设置文案

可以在分割线上自定义文案内容。


:::demo
```html
<template>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <kui-divider content-position="left">少年包青天</kui-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <kui-divider><i class="kui-icon-mobile-phone"></i></kui-divider>
    <span>为了无法计算的价值</span>
    <kui-divider content-position="right">阿里云</kui-divider>
  </div>
</template>
```
:::

### 垂直分割

:::demo
```html
<template>
  <div>
    <span>雨纷纷</span>
    <kui-divider direction="vertical"></kui-divider>
    <span>旧故里</span>
    <kui-divider direction="vertical"></kui-divider>
    <span>草木深</span>
  </div>
</template>
```
:::

### Divider Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| direction      | 设置分割线方向  | string  |            horizontal / vertical          |    horizontal     |
| content-position      | 设置分割线文案的位置 | string  |  left / right / center  |  center |
