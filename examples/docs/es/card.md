## Card
Muestra información dentro de un contenedor `card`

### Uso Básico

`Card` incluye titulo, contenido y operaciones.

:::demo Card se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su  contenido depende de un slot con nombre.

```html
<kui-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <kui-button style="float: right; padding: 3px 0" type="text">Operation button</kui-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</kui-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Card simple

La parte de la cabecera puede omitirse.

:::demo
```html
<kui-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</kui-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### Con imágenes

Muestre un contenido más rico añadiendo algunas configuraciones.

:::demo El atributo `body-style` define el estilo CSS del `body` personalizado. Este ejemplo también utiliza  `kui-col` para el layout.

```html
<kui-row>
  <kui-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <kui-card :body-style="{ padding: '0px' }">
      <img src="https://picsum.photos/400/230?blur=5" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <kui-button type="text" class="button">Operating</kui-button>
        </div>
      </div>
    </kui-card>
  </kui-col>
</kui-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### Shadow

Puede definir cuándo mostrar las sombras.

:::demo El atributo de sombra determina cuándo se muestran las sombras. Puede ser `always`, `hover` o `never`.

```html
<kui-row :gutter="12">
  <kui-col :span="8">
    <kui-card shadow="always">
      Always
    </kui-card>
  </kui-col>
  <kui-col :span="8">
    <kui-card shadow="hover">
      Hover
    </kui-card>
  </kui-col>
  <kui-col :span="8">
    <kui-card shadow="never">
      Never
    </kui-card>
  </kui-col>
</kui-row>
```
:::

### Atributos
| Atributo   | Descripción                              | Tipo   | Valores aceptados  | Por defecto         |
| ---------- | ---------------------------------------- | ------ | -----------------  | ------------------- |
| header     | Titulo del card. También acepta DOM pasado por `slot#header` | string  | —                 | —                   |
| body-style | Estilo CSS del cuerpo                    | object | —                  | { padding: '20px' } |
| shadow     | Cuando mostrar la sombra del Card | string | always / hover / never | always          |
