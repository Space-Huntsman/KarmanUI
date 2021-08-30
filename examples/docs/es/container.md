## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<kui-container>`: Contenedor. Cuando este karmano se anida con un `<kui-header>` o `<kui-footer>`, todos los karmanos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal. 

`<kui-header>`: Contenedor para cabeceras.

`<kui-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<kui-main>`: Contenedor para sección principal.

`<kui-footer>`: Contenedor para pie de página.

:::tip
Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los karmanos directos de `<kui-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el karmano padre de los últimos cuatro componentes debe ser un `<kui-container>`.
:::

### Diseños comunes

:::demo
```html
<kui-container>
  <kui-header>Cabecera</kui-header>
  <kui-main>Principal</kui-main>
</kui-container>

<kui-container>
  <kui-header>Cabecera</kui-header>
  <kui-main>Principal</kui-main>
  <kui-footer>Pie de página</kui-footer>
</kui-container>

<kui-container>
  <kui-aside width="200px">Barra lateral</kui-aside>
  <kui-main>Principal</kui-main>
</kui-container>

<kui-container>
  <kui-header>Cabecera</kui-header>
  <kui-container>
    <kui-aside width="200px">Barra lateral</kui-aside>
    <kui-main>Principal</kui-main>
  </kui-container>
</kui-container>

<kui-container>
  <kui-header>Cabecera</kui-header>
  <kui-container>
    <kui-aside width="200px">Barra lateral</kui-aside>
    <kui-container>
      <kui-main>Principal</kui-main>
      <kui-footer>Pie de página</kui-footer>
    </kui-container>
  </kui-container>
</kui-container>

<kui-container>
  <kui-aside width="200px">Barra lateral</kui-aside>
  <kui-container>
    <kui-header>Cabecera</kui-header>
    <kui-main>Principal</kui-main>
  </kui-container>
</kui-container>

<kui-container>
  <kui-aside width="200px">Barra lateral</kui-aside>
  <kui-container>
    <kui-header>Cabecera</kui-header>
    <kui-main>Principal</kui-main>
    <kui-footer>Pie de página</kui-footer>
  </kui-container>
</kui-container>

<style>
  .kui-header, .kui-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .kui-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .kui-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .kui-container {
    margin-bottom: 40px;
  }
  
  .kui-container:nth-child(5) .kui-aside,
  .kui-container:nth-child(6) .kui-aside {
    line-height: 260px;
  }
  
  .kui-container:nth-child(7) .kui-aside {
    line-height: 320px;
  }
</style>
```
:::

### Ejemplo

:::demo
```html
<kui-container style="height: 500px; border: 1px solid #eee">
  <kui-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <kui-menu :default-openeds="['1', '3']">
      <kui-submenu index="1">
        <template slot="title"><i class="kui-icon-message"></i>Navigator One</template>
        <kui-menu-item-group>
          <template slot="title">Group 1</template>
          <kui-menu-item index="1-1">Option 1</kui-menu-item>
          <kui-menu-item index="1-2">Option 2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="Group 2">
          <kui-menu-item index="1-3">Option 3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="1-4">
          <template slot="title">Option4</template>
          <kui-menu-item index="1-4-1">Option 4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
      <kui-submenu index="2">
        <template slot="title"><i class="kui-icon-menu"></i>Navigator Two</template>
        <kui-menu-item-group>
          <template slot="title">Group 1</template>
          <kui-menu-item index="2-1">Option 1</kui-menu-item>
          <kui-menu-item index="2-2">Option 2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="Group 2">
          <kui-menu-item index="2-3">Option 3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="2-4">
          <template slot="title">Option 4</template>
          <kui-menu-item index="2-4-1">Option 4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
      <kui-submenu index="3">
        <template slot="title"><i class="kui-icon-setting"></i>Navigator Three</template>
        <kui-menu-item-group>
          <template slot="title">Group 1</template>
          <kui-menu-item index="3-1">Option 1</kui-menu-item>
          <kui-menu-item index="3-2">Option 2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="Group 2">
          <kui-menu-item index="3-3">Option 3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="3-4">
          <template slot="title">Option 4</template>
          <kui-menu-item index="3-4-1">Option 4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
    </kui-menu>
  </kui-aside>
  
  <kui-container>
    <kui-header style="text-align: right; font-size: 12px">
      <kui-dropdown>
        <i class="kui-icon-setting" style="margin-right: 15px"></i>
        <kui-dropdown-menu slot="dropdown">
          <kui-dropdown-item>View</kui-dropdown-item>
          <kui-dropdown-item>Add</kui-dropdown-item>
          <kui-dropdown-item>Delete</kui-dropdown-item>
        </kui-dropdown-menu>
      </kui-dropdown>
      <span>Tom</span>
    </kui-header>
    
    <kui-main>
      <kui-table :data="tableData">
        <kui-table-column prop="date" label="Date" width="140">
        </kui-table-column>
        <kui-table-column prop="name" label="Name" width="120">
        </kui-table-column>
        <kui-table-column prop="address" label="Address">
        </kui-table-column>
      </kui-table>
    </kui-main>
  </kui-container>
</kui-container>

<style>
  .kui-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .kui-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para karmanos secundarios | string | horizontal / vertical | vertical cuando el karmano está anidado con `kui-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |
