## Result

Used to give feedback on the result of user's operation or access exception.

### Basic usage

:::demo

```html
<kui-row>
  <kui-col :sm="12" :lg="6">
    <kui-result icon="success" title="Success Tip" subTitle="Please follow the instructions">
      <template slot="extra">
        <kui-button type="primary" size="medium">Back</kui-button>
      </template>
    </kui-result>
  </kui-col>
  <kui-col :sm="12" :lg="6">
    <kui-result icon="warning" title="Warning Tip" subTitle="Please follow the instructions">
      <template slot="extra">
        <kui-button type="primary" size="medium">Back</kui-button>
      </template>
    </kui-result>
  </kui-col>
  <kui-col :sm="12" :lg="6">
    <kui-result icon="error" title="Error Tip" subTitle="Please follow the instructions">
      <template slot="extra">
        <kui-button type="primary" size="medium">Back</kui-button>
      </template>
    </kui-result>
  </kui-col>
  <kui-col :sm="12" :lg="6">
    <kui-result icon="info" title="Info Tip" subTitle="Please follow the instructions">
      <template slot="extra">
        <kui-button type="primary" size="medium">Back</kui-button>
      </template>
    </kui-result>
  </kui-col>
</kui-row>
```

:::

### Customized content

:::demo

```html
<kui-result title="404" subTitle="Sorry, request error">
  <template slot="icon">
    <kui-image src="https://shadow.elemecdn.com/app/karman/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></kui-image>
  </template>
  <template slot="extra">
    <kui-button type="primary" size="medium">Back</kui-button>
  </template>
</kui-result>
```

:::

### Result Attributes

| Attribute     | Description    | Type            | Accepted Values      | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| title          | title         | string  |          —             |    —     |
| sub-title    | sub title  | string | — |    —  |
| icon  | icon type    | string  |    success / warning / info / error  |  info |

### Result Slots

| Name | Description |
|------|--------|
| icon | custom icon  |
| title | custom title     |
| subTitle | custom sub title     |
| extra | custom  extra area    |
