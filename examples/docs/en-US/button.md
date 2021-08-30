## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<kui-row>
  <kui-button>Default</kui-button>
  <kui-button type="primary">Primary</kui-button>
  <kui-button type="success">Success</kui-button>
  <kui-button type="info">Info</kui-button>
  <kui-button type="warning">Warning</kui-button>
  <kui-button type="danger">Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain>Plain</kui-button>
  <kui-button type="primary" plain>Primary</kui-button>
  <kui-button type="success" plain>Success</kui-button>
  <kui-button type="info" plain>Info</kui-button>
  <kui-button type="warning" plain>Warning</kui-button>
  <kui-button type="danger" plain>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button round>Round</kui-button>
  <kui-button type="primary" round>Primary</kui-button>
  <kui-button type="success" round>Success</kui-button>
  <kui-button type="info" round>Info</kui-button>
  <kui-button type="warning" round>Warning</kui-button>
  <kui-button type="danger" round>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button icon="kui-icon-search" circle></kui-button>
  <kui-button type="primary" icon="kui-icon-edit" circle></kui-button>
  <kui-button type="success" icon="kui-icon-check" circle></kui-button>
  <kui-button type="info" icon="kui-icon-message" circle></kui-button>
  <kui-button type="warning" icon="kui-icon-star-off" circle></kui-button>
  <kui-button type="danger" icon="kui-icon-delete" circle></kui-button>
</kui-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<kui-row>
  <kui-button disabled>Default</kui-button>
  <kui-button type="primary" disabled>Primary</kui-button>
  <kui-button type="success" disabled>Success</kui-button>
  <kui-button type="info" disabled>Info</kui-button>
  <kui-button type="warning" disabled>Warning</kui-button>
  <kui-button type="danger" disabled>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain disabled>Plain</kui-button>
  <kui-button type="primary" plain disabled>Primary</kui-button>
  <kui-button type="success" plain disabled>Success</kui-button>
  <kui-button type="info" plain disabled>Info</kui-button>
  <kui-button type="warning" plain disabled>Warning</kui-button>
  <kui-button type="danger" plain disabled>Danger</kui-button>
</kui-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<kui-button type="text">Text Button</kui-button>
<kui-button type="text" disabled>Text Button</kui-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Karman icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<kui-button type="primary" icon="kui-icon-edit"></kui-button>
<kui-button type="primary" icon="kui-icon-share"></kui-button>
<kui-button type="primary" icon="kui-icon-delete"></kui-button>
<kui-button type="primary" icon="kui-icon-search">Search</kui-button>
<kui-button type="primary">Upload<i class="kui-icon-upload kui-icon-right"></i></kui-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<kui-button-group>` to group your buttons.

```html
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-arrow-left">Previous Page</kui-button>
  <kui-button type="primary">Next Page<i class="kui-icon-arrow-right kui-icon-right"></i></kui-button>
</kui-button-group>
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-edit"></kui-button>
  <kui-button type="primary" icon="kui-icon-share"></kui-button>
  <kui-button type="primary" icon="kui-icon-delete"></kui-button>
</kui-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<kui-button type="primary" :loading="true">Loading</kui-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<kui-row>
  <kui-button>Default</kui-button>
  <kui-button size="medium">Medium</kui-button>
  <kui-button size="small">Small</kui-button>
  <kui-button size="mini">Mini</kui-button>
</kui-row>
<kui-row>
  <kui-button round>Default</kui-button>
  <kui-button size="medium" round>Medium</kui-button>
  <kui-button size="small" round>Small</kui-button>
  <kui-button size="mini" round>Mini</kui-button>
</kui-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |
