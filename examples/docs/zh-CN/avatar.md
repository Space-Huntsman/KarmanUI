## Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

### 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。

:::demo
```html
<template>
  <kui-row class="demo-avatar demo-basic">
    <kui-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><kui-avatar :size="50" :src="circleUrl"></kui-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <kui-avatar :size="size" :src="circleUrl"></kui-avatar>
        </div>
      </div>
    </kui-col>  
    <kui-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><kui-avatar shape="square" :size="50" :src="squareUrl"></kui-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <kui-avatar shape="square" :size="size" :src="squareUrl"></kui-avatar>
        </div>
      </div>
    </kui-col> 
  </kui-row>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://picsum.photos/200",
        squareUrl: "https://picsum.photos/200",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>

```
:::

### 展示类型

支持三种类型：图标、图片和字符

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <kui-avatar icon="kui-icon-user-solid"></kui-avatar>
    </div>
    <div>
      <kui-avatar src="https://picsum.photos/200"></kui-avatar>
    </div>
    <div>
      <kui-avatar> user </kui-avatar>
    </div>
  </div>
</template>
```
:::

### 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

:::demo
```html
<template>
  <div class="demo-type">
    <kui-avatar :size="60" src="https://picsum.photos/120/120" @error="errorHandler">
      <img src="https://picsum.photos/120"/>
    </kui-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### 图片如何适应容器框

当展示类型为图片的时候，使用 `fit` 属性定义图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

:::demo
```html
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <kui-avatar shape="square" :size="100" :fit="fit" :src="url"></kui-avatar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://picsum.photos/200'
      }
    }
  }
</script>

```
:::

### Attributes

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | 设置头像的图标类型，参考 Icon 组件   | string          |        |        |
| size              | 设置头像的大小                     | number/string | number / large / medium / small | large  |
| shape             | 设置头像的形状  | string |    circle / square     |   circle  |
| src               | 图片头像的资源地址 | string |        |      |
| srcSet            | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string |        |      |
| alt               | 描述图像的替换文本 | string |        |      |
| fit               | 当展示类型为图片的时候，设置图片如何适应容器框 | string |    fill / contain / cover / none / scale-down    |   cover   |


### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 |(e: Event)  |

### Slot

| 名称	 | 说明               |  
| ------ | ------------------ | 
| default  | 自定义头像展示内容 |
