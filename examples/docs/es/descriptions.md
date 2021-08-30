## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<kui-descriptions title="User Info">
    <kui-descriptions-item label="Username">kooriookami</kui-descriptions-item>
    <kui-descriptions-item label="Telephone">18100000000</kui-descriptions-item>
    <kui-descriptions-item label="Place">Suzhou</kui-descriptions-item>
    <kui-descriptions-item label="Remarks">
      <kui-tag size="small">School</kui-tag>
    </kui-descriptions-item>
    <kui-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</kui-descriptions-item>
</kui-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <kui-radio-group v-model="size">
    <kui-radio label="">Default</kui-radio>
    <kui-radio label="medium">Medium</kui-radio>
    <kui-radio label="small">Small</kui-radio>
    <kui-radio label="mini">Mini</kui-radio>
  </kui-radio-group>

  <kui-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template slot="extra">
      <kui-button type="primary" size="small">Operation</kui-button>
    </template>
    <kui-descriptions-item>
      <template slot="label">
        <i class="kui-icon-user"></i>
        Username
      </template>
      kooriookami
    </kui-descriptions-item>
    <kui-descriptions-item>
      <template slot="label">
        <i class="kui-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </kui-descriptions-item>
    <kui-descriptions-item>
      <template slot="label">
        <i class="kui-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </kui-descriptions-item>
    <kui-descriptions-item>
      <template slot="label">
        <i class="kui-icon-tickets"></i>
        Remarks
      </template>
      <kui-tag size="small">School</kui-tag>
    </kui-descriptions-item>
    <kui-descriptions-item>
      <template slot="label">
        <i class="kui-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </kui-descriptions-item>
  </kui-descriptions>

  <kui-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template slot="extra">
      <kui-button type="primary" size="small">Operation</kui-button>
    </template>
    <kui-descriptions-item label="Username">kooriookami</kui-descriptions-item>
    <kui-descriptions-item label="Telephone">18100000000</kui-descriptions-item>
    <kui-descriptions-item label="Place">Suzhou</kui-descriptions-item>
    <kui-descriptions-item label="Remarks">
      <kui-tag size="small">School</kui-tag>
    </kui-descriptions-item>
    <kui-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</kui-descriptions-item>
  </kui-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<kui-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <kui-descriptions-item label="Username">kooriookami</kui-descriptions-item>
  <kui-descriptions-item label="Telephone">18100000000</kui-descriptions-item>
  <kui-descriptions-item label="Place" :span="2">Suzhou</kui-descriptions-item>
  <kui-descriptions-item label="Remarks">
    <kui-tag size="small">School</kui-tag>
  </kui-descriptions-item>
  <kui-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</kui-descriptions-item>
</kui-descriptions>

<kui-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <kui-descriptions-item label="Username">kooriookami</kui-descriptions-item>
  <kui-descriptions-item label="Telephone">18100000000</kui-descriptions-item>
  <kui-descriptions-item label="Place" :span="2">Suzhou</kui-descriptions-item>
  <kui-descriptions-item label="Remarks">
    <kui-tag size="small">School</kui-tag>
  </kui-descriptions-item>
  <kui-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</kui-descriptions-item>
</kui-descriptions>
```
:::

### Customized Style

:::demo

```html
<kui-descriptions title="Customized style list" :column="3" border>
  <kui-descriptions-item label="Username" labkui-class-name="my-label" content-class-name="my-content">kooriookami</kui-descriptions-item>
  <kui-descriptions-item label="Telephone">18100000000</kui-descriptions-item>
  <kui-descriptions-item label="Place">Suzhou</kui-descriptions-item>
  <kui-descriptions-item label="Remarks">
    <kui-tag size="small">School</kui-tag>
  </kui-descriptions-item>
  <kui-descriptions-item label="Address" :content-style="{'text-align': 'right'}">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</kui-descriptions-item>
</kui-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |
| colon | change default props colon value of Descriptions Item   | boolean |    —  |  true |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
