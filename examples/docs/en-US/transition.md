## Built-in transition

You can use Karman's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `kui-fade-in-linear` and `kui-fade-in`.
```html
<template>
  <div>
    <kui-button @click="show = !show">Click Me</kui-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="kui-fade-in-linear">
        <div v-show="show" class="transition-box">.kui-fade-in-linear</div>
      </transition>
      <transition name="kui-fade-in">
        <div v-show="show" class="transition-box">.kui-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #3366FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom

:::demo `kui-zoom-in-center`, `kui-zoom-in-top` and `kui-zoom-in-bottom` are provided.
```html
<template>
  <div>
    <kui-button @click="show2 = !show2">Click Me</kui-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="kui-zoom-in-center">
        <div v-show="show2" class="transition-box">.kui-zoom-in-center</div>
      </transition>

      <transition name="kui-zoom-in-top">
        <div v-show="show2" class="transition-box">.kui-zoom-in-top</div>
      </transition>

      <transition name="kui-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.kui-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #3366FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse

For collapse effect, use the `kui-collapse-transition` component.

:::demo
```html
<template>
  <div>
    <kui-button @click="show3 = !show3">Click Me</kui-button>

    <div style="margin-top: 20px; height: 200px;">
      <kui-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">kui-collapse-transition</div>
          <div class="transition-box">kui-collapse-transition</div>
        </div>
      </kui-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #3366FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### On demand

```js
// fade/zoom
import 'karman-ui/lib/theme-default/base.css';
// collapse
import CollapseTransition from 'karman-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
