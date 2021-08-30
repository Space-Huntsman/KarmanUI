## Container
Container components for scaffolding basic structure of the page:

`<kui-container>`: wrapper container. When nested with a `<kui-header>` or `<kui-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<kui-header>`: container for headers.

`<kui-aside>`: container for side sections (usually a side nav).

`<kui-main>`: container for main sections.

`<kui-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<kui-container>`'s direct child elements have to be one or more of the latter four components. And father karman of the latter four components must be a `<kui-container>`.
:::

### Common layouts

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

### Example

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

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `kui-header` or `kui-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |
