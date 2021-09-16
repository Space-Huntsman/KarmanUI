## OrbitElements 轨道根数

针对开普勒轨道根数的表单输入以及显示

### 表单输入

:::demo

```html

<template>
    <div>
        <kui-orbit-elements v-model="orbitData" size="medium" :label-width="110"
                            label-align="left" @change="changeHandle" label-position="left" :col-in-row-count="2"
                            :high-precision="true">
        </kui-orbit-elements>
        <kui-divider>输出</kui-divider>
        <pre>{{ orbitData }}</pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: 'Hello Karman UI!',
                orbitData: {
                    a: 42165507.868,
                    e: 0.000373,
                    i: 4.812524,
                    o: 297.738616,
                    w: 210.855082,
                    m: 202.928973,
                    dateTime: '2021-08-27 00:45:46.6460'
                }
            };
        },
        methods: {
            changeHandle(value) {
                console.log('轨道根数已发生改变', value)
            }
        }
    };
</script>

```

:::

### 排版

拥有自由灵活的排版方式，可根据实际容器宽度进行调整
:::demo

```html

<template>
    <div>
        <kui-divider>标题居上单行排版</kui-divider>
        <kui-orbit-elements v-model="orbitData" size="mini"
                            label-align="left" @change="changeHandle" label-position="top" :col-in-row-count="9"
                            :high-precision="true">
        </kui-orbit-elements>
        <kui-alert show-icon :closable="false" type="success">
            `:col-in-row-count="9"` 参数的设置有效的将每个要素分为1/9宽度，但要注意的是历元时间字段的宽度不会被其影响
        </kui-alert>
        <kui-divider>2列居左排版</kui-divider>
        <kui-orbit-elements v-model="orbitData" size="mini" :label-width="130"
                            label-align="left" @change="changeHandle" label-position="left" :col-in-row-count="2"
                            :high-precision="true">
            <template slot="label-a">半长轴(km)</template>
            <template slot="label-date">UTC时刻</template>
        </kui-orbit-elements>
        <kui-divider>2列顶部标题排版</kui-divider>
        <kui-orbit-elements v-model="orbitData2" size="mini" :label-width="110"
                            label-align="left" @change="changeHandle" label-position="top" :col-in-row-count="2"
                            :high-precision="false">
        </kui-orbit-elements>
        <kui-divider>3列居左排版</kui-divider>
        <kui-orbit-elements v-model="orbitData" :read-only="false" :label-width="130"
                            label-align="left" @change="changeHandle" label-position="left" :col-in-row-count="3"
                            :high-precision="true">
        </kui-orbit-elements>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: 'Hello Karman UI!',
                orbitData: {
                    a: 42165507.868,
                    e: 0.000373,
                    i: 4.812524,
                    o: 297.738616,
                    w: 210.855082,
                    m: 202.928973,
                    dateTime: '2021-08-27 00:45:46.6460'
                }
            };
        },
        methods: {
            changeHandle(value) {
                console.log('轨道根数已发生改变', value)
            }
        }
    };
</script>

```

:::

### 显示

显示有多种选项，同时可选择是否显示边框
:::demo

```html

<template>
    <div>
        <kui-alert show-icon :closable="false" type="error">:col-in-row-count="9"
            设置 `label-position="left"`的情况下`col-in-row-count`尽量不要大于3，否则会显示异常
        </kui-alert>
        <kui-divider>两列显示</kui-divider>
        <kui-orbit-elements v-model="orbitData" size="medium" :read-only="true" :label-width="130"
                            label-align="left" @change="changeHandle" label-position="left" :col-in-row-count="3"
                            :high-precision="true">
        </kui-orbit-elements>
        <kui-divider>两列显示</kui-divider>
        <kui-orbit-elements v-model="orbitData" size="mini" :read-only="true" :label-width="130"
                            label-align="left" @change="changeHandle" label-position="top" :col-in-row-count="8"
                            :high-precision="false">
        </kui-orbit-elements>
        <kui-divider>带边框三列 标题靠右</kui-divider>
        <kui-orbit-elements v-model="orbitData" show-border size="medium" :read-only="true" :label-width="130"
                            label-align="right" @change="changeHandle" label-position="left" :col-in-row-count="3"
                            :high-precision="true">
        </kui-orbit-elements>
        <kui-divider>带边框</kui-divider>
        <kui-orbit-elements v-model="orbitData" show-border size="medium" :read-only="true" :label-width="110"
                            @change="changeHandle" label-position="top" :col-in-row-count="3" :high-precision="true">
        </kui-orbit-elements>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: 'Hello Karman UI!',
                orbitData: {
                    a: 42165507.868,
                    e: 0.000373,
                    i: 4.812524,
                    o: 297.738616,
                    w: 210.855082,
                    m: 202.928973,
                    dateTime: '2021-08-27 00:45:46.6460'
                },
                orbitData2: {
                    a: 42165507.868,
                    e: 0.000373,
                    i: 4.812524,
                    o: 297.738616,
                    w: 210.855082,
                    m: 202.928973,
                    dateTime: '2021-08-27 00:45:46'
                }
            };
        },
        methods: {
            changeHandle(value) {
                console.log('轨道根数已发生改变', value)
            }
        }
    };
</script>

```

:::

### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 双向绑定轨道根数 | Object | -- | ```{a: null,e: null,i: null,o: null, w: null, m: null, dateTime: null}```|
| show-border | 是否显示边框 | Boolean | true/false | false |
| read-only | 是否只读，只读的情况下不显示表单，为纯文本方式 | Boolean | true/false | false |
| col-in-row-count| 一行的列数，用于设置每个根数占一行的比例，此设置对历元时刻没有绝对效果 | Number | -- | 1 |
| label-position| 标题位置 | String  | left / right / center |top|
| label-width| 标题宽度，单位px  | Number | -- | 120 |
| label-align| 标题排版  | String | left / right / center | left |
| size| 尺寸  | String | medium / small / mini | medium |
| gutter| 显示间隔  | Number | -- | 0 |
| show-date| 是否显示历元时刻 | Boolean | true/false | false |
| precision | e / i / Ω / ω / M 根数小数精度 | Number | -- | 6 |
| precision-a | 半长轴(a)根数小数精度，如果是千米，建议设置为6位 | Number | -- | 3 |
| high-precision | 使用高精度历元时刻，开启后格式如下 '2021-08-27 00:45:46.6460' | Boolean |  true/false | true |

### Events

| 事件      | 事件说明          | 回调参数 |
|---------- |--------------  |-------- |
|change|值改变事件|```{a: null,e: null,i: null,o: null, w: null, m: null, dateTime: null}```|

### Slots
| name         | 说明 |
|---------- |-------- |
|label-a|轨道半长轴a 标题|
|label-e|轨道偏心率e 标题|
|label-i|轨道倾角i(°) 标题|
|label-o|升交点赤经Ω(°) 标题|
|label-w|近地点幅角ω(°) 标题|
|label-m|平近点角M(°) 标题|
|label-date|历元时刻 标题|
