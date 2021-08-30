## Popconfirm 

Un dialogo de confirmación simple asociado al evento click de un karmano.

### Uso básico

Popconfirm es parecido a Popover. Para algunos atributos duplicados, por favor consulte la documentación de Popover.

:::demo Solo el atributo  `title`  esta disponible en Popconfirm, `content` sera ignorado.
```html
<template>
<kui-popconfirm
  title="Are you sure to delete this?"
>
  <kui-button slot="reference">Delete</kui-button>
</kui-popconfirm>
</template>
````
:::

### Personalización
Se puede personalizar Popconfirm así:
:::demo

```html
<template>
<kui-popconfirm
  confirm-button-text='OK'
  canckui-button-text='No, Thanks'
  icon="kui-icon-info"
  icon-color="red"
  title="Are you sure to delete this?"
>
  <kui-button slot="reference">Delete</kui-button>
</kui-popconfirm>
</template>
```
:::

### Atributos
| Atributo     | Descripción | Tipo    | Valores aceptados | Por defecto |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  title              | Titulo | String | — | — |
|  confirm-button-text              | Texto del botón de confirmación | String | — | — |
|  canckui-button-text              | Texto del botón de cancelación | String | — | — |
|  confirm-button-type              | Tipo del botón de confirmación | String | — | Primary |
|  canckui-button-type              | Tipo del botón de cancelación | String | — | Text |
|  icon              | Icono | String | — | kui-icon-question |
|  icon-color              | Color icono | String | — | #f90 |
|  hide-icon              | ¿Es un icono oculto? | Boolean | — | false |

### Slot
| Nombre | Descripción |
|--- | ---|
| reference | Karmano HTML que activa el Popconfirm |

### Eventos
| Nombre Evento | Descripción | Parámetros |
|---------|--------|---------|
| confirm | Se activa cuando se pulsa el botón de confirmación | — |
| cancel | Se activa cuando se pulsa el botón de cancelación | — |
