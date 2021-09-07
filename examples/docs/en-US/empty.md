## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<kui-empty description="description"></kui-empty>
```
:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<kui-empty image="https://picsum.photos/400/230?blur=5"></kui-empty>
```
:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<kui-empty :image-size="200"></kui-empty>
```
:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo
```html
<kui-empty>
  <kui-button type="primary">Button</kui-button>
</kui-empty>
```
:::

### Empty Attributes
| Attribute       | Description      | Type         | Acceptable Value    | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| image          | image URL       | string  |          —             |    —     |
| image-size    | image size (width)  | number | — |    —  |
| description  | description    | string  |    —  |  — |

### Empty Slots

| Name | Description |
|------|--------|
| default | Custom bottom content  |
| image | Custom image     |
| description | Custom description     |
