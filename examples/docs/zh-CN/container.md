## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<kui-container>`：外层容器。当子元素中包含 `<kui-header>` 或 `<kui-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<kui-header>`：顶栏容器。

`<kui-aside>`：侧边栏容器。

`<kui-main>`：主要区域容器。

`<kui-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<kui-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<kui-container>`。
:::

### 常见页面布局

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

### 实例

:::demo
```html
<kui-container style="height: 500px; border: 1px solid #eee">
  <kui-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <kui-menu :default-openeds="['1', '3']">
      <kui-submenu index="1">
        <template slot="title"><i class="kui-icon-message"></i>导航一</template>
        <kui-menu-item-group>
          <template slot="title">分组一</template>
          <kui-menu-item index="1-1">选项1</kui-menu-item>
          <kui-menu-item index="1-2">选项2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="分组2">
          <kui-menu-item index="1-3">选项3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="1-4">
          <template slot="title">选项4</template>
          <kui-menu-item index="1-4-1">选项4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
      <kui-submenu index="2">
        <template slot="title"><i class="kui-icon-menu"></i>导航二</template>
        <kui-menu-item-group>
          <template slot="title">分组一</template>
          <kui-menu-item index="2-1">选项1</kui-menu-item>
          <kui-menu-item index="2-2">选项2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="分组2">
          <kui-menu-item index="2-3">选项3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="2-4">
          <template slot="title">选项4</template>
          <kui-menu-item index="2-4-1">选项4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
      <kui-submenu index="3">
        <template slot="title"><i class="kui-icon-setting"></i>导航三</template>
        <kui-menu-item-group>
          <template slot="title">分组一</template>
          <kui-menu-item index="3-1">选项1</kui-menu-item>
          <kui-menu-item index="3-2">选项2</kui-menu-item>
        </kui-menu-item-group>
        <kui-menu-item-group title="分组2">
          <kui-menu-item index="3-3">选项3</kui-menu-item>
        </kui-menu-item-group>
        <kui-submenu index="3-4">
          <template slot="title">选项4</template>
          <kui-menu-item index="3-4-1">选项4-1</kui-menu-item>
        </kui-submenu>
      </kui-submenu>
    </kui-menu>
  </kui-aside>
  
  <kui-container>
    <kui-header style="text-align: right; font-size: 12px">
      <kui-dropdown>
        <i class="kui-icon-setting" style="margin-right: 15px"></i>
        <kui-dropdown-menu slot="dropdown">
          <kui-dropdown-item>查看</kui-dropdown-item>
          <kui-dropdown-item>新增</kui-dropdown-item>
          <kui-dropdown-item>删除</kui-dropdown-item>
        </kui-dropdown-menu>
      </kui-dropdown>
      <span>王小虎</span>
    </kui-header>
    
    <kui-main>
      <kui-table :data="tableData">
        <kui-table-column prop="date" label="日期" width="140">
        </kui-table-column>
        <kui-table-column prop="name" label="姓名" width="120">
        </kui-table-column>
        <kui-table-column prop="address" label="地址">
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
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `kui-header` 或 `kui-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
