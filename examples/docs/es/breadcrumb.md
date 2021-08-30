## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `kui-breadcrumb`, cada `kui-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el carácter separador. El valor por defecto es '/'.

```html
<kui-breadcrumb separator="/">
  <kui-breadcrumb-item :to="{ path: '/' }">homepage</kui-breadcrumb-item>
  <kui-breadcrumb-item><a href="/">promotion management</a></kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion list</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion detail</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<kui-breadcrumb separator-class="kui-icon-arrow-right">
  <kui-breadcrumb-item :to="{ path: '/' }">homepage</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion management</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion list</kui-breadcrumb-item>
  <kui-breadcrumb-item>promotion detail</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | carácter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





