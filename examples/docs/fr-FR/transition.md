## Transitions

Vous pouvez utiliser les transitions d'Karman directement. Mais avant ça, merci de lire la [documentation](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Il y a deux effets de fading: `kui-fade-in-linear` et `kui-fade-in`.
```html
<template>
  <div>
    <kui-button @click="show = !show">Cliquez ici</kui-button>

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
    background-color: #7A00A3;
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

:::demo `kui-zoom-in-center`, `kui-zoom-in-top` et `kui-zoom-in-bottom` sont fournis.
```html
<template>
  <div>
    <kui-button @click="show2 = !show2">Cliquez ici</kui-button>

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
    background-color: #7A00A3;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### Collapse

Pour l'effet collapse, utilisez le composant `kui-collapse-transition`.

:::demo
```html
<template>
  <div>
    <kui-button @click="show3 = !show3">Cliquez ici</kui-button>

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
    background-color: #7A00A3;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### À la demande

```js
// fade/zoom
import 'karman-ui/lib/theme-default/base.css';
// collapse
import CollapseTransition from 'karman-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
