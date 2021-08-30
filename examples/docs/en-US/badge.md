## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<kui-badge :value="12" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="3" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>
<kui-badge :value="1" class="item" type="primary">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="2" class="item" type="warning">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<kui-dropdown trigger="click">
  <span class="kui-dropdown-link">
    Click Me<i class="kui-icon-caret-bottom kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item class="clearfix">
      comments
      <kui-badge class="mark" :value="12" />
    </kui-dropdown-item>
    <kui-dropdown-item class="clearfix">
      replies
      <kui-badge class="mark" :value="3" />
    </kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<kui-badge :value="200" :max="99" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge :value="100" :max="10" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<kui-badge value="new" class="item">
  <kui-button size="small">comments</kui-button>
</kui-badge>
<kui-badge value="hot" class="item">
  <kui-button size="small">replies</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<kui-badge is-dot class="item">query</kui-badge>
<kui-badge is-dot class="item">
  <kui-button class="share-button" icon="kui-icon-share" type="primary"></kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
