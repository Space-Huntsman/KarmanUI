## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `kui-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="kui-icon-edit"></i>
<i class="kui-icon-share"></i>
<i class="kui-icon-delete"></i>
<kui-button type="primary" icon="kui-icon-search">搜索</kui-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>
