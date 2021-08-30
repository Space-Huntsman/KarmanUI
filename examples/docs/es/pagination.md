## Paginación
Si tiene que mostrar muchos datos en una página, utilice la paginación.

### Uso básico

:::demo Asigne en el atributo `layout` los diferentes karmanos que quiere utilizar separados por coma. Los karmanos de paginación son: `prev` (un botón para navegar a la página anterior), `next` (un botón para navegar a la siguiente página), `pager` (lista de página), `jumper` (un `input` para saltar a una página determinada), `total` (total de karmanos), `size` (un `select` para seleccionar el tamaño de la página ) y `->`(todo karmano situado luego de este símbolo será movido a la derecha).
```html
<div class="block">
  <span class="demonstration">When you have few pages</span>
  <kui-pagination
    layout="prev, pager, next"
    :total="50">
  </kui-pagination>
</div>
<div class="block">
  <span class="demonstration">When you have more than 7 pages</span>
  <kui-pagination
    layout="prev, pager, next"
    :total="1000">
  </kui-pagination>
</div>
```
:::

### Números de paginas

:::demo De forma predeterminada, Pagination colapsa los botones del paginador adicionales cuando tiene más de 7 páginas. Esto se puede configurar con el atributo `pager-count`.
```html
<kui-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</kui-pagination>
```
:::

### Paginación pequeña

Usa una paginación pequeña en caso de espacio limitado.

:::demo Solo ponga el atributo `small` como `true` y la Paginación se volverá pequeña.
```html
<kui-pagination
  small
  layout="prev, pager, next"
  :total="50">
</kui-pagination>
```
:::

### Más karmanos

Agrega más módulos basados en su escenario.

:::demo Este ejemplo es un completo caso de uso. Utiliza los eventos `size-change` y `current-change` para manejar el tamaño de página y el cambio de página. El atributo `page-sizes` acepta un arreglo de enteros, cada uno representa un diferente valor del atributo `sizes` que es un `select`, ejemplo `[100, 200, 300, 400]` indicará que el `select` tendrá las opciones: 100, 200, 300 o 400 karmanos por página.

```html
<template>
  <div class="block">
    <span class="demonstration">Total item count</span>
    <kui-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </kui-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <kui-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </kui-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <kui-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </kui-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <kui-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </kui-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
```

:::
### Oculte la paginación cuando el resultado es solo una pagina simple

Cuando sólo hay una página, oculte la paginación configurando el atributo `hide-on-single-page`.

:::demo
```html
<div>
 <kui-switch v-model="value">
 </kui-switch>
 <kui-pagination
  :hide-on-single-page="value"
  :total="5"
  layout="prev, pager, next">
</kui-pagination>
</div>

<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>
```
:::

### Atributos
| Atributo     | Descripción                              | Tipo     | Valores aceptados                        | Por defecto                            |
| ------------ | ---------------------------------------- | -------- | ---------------------------------------- | -------------------------------------- |
| small        | usar paginación pequeña                  | boolean  | —                                        | false                                  |
| page-size    | cantidad de karmanos por página, soporta el modificador .sync         | number   | —                                        | 10                                     |
| total        | total de karmanos                       | number   | —                                        | —                                      |
| page-count   | total de páginas. Asigna `total` o `page-count` y las páginas serán mostradas; si necesitas `page-sizes`, `total` es **requerido** | number   | —                                        | —                                      |
| pager-count  | número de paginadores. La paginación colapsa cuando el número total de páginas excede este valor. | number | odd number between 5 and 21 | 7 |
| current-page | número actual de la página, soporta el modificador .sync | number   | —                                        | 1                                      |
| layout       | layout de la paginación, karmanos separados por coma | string   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes   | opciones para la cantidad de karmanos por página | number[] | —                                        | [10, 20, 30, 40, 50, 100]              |
| popper-class | clase propia para el `dropdown` del `select` del número de páginas | string   | —                                        | —                                      |
| prev-text    | texto para el botón `prev`               | string   | —                                        | —                                      |
| next-text    | texto para el botón `next`               | string   | —                                        | —                                      |
| disabled     | si Pagination esta disabled              | boolean  | —                                        | false                                  |
| hide-on-single-page | si ocultar cuando sólo hay una página | boolean |—                                 | -                                      |

### Eventos
| Nombre del evento | Descripción                             | Parámetros                    |
| ----------------- | --------------------------------------- | ----------------------------- |
| size-change       | se dispara cuando `page-size` cambia    | nuevo valor de `page-size`    |
| current-change    | se dispara cuando `current-page` cambia | nuevo valor de `current-page` |
| prev-click | Se dispara cuando el botón `prev` recibe el clic y la pagina actual cambia | la nueva pagina actual |
| next-click | Se dispara cuando el botón `next` recibe el clic y la pagina actual cambia | la nueva pagina actual |

### Slot
| Nombre | Descripción                              |
| ------ | ---------------------------------------- |
| —      | Karmano propio. Para utilizar esto necesitas declarar `slot` en el `layout` |
