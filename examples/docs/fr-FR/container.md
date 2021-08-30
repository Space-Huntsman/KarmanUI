## Container
Les composants Container servent à structurer la page:

`<kui-container>`: Conteneur de wrapping. Quand il est placé à l'intérieur de `<kui-header>` ou `<kui-footer>`, tous les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.

`<kui-header>`: Conteneur pour headers.

`<kui-aside>`: Conteneur pour section latérale (en général un menu).

`<kui-main>`: Conteneur pour la section principal.

`<kui-footer>`: Conteneur pour footers.

:::tip
Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de `<kui-container>` doivent être un des quatre éléments précédents, leur élément père devant obligatoirement être `<kui-container>`.
:::

### Mises en page habituelles

:::demo
```html
<kui-container>
  <kui-header>Header</kui-header>
  <kui-main>Main</kui-main>
</kui-container>

<kui-container>
  <kui-header>Header</kui-header>
  <kui-main>Main</kui-main>
  <kui-footer>Footer</kui-footer>
</kui-container>

<kui-container>
  <kui-aside width="200px">Aside</kui-aside>
  <kui-main>Main</kui-main>
</kui-container>

<kui-container>
  <kui-header>Header</kui-header>
  <kui-container>
    <kui-aside width="200px">Aside</kui-aside>
    <kui-main>Main</kui-main>
  </kui-container>
</kui-container>

<kui-container>
  <kui-header>Header</kui-header>
  <kui-container>
    <kui-aside width="200px">Aside</kui-aside>
    <kui-container>
      <kui-main>Main</kui-main>
      <kui-footer>Footer</kui-footer>
    </kui-container>
  </kui-container>
</kui-container>

<kui-container>
  <kui-aside width="200px">Aside</kui-aside>
  <kui-container>
    <kui-header>Header</kui-header>
    <kui-main>Main</kui-main>
  </kui-container>
</kui-container>

<kui-container>
  <kui-aside width="200px">Aside</kui-aside>
  <kui-container>
    <kui-header>Header</kui-header>
    <kui-main>Main</kui-main>
    <kui-footer>Footer</kui-footer>
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

### Exemple

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

### Attributs de Container
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Direction d'affichage pour les éléments enfants. | string | horizontal / vertical | vertical quand dans `kui-header` ou `kui-footer`; horizontal sinon |

### Attributs de Header
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du header. | string | — | 60px |

### Attributs de Aside
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largeur de la section. | string | — | 300px |

### Attributs de Footer
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du footer. | string | — | 60px |
