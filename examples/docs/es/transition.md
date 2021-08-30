## Transiciones incorporadas

Puede usar directamente las transiciones incorporadas en Karman. Antes de hacerlo, por favor lea la [documentación](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Tenemos dos efectos de fading: `kui-fade-in-linear` y `kui-fade-in`.
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
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### Zoom

:::demo También tenemos zoom: `kui-zoom-in-center`, `kui-zoom-in-top` y `kui-zoom-in-bottom`.
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
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### Colapsado
Para efectos de colapsado usar el componente `kui-collapse-transition`.
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
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### Bajo demanda

```js
// fade/zoom
import 'karman-ui/lib/theme-default/base.css';
// colapsar
import CollapseTransition from 'karman-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
