## Backtop

Un botón para volver a la parte superior

### Uso básico

Desplácese hacia abajo para ver el botón en el lado inferior derecho.
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <kui-backtop target=".page-component__scroll .kui-scrollbar__wrap"></kui-backtop>
</template>
```

:::

### Personalización

Área de visualización de 40px \* 40px.
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <kui-backtop target=".page-component__scroll .kui-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #7A00A3;
      }"
    >
      UP
    </div>
  </kui-backtop>
</template>
```

:::

### Atributos

| Atributos | Descripción                                    | Tipo         | Valores aceptados | Por defecto |
| ----------------- | ------------------------------------------------------------------- | --------------- | --------------- | ------- |
| target            | el objetivo para activar el scroll      | string          |                 |         |
| visibility-height | el botón no se mostrará hasta que la altura de desplazamiento alcance este valor | number |                 | 200     |
| right             | separación desde la derecha              | number |                 | 40      |
| bottom            | separación desde abajo                                       | number |                 | 40      |

### Eventos

| Nombre del evento | Descripción             | Parámetros  |
| ----------------- | ----------------------- | ----------- |
| click             | se activa al hacer clic | click event |
