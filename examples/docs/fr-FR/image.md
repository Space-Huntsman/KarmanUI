## Image

En plus des propriétés natives de img, ce composant supporte le lazy loading, les placeholder personnalisés, les échecs de téléchargement, etc.

### Usage basique

:::demo Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur grâce à `fit`, identique au [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) natif.
```html
<div class="demo-image">
  <div class="block" v-for="fit in fits" :key="fit">
    <span class="demonstration">{{ fit }}</span>
    <kui-image
      style="width: 100px; height: 100px"
      :src="url"
      :fit="fit"></kui-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }
  }
</script>
```
:::

### Placeholder

:::demo Placeholder personnalisé qui s'affiche lorsque l'image n'est pas encore chargée, grâce à `slot = placeholder`.
```html
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <kui-image :src="src"></kui-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
    <kui-image :src="src">
      <div slot="placeholder" class="image-slot">
        Chargement<span class="dot">...</span>
      </div>
    </kui-image>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        src:  'https://picsum.photos/803/572?'+Math.random()
      }
    }
  }
</script>
```
:::

### Échec du chargement

:::demo Contenu personnalisé qui s'affiche lorsque le chargement a échoué, grâce à `slot = error`.
```html
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Défaut</span>
    <kui-image></kui-image>
  </div>
  <div class="block">
    <span class="demonstration">Personnalisé</span>
    <kui-image>
      <div slot="error" class="image-slot">
        <i class="kui-icon-picture-outline"></i>
      </div>
    </kui-image>
  </div>
</div>
```
:::

### Lazy Loading

:::demo Utilisez le lazy loading avec `lazy = true`. Les images ne se chargeront que lorsque le scrolling les atteindra. Vous pouvez indiquer le conteneur grâce à `scroll-container`. Si undefined, ce sera le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.
```html
<div class="demo-image__lazy">
  <kui-image v-for="url in urls" :key="url" :src="url" lazy></kui-image>
</div>

<script>
  export default {
    data() {
      return {
        urls: [
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random(),
            'https://picsum.photos/803/535?'+Math.random()
        ]
      }
    }
  }
</script>
```
:::

### Image Preview

:::demo allow big image preview by setting `previewSrcList` prop.
```html
<div class="demo-image__preview">
  <kui-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </kui-image>
</div>

<script>
  export default {
    data() {
      return {
          url: 'https://picsum.photos/803/572?'+Math.random(),
        srcList: [
            'https://picsum.photos/803/572?'+Math.random(),
            'https://picsum.photos/803/572?'+Math.random()
        ]
      }
    }
  }
</script>
```
:::

### Attributs
| Attribut | Description | Type  | Valeurs acceptées | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| src | Source de l'image, identique au natif. | string | — | - |
| fit | Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur, identique à [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string | fill / contain / cover / none / scale-down | - |
| alt | Attribut alt natif.| string | - | - |
| referrer-policy | Attribut referrerPolicy natif.| string | - | - |
| lazy | Si le lazy loading doit être utilisé. | boolean | — | false |
| scroll-container | Le conteneur auquel ajouter le listener du scroll en mode lazy loading. | string / HTMLKarman | — | Le conteneur parent le plus proche avec la propriété overflow à auto ou scroll. |
| preview-src-list | allow big image preview | Array | — | - |
| z-index | set image preview z-index | Number | — | 2000 |

### Évènements
| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| load | Identique au load natif. | (e: Event) |
| error | Identique au error natif. | (e: Error) |

### Slots
| Nom | Description |
|---------|-------------|
| placeholder | Se déclenche quand l'image charge. |
| error | Se déclenche quand le chargement de l'image a échoué. |
