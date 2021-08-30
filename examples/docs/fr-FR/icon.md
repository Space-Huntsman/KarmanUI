## Icônes

Karman fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `kui-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="kui-icon-edit"></i>
<i class="kui-icon-share"></i>
<i class="kui-icon-delete"></i>
<kui-button type="primary" icon="kui-icon-search">Chercher</kui-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'kui-icon-' + name"></i>
      <span class="icon-name">{{'kui-icon-' + name}}</span>
    </span>
  </li>
</ul>
