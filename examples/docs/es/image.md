## Image
Además de las características nativas de img, soporte de carga perezosa, marcador de posición personalizado y fallo de carga, etc.

### Uso básico

:::demo Indica cómo se debe cambiar el tamaño de la imagen para que se ajuste a su contenedor por ajuste, igual que el ajuste de objeto nativo. [object-fit](https://developer.mozilla.org/es/docs/Web/CSS/object-fit)。

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

:::demo Personalice el placeholder del contenido mientras la imagen aun no ha sido cargada vía `slot = placeholder`
```html
<div class="demo-image__placeholder">
  <div class="block">
    <span class="demonstration">Default</span>
    <kui-image :src="src"></kui-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <kui-image :src="src">
      <div slot="placeholder" class="image-slot">
        Loading<span class="dot">...</span>
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

### Fallo de carga

:::demo Personalice el contenido cuando ocurra algún error al cargar la imagen vía `slot = error`
```html
<div class="demo-image__error">
  <div class="block">
    <span class="demonstration">Default</span>
    <kui-image></kui-image>
  </div>
  <div class="block">
    <span class="demonstration">Custom</span>
    <kui-image>
      <div slot="error" class="image-slot">
        <i class="kui-icon-picture-outline"></i>
      </div>
    </kui-image>
  </div>
</div>
```
:::

### Lazy Load

:::demo Use lazy load vía `lazy = true`. La imagen se cargará hasta que se desplace a la vista cuando esté configurada. Puede indicar el contenedor de scroll que añade el oyente de scroll vía `scroll-container`. Si no está definido, será el contenedor padre más cercano cuya propiedad overflow es auto o scroll.

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

### Vista previa de la imagen

:::demo permitir una vista previa grande de la imagen configurando la prop `previewSrcList`.
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

### Atributos
| Atributo | Descripción | Tipo | Valores aceptados | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| src | origen de la imagen, igual que en nativo | string | — | - |
| fit | Indica como la imagen debe adaptarse al contenedor, lo mismo que [object-fit](https://developer.mozilla.org/es/docs/Web/CSS/object-fit) | string | fill / contain / cover / none / scale-down | - |
| alt | alt nativo | string | - | - |
| referrer-policy | referrerPolicy nativo | string | - | - |
| lazy | si se usara lazy load | boolean | — | false |
| scroll-container | El contenedor para añadir el scroll listener cuando se utiliza lazy load | string / HTMLKarman | — | El contenedor padre más cercano cuya propiedad de desbordamiento es auto o scroll |
| preview-src-list | permitir una vista previa grande de la imagen | Array | — | - |
| z-index | establecer el z-index de la vista previa de la imagen | Number | — | 2000 |

### Eventos
| Nombre del evento | Descripción | Parámetros |
|---------- |-------- |---------- |
| load | Igual que el load nativo | (e: Event) |
| error | Igual que el error nativo | (e: Error) |

### Slots
| Nombre del slot | Descripción |
|---------|-------------|
| placeholder | Se activa cuando la imagen se carga |
| error | Se activa cuando la carga de la imagen falla |


