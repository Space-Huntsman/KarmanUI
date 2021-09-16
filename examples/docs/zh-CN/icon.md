## Icon 图标

提供了两套图标，X系列图标目前是针对航天领域的专业图标集合，还包含一套常用的图标集合。

### 使用方法

直接通过设置类名为 `kui-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="kui-icon-x-orbit"></i>轨道
<i class="kui-icon-x-projection"></i>投影
<i class="kui-icon-x-surveying-ship"></i> 测量船
<i class="kui-icon-x-humidity"></i> 湿度
<i class="kui-icon-x-star-earth-link"></i> 星地链接
<i class="kui-icon-x-satellite-point"></i> 星下点
<i class="kui-icon-x-point-beam"></i> 点波束
<kui-divider></kui-divider>
<kui-button type="primary" icon="kui-icon-x-cmd-telecontrol">遥控发令</kui-button>
<kui-button type="danger" icon="kui-icon-x-rocket">发射</kui-button>
<kui-button type="success" icon="kui-icon-x-scene">展示场景</kui-button>
<kui-button type="info" icon="kui-icon-x-constellation">星座展示</kui-button>


</script>
```

:::

### 搜索图标

<kui-input v-model="KARMAN_VAL.filter" placeholder="搜索图标"  prefix-icon="kui-icon-search"></kui-input>

### X 系列图标集合 （航天领域专用)

<ul class="icon-list">
    <li v-for="name in $icon.xClassList.filter(item=>new RegExp(KARMAN_VAL.filter,'ig').test(item))" :key="name">
        <span>
      <i :class="'kui-icon-' + name"></i>
        <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
    </li>
</ul>

### 常规图标集合

<ul class="icon-list">
  <li v-for="name in $icon.classList.filter(item=>new RegExp(KARMAN_VAL.filter,'ig').test(item))" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>

