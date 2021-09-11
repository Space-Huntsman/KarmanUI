## Icon 图标

提供了一套X系列图标，X系列图标目前是针对航天领域的专业图标集合，还包含一套常用的图标集合。

### 使用方法

直接通过设置类名为 `kui-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="kui-icon-x-satellite"></i>
<i class="kui-icon-x-orbit"></i>
<i class="kui-icon-x-projection"></i>
<i class="kui-icon-x-surveying-ship"></i>
<i class="kui-icon-x-humidity"></i>
<i class="kui-icon-x-star-earth-link"></i>
<kui-button type="primary" icon="kui-icon-x-cmd-telecontrol">遥控发令</kui-button>

```
:::
### X系列图标集合

<ul class="icon-list">
  <li v-for="name in $icon.xClassList" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>

### 常规图标集合

<ul class="icon-list">
  <li v-for="name in $icon.classList" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>
