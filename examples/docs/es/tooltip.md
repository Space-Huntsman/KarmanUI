## Tooltip

Mostrar aviso de información con el hover del mouse.

### Uso básico

Tooltip tiene 9 colocaciones.

:::demo Use el atributo `content` para establecer el contenido que se mostrará al hacer hover. El atributo `placement` determina la posición del tooltip. Su valor es `[orientation]-[alignment]` con cuatro orientaciones `top`, `left`, `right`, `bottom` y tres alineaciones `start`, `end`, `null`, la alineación por defecto es null. Tome `placement="left-end"` como ejemplo, Tooltip será mostrado en la izquierda del karmano en que se esté haciendo hover y el fondo del tooltip se alineará con el fondo del karmano.
```html
<div class="box">
  <div class="top">
    <kui-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <kui-button>top-start</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <kui-button>top</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <kui-button>top-end</kui-button>
    </kui-tooltip>
  </div>
  <div class="left">
    <kui-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <kui-button>left-start</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <kui-button>left</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <kui-button>left-end</kui-button>
    </kui-tooltip>
  </div>

  <div class="right">
    <kui-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <kui-button>right-start</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <kui-button>right</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <kui-button>right-end</kui-button>
    </kui-tooltip>
  </div>
  <div class="bottom">
    <kui-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <kui-button>bottom-start</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <kui-button>bottom</kui-button>
    </kui-tooltip>
    <kui-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <kui-button>bottom-end</kui-button>
    </kui-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .kui-tooltip__popper,
    .right .kui-tooltip__popper {
      padding: 8px 10px;
    }

    .kui-button {
      width: 110px;
    }
  }
</style>
```
:::


### Tema

Tooltip tiene dos temas: `dark` y `light`.

:::demo Establecer `effect` para modificar el tema, el valor por defecto es `dark`.
```html
<kui-tooltip content="Top center" placement="top">
  <kui-button>Dark</kui-button>
</kui-tooltip>
<kui-tooltip content="Bottom center" placement="bottom" effect="light">
  <kui-button>Light</kui-button>
</kui-tooltip>
```
:::

### Más Contenido

Despliegue múltiples líneas de texto y establezca su formato.

:::demo Sobrescriba el atributo `content` del `kui-tooltip` añadiendo un slot llamado `content`.
```html
<kui-tooltip placement="top">
  <div slot="content">multiple lines<br/>second line</div>
  <kui-button>Top center</kui-button>
</kui-tooltip>
```
:::

### Uso Avanzado

Adicional a los usos básicos, existen algunos atributos que permiten la personalización: 

el atributo `transition` permite personalizar la animación con la que el Tooltip se muestra o se esconda, el valor por defecto es `kui-fade-in-linear`.

el atributo `disabled` permite deshabilitar `tooltip`. Solo es necesario definirlo como `true`.

De hecho, Tooltip es una extensión basada en [Vue-popper](https://github.com/karman-component/vue-popper), es posible utilizar cualquier atributo permitido en Vue-popper.

:::demo
```html
<template>
  <kui-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <kui-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}} tooltip function</kui-button>
  </kui-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```
:::

:::tip
El componente `router-link` no es soportado por Tooltip, favor de usar `vm.$router.push`.

Karmanos de forma deshabilitados no son soportados por Tooltip, más información puede ser encontrada en [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter).
Es necesario envolver los karmanos de forma deshabilitados en un karmano contenedor para que Tooltip funcione.
:::


### Atributos
| Atributo       | Descripción                              | Tipo    | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | ------- | ---------------------------------------- | ---------------------------------------- |
| effect         | tema del Tooltip                         | string  | dark/light                               | dark                                     |
| content        | contenido a mostrar, puede ser sobre-escrito por `slot#content` | string  | —                                        | —                                        |
| placement      | posición del Tooltip                     | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                   |
| value / v-model | visibilidad del Tooltip                  | boolean | —                                        | false                                    |
| disabled       | saber si el Tooltip se encuentra deshabilitado | boolean | —                                        | false                                    |
| offset         | offset del Tooltip                       | number  | —                                        | 0                                        |
| transition     | nombre de animación                      | string  | —                                        | kui-fade-in-linear                        |
| visible-arrow  | si una flecha es mostrada. Para mayor información, revisar la página de [Vue-popper](https://github.com/karman-component/vue-popper) | boolean | —                                        | true                                     |
| popper-options | parámetros de [popper.js](https://popper.js.org/documentation.html) | Object  | referirse a la documentación de [popper.js](https://popper.js.org/documentation.html) | `{ boundariesKarman: 'body', gpuAcceleration: false }` |
| open-delay     | retraso de la apariencia, en mili segundos | number  | —                                        | 0                                        |
| manual         | si el Tooltipo será controlado de forma manual. `mouseenter` y `mouseleave` no tendrán efecto si fue establecido como `true` | boolean | —                                        | false                                    |
| popper-class   | nombre de clase personalizada para el popper del Tooltip | string  | —                                        | —                                        |
| enterable      | si el ratón puede entrar al Tooltip | Boolean | —                                        | true                                     |
| hide-after     | tiempo a esperar en mili segundos para esconder el Tooltip | number  | —                                        | 0                                        |
| tabindex       | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Tooltip | number   | —                      | 0              |
