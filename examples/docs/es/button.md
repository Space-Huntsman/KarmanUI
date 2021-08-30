## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<kui-row>
  <kui-button>Default</kui-button>
  <kui-button type="primary">Primary</kui-button>
  <kui-button type="success">Success</kui-button>
  <kui-button type="info">Info</kui-button>
  <kui-button type="warning">Warning</kui-button>
  <kui-button type="danger">Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain>Plain</kui-button>
  <kui-button type="primary" plain>Primary</kui-button>
  <kui-button type="success" plain>Success</kui-button>
  <kui-button type="info" plain>Info</kui-button>
  <kui-button type="warning" plain>Warning</kui-button>
  <kui-button type="danger" plain>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button round>Round</kui-button>
  <kui-button type="primary" round>Primary</kui-button>
  <kui-button type="success" round>Success</kui-button>
  <kui-button type="info" round>Info</kui-button>
  <kui-button type="warning" round>Warning</kui-button>
  <kui-button type="danger" round>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button icon="kui-icon-search" circle></kui-button>
  <kui-button type="primary" icon="kui-icon-edit" circle></kui-button>
  <kui-button type="success" icon="kui-icon-check" circle></kui-button>
  <kui-button type="info" icon="kui-icon-message" circle></kui-button>
  <kui-button type="warning" icon="kui-icon-star-off" circle></kui-button>
  <kui-button type="danger" icon="kui-icon-delete" circle></kui-button>
</kui-row>
```
:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<kui-row>
  <kui-button disabled>Default</kui-button>
  <kui-button type="primary" disabled>Primary</kui-button>
  <kui-button type="success" disabled>Success</kui-button>
  <kui-button type="info" disabled>Info</kui-button>
  <kui-button type="warning" disabled>Warning</kui-button>
  <kui-button type="danger" disabled>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain disabled>Plain</kui-button>
  <kui-button type="primary" plain disabled>Primary</kui-button>
  <kui-button type="success" plain disabled>Success</kui-button>
  <kui-button type="info" plain disabled>Info</kui-button>
  <kui-button type="warning" plain disabled>Warning</kui-button>
  <kui-button type="danger" plain disabled>Danger</kui-button>
</kui-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<kui-button type="text">Text Button</kui-button>
<kui-button type="text" disabled>Text Button</kui-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<kui-button type="primary" icon="kui-icon-edit"></kui-button>
<kui-button type="primary" icon="kui-icon-share"></kui-button>
<kui-button type="primary" icon="kui-icon-delete"></kui-button>
<kui-button type="primary" icon="kui-icon-search">Search</kui-button>
<kui-button type="primary">Upload<i class="kui-icon-upload kui-icon-right"></i></kui-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<kui-button-group>` para agrupar sus botones.

```html
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-arrow-left">Previous Page</kui-button>
  <kui-button type="primary">Next Page<i class="kui-icon-arrow-right kui-icon-right"></i></kui-button>
</kui-button-group>
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-edit"></kui-button>
  <kui-button type="primary" icon="kui-icon-share"></kui-button>
  <kui-button type="primary" icon="kui-icon-delete"></kui-button>
</kui-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<kui-button type="primary" :loading="true">Loading</kui-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<kui-row>
  <kui-button>Default</kui-button>
  <kui-button size="medium">Medium</kui-button>
  <kui-button size="small">Small</kui-button>
  <kui-button size="mini">Mini</kui-button>
</kui-row>
<kui-row>
  <kui-button round>Default</kui-button>
  <kui-button size="medium" round>Medium</kui-button>
  <kui-button size="small" round>Small</kui-button>
  <kui-button size="mini" round>Mini</kui-button>
</kui-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

