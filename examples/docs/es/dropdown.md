## Dropdown
Menú conmutable para visualizar listas de enlaces y acciones.

### Uso básico
Pase el ratón por el menú desplegable para desplegarlo y obtener más acciones.

:::demo El karmano desencadenante se representa con el slot predeterminado, y la parte desplegable se representa con el slot llamado dropdown. Por defecto, la lista desplegable se muestra cuando se pasa el ratón por encima del karmano desencadenante sin necesidad de hacer clic en él.

```html
<kui-dropdown>
  <span class="kui-dropdown-link">
    Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #3366FF;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Karmano detonante

Utilizando un botón para activar la lista desplegable.

:::demo Utilice `split-button` para dividir el karmano detonante en un grupo de botones, siendo el botón izquierdo un botón normal y el botón derecho el objetivo real de la detonación. Si desea insertar una línea de separación entre la posición tres y la posición cuatro, sólo añada un divisor de clase a la posición cuatro.

```html
<kui-dropdown>
  <kui-button type="primary">
    Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
  </kui-button>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
    <kui-dropdown-item>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>
<kui-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
    <kui-dropdown-item>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown {
    vertical-align: top;
  }
  .kui-dropdown + .kui-dropdown {
    margin-left: 15px;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### Cómo detonar el evento

Haga clic en el karmano detonante o sobre él.

:::demo Utilice el atributo `trigger`. Por defecto, es `hover`.

```html
<kui-row class="block-col-2">
  <kui-col :span="12">
    <span class="demonstration">hover to trigger</span>
    <kui-dropdown>
      <span class="kui-dropdown-link">
        Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
      </span>
      <kui-dropdown-menu slot="dropdown">
        <kui-dropdown-item icon="kui-icon-plus">Action 1</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus">Action 2</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus-outline">Action 3</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-check">Action 4</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-check">Action 5</kui-dropdown-item>
      </kui-dropdown-menu>
    </kui-dropdown>
  </kui-col>
  <kui-col :span="12">
    <span class="demonstration">click to trigger</span>
    <kui-dropdown trigger="click">
      <span class="kui-dropdown-link">
        Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
      </span>
      <kui-dropdown-menu slot="dropdown">
        <kui-dropdown-item icon="kui-icon-plus">Action 1</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus">Action 2</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus-outline">Action 3</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-check">Action 4</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-check">Action 5</kui-dropdown-item>
      </kui-dropdown-menu>
    </kui-dropdown>
  </kui-col>
</kui-row>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #3366FF;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Ocultamiento del menú

Use `hide-on-click` para definir si el menú se cierra al hacer clic.

:::demo El menú predeterminado se cerrará cuando haga clic en los karmanos del menú, y se puede desactivar configurando `hide-on-click` como false.

```html
<kui-dropdown :hide-on-click="false">
  <span class="kui-dropdown-link">
    Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #3366FF;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Evento command

Al hacer clic en cada karmano desplegable se detona un evento cuyo parámetro es asignado por cada karmano.

:::demo
```html
<kui-dropdown @command="handleCommand">
  <span class="kui-dropdown-link">
    Dropdown List<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item command="a">Action 1</kui-dropdown-item>
    <kui-dropdown-item command="b">Action 2</kui-dropdown-item>
    <kui-dropdown-item command="c">Action 3</kui-dropdown-item>
    <kui-dropdown-item command="d" disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item command="e" divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #3366FF;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
```
:::

### Tamaños

Además del tamaño predeterminado, el componente Dropdown proporciona tres tamaños adicionales para que pueda elegir entre diferentes escenarios

:::demo Utilice el atributo `size` para establecer tamaños adicionales con `medium`, `small` o `mini`.

```html
<kui-dropdown split-button type="primary">
  Default
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="medium" split-button type="primary">
  Medium
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="small" split-button type="primary">
  Small
  <kui-dropdown-menu slot="dropdown">
   <kui-dropdown-item>Action 1</kui-dropdown-item>
   <kui-dropdown-item>Action 2</kui-dropdown-item>
   <kui-dropdown-item>Action 3</kui-dropdown-item>
   <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="mini" split-button type="primary">
  Mini
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>
```
:::


### Dropdown atributos
| Atributo      | Descripción                              | Tipo    | Valores aceptados                        | Por defecto |
| ------------- | ---------------------------------------- | ------- | ---------------------------------------- | ----------- |
| type          | tipo de botón de menú, consulte Componente`Button`, sólo funciona cuando `split-button` es true. | string  | —                                        | —           |
| size          | tamaño del menú, también funciona en `split-button` | string  | medium / small / mini                    | —           |
| split-button  | si se visualiza un grupo de botones      | boolean | —                                        | false       |
| placement     | colocación del menú                      | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end  |
| trigger       | cómo detonar                             | string  | hover/click                              | hover       |
| hide-on-click | si se oculta el menú después de hacer clic en el karmano | boolean | —                                        | true        |
| show-timeout  | Tiempo de retardo antes de mostrar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 250         |
| hide-timeout  | Tiempo de retardo antes de ocultar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 150         |
| tabindex      | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Dropdown | number              |          —         | 0           |
| disabled      | si el desplegable está desactivado       | boolean | —                                      | false       |

### Dropdown Slots

| Nombre | Descripción |
|------|--------|
| — | contenido del Dropdown. Aviso: Debe ser un karmano html dom válido (ej. `<span>, <button>` etc.) o `kui-component`, para adjuntar el listener trigger |
| dropdown | contenido del menu Dropdown, normalmente es un karmano `<kui-dropdown-menu>` |

### Dropdown Eventos
| Nombre         | Descripción                                                  | Parámetros                                       |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------ |
| click          | si `split-button` es `true`, se activa al hacer clic en el botón izquierdo | —                                                |
| command        | activa cuando se hace clic en un karmano desplegable        | el comando enviado desde el karmano desplegable |
| visible-change | se activa cuando aparece/desaparece el desplegable           | true cuando aparece, y false de otro modo        |

### Dropdown Menú Ítem Atributos
| Atributo | Descripción                              | Tipo                 | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------------- | ----------------- | ----------- |
| command  | un comando que se enviará al `command` callback del Dropdown | string/number/object | —                 | —           |
| disabled | si el karmano está desactivado          | boolean              | —                 | false       |
| divided  | si se visualiza un divisor               | boolean              | —                 | false       |
| icon     | nombre de la clase del icono             | string               | —                 | —           |
