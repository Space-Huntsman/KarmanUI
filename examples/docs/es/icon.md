## Icon

Karman proporciona un conjunto de iconos propios.

### Uso básico

Simplemente asigna el nombre de la clase a `kui-icon-iconName`.

:::demo

```html
<i class="kui-icon-edit"></i>
<i class="kui-icon-share"></i>
<i class="kui-icon-delete"></i>
<kui-button type="primary" icon="kui-icon-search">Search</kui-button>

```
:::

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>
