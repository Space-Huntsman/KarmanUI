## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `kui-breadcrumb`, each `kui-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<kui-breadcrumb separator="/">
  <kui-breadcrumb-item :to="{ path: '/' }">homepage</kui-breadcrumb-item>
  <kui-breadcrumb-item><a href="/">promotion management</a></kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion list</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion detail</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<kui-breadcrumb separator-class="kui-icon-arrow-right">
  <kui-breadcrumb-item :to="{ path: '/' }">homepage</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion management</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion list</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion detail</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





