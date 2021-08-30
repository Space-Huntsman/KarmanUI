## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <kui-link href="https://karman.eleme.io" target="_blank">default</kui-link>
  <kui-link type="primary">primary</kui-link>
  <kui-link type="success">success</kui-link>
  <kui-link type="warning">warning</kui-link>
  <kui-link type="danger">danger</kui-link>
  <kui-link type="info">info</kui-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <kui-link disabled>default</kui-link>
  <kui-link type="primary" disabled>primary</kui-link>
  <kui-link type="success" disabled>success</kui-link>
  <kui-link type="warning" disabled>warning</kui-link>
  <kui-link type="danger" disabled>danger</kui-link>
  <kui-link type="info" disabled>info</kui-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <kui-link :underline="false">Without Underline</kui-link>
  <kui-link>With Underline</kui-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <kui-link icon="kui-icon-edit">Edit</kui-link>
  <kui-link>Check<i class="kui-icon-view kui-icon--right"></i> </kui-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
