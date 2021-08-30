## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<kui-badge :value="12" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="3" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>
<kui-badge :value="1" class="item" type="primary">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="2" class="item" type="warning">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<kui-dropdown trigger="click">
  <span class="kui-dropdown-link">
    Click Me<i class="kui-icon-caret-bottom kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item class="clearfix">
      comments
      <kui-badge class="mark" :value="12" />
    </kui-dropdown-item>
    <kui-dropdown-item class="clearfix">
      replies
      <kui-badge class="mark" :value="3" />
    </kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<kui-badge :value="200" :max="99" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="100" :max="10" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<kui-badge value="new" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge value="hot" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<kui-badge is-dot class="item">query</kui-badge>
<kui-badge is-dot class="item">
  <kui-button class="share-button" icon="kui-icon-share" type="primary"></kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

