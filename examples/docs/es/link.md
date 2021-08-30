## Link

Texto con hipervínculo

### Básico

Texto con hipervínculo básico
:::demo

```html
<div>
  <kui-link href="https://karman.eleme.io" target="_blank">default</kui-link>
  <kui-link type="primary">primary</kui-link>
  <kui-link type="success">success</kui-link>
  <kui-link type="warning">warning</kui-link>
  <kui-link type="danger">danger</kui-link>
  <kui-link type="info">info</kui-link>
</div>
```

:::

### Deshabilitar

Deshabilita el hipervínculo
:::demo

```html
<div>
  <kui-link disabled>default</kui-link>
  <kui-link type="primary" disabled>primary</kui-link>
  <kui-link type="success" disabled>success</kui-link>
  <kui-link type="warning" disabled>warning</kui-link>
  <kui-link type="danger" disabled>danger</kui-link>
  <kui-link type="info" disabled>info</kui-link>
</div>
```

:::

### Subrayado

Subrayado del hipervínculo
:::demo

```html
<div>
  <kui-link :underline="false">Without Underline</kui-link>
  <kui-link>With Underline</kui-link>
</div>
```

:::

### Icono

Hipervínculo con icono
:::demo

```html
<div>
  <kui-link icon="kui-icon-edit">Edit</kui-link>
  <kui-link>Check<i class="kui-icon-view kui-icon--right"></i> </kui-link>
</div>
```

:::

### Atributos

| Atributo  | Descripción                                          | Tipo    | Opciones                                    | Por defecto |
| --------- | ---------------------------------------------------- | ------- | ------------------------------------------- | ----------- |
| type      | tipo                                                 | string  | primary / success / warning / danger / info | default     |
| underline | si el hipervínculo estará subrayado                  | boolean | —                                           | true        |
| disabled  | si el componente esta deshabilitado                  | boolean | —                                           | false       |
| href      | lo mismo que el valor nativo del hipervínculo `href` | string  | —                                           | -           |
| icon      | nombre de clase del icono                            | string  | —                                           | -           |
