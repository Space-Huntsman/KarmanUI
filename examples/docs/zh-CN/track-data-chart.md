## TrackDataChart 外测数据图表

### 示例程序

图标中包含 角速度、测距、方位角、俯仰角 的趋势展示,因为需要从github上获取mock数据，为了避免多次请求，所以示例写在了一起。
:::demo

```html

<template>
    <div v-loading="loading">
        <kui-divider>图表</kui-divider>
        <kui-track-data-chart :start-time="startTime" :range-data="data.range" :range-rate-data="data.rangeRate"
                              :azimuth-data="data.azimuth" :elevation-data="data.elevation"/>
        <kui-divider>单行显示</kui-divider>

        <kui-track-data-chart :col-count="4" :chart-height="200" :start-time="startTime" :range-data="data.range"
                              :range-rate-data="data.rangeRate"
                              :azimuth-data="data.azimuth" :elevation-data="data.elevation"/>
        <kui-divider>暗黑风格</kui-divider>
        <kui-track-data-chart dark-mode :start-time="startTime"
                              :range-data="data.range"
                              :range-rate-data="data.rangeRate" :azimuth-data="data.azimuth"
                              :elevation-data="data.elevation"/>
        <kui-divider>调整线条颜色</kui-divider>
        <kui-track-data-chart :border="false" :chart-overwrite-options="{color:['#E6A23C']}"
                              :chart-height="240" :start-time="startTime"
                              :range-data="data.range"
                              :range-rate-data="data.rangeRate" :azimuth-data="data.azimuth"
                              :elevation-data="data.elevation"/>
        <kui-divider>无边框</kui-divider>
        <kui-track-data-chart :border="false" :chart-height="240" :chart-overwrite-options="{color:['#67C23A']}"
                              :start-time="startTime"
                              :range-data="data.range"
                              :range-rate-data="data.rangeRate" :azimuth-data="data.azimuth"
                              :elevation-data="data.elevation"/>
        <kui-divider>显示单个图表</kui-divider>
        <kui-track-data-chart :col-count="1" :chart-height="240" :start-time="startTime"
                              :elevation-data="data.elevation"/>
        <kui-divider>显示缩放</kui-divider>
        <kui-track-data-chart :zoom="true" :col-count="3" :chart-height="240" :start-time="startTime"
                              :range-rate-data="data.rangeRate" :azimuth-data="data.azimuth"
                              :elevation-data="data.elevation"/>
        <kui-divider>渐进式</kui-divider>
        <kui-track-data-chart :zoom="false" :chart-overwrite-options="{color:['#F56C6C']}" :col-count="1"
                              :chart-height="240" :start-time="startTime"
                              :elevation-data="elevationStepData"/>
        <kui-divider>图表自定义配置覆盖</kui-divider>
        <kui-track-data-chart :border="false" :chart-overwrite-options="partOptions"
                              :chart-height="240" :start-time="startTime"
                              :range-data="data.range"
                              :range-rate-data="data.rangeRate"
                              :azimuth-data="data.azimuth"
                              :elevation-data="data.elevation"/>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                loading: false,
                data: {},
                startTime: new Date(),
                elevationStepData: [],
                timer: null,
                mockJsonUrl: "https://yudanxxx.oss-cn-zhangjiakou.aliyuncs.com/trackingData.json",
                partOptions: {
                    part: true,
                    part_range: {
                        color: ['#F56C6C'],
                        series: [{
                            type: 'bar'
                        }]
                    },
                    part_rangeRate: {
                        color: ['#67C23A'],
                        backgroundColor: '#101840',
                        title: {
                            textStyle: {
                                color: '#FFFFFF'
                            }
                        }
                    },
                    part_azimuth: {
                        color: ['#3366FF'],
                        backgroundColor: '#E6E8F0'
                    },
                    part_elevation: {
                        color: ['#101840'],
                        backgroundColor: 'rgba(30,255,30,.2)',
                        series: [{
                            type: 'line'
                        }],
                        dataZoom: [
                            {
                                type: 'slider',
                                show: true
                            }
                        ]
                    }
                }
            }
        }, created() {
            this.loading = true;
            this.$axios.get(this.mockJsonUrl).then(res => {
                this.loading = false;
                let {data} = {...res};
                this.data = data;
                this.timer = setInterval(() => {

                    this.elevationStepData = this.data.elevation.slice(0, this.elevationStepData.length + 1)
                    if (this.elevationStepData.length >= this.data.elevation.length) {
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }).catch(e => {
                this.loading = false;
            });
        },
        destroyed() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
</script>
```

:::
:::tip 
chart-overwrite-options 属性可覆盖合并默认的echart 配置，开发者只需要设置自己需要自定义的配置项即可， 当 part为 false 的情况下，组件会直接把跟节点的所有配置项进行全局覆盖，当chart-overwrite-options.part === true 的情况下，我们需要配置每个表单的独立配置，这里只需要在根节点添加 part_${key} 节点即可，此节点内为echart配置, 更高级的配置可以通过this.$ref.refObject.echart
去设置,查看[配置文档](https://echarts.apache.org/zh/option.html)
> 整体自定义配置

``` json

            {
                part: false,//false 的情况下
                color: ['#F56C6C'],
                series: [{
                   type: 'bar'
                   }]
            }
```

> 独立自定义配置
 
``` json

            {
                part: true,//false 的情况下
                part_range: { // 测距图表设置
                    color: ['#F56C6C'],
                    series: [{
                        type: 'line'
                    }]
                },
                part_rangeRate: { // 角速度图表设置
                    color: ['#F56C6C'],
                    series: [{
                        type: 'bar'
                    }]
                },
                part_azimuth:{}//俯仰角
                part_elevation:{}//方向角
            }
```

:::

### Timeline Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| zoom | 开启关闭缩放 | boolean | 否 | false |
| border | 显示边框 | boolean | 否 | true |
| chart-overwrite-options | 图表配置的覆盖，支持整体覆盖和指定覆盖 | boolean | 否 | {} |
| start-time | 数据轴开始时间 | date | 是 | {} |
| time-step | 外测数据之间的时间间隔，单位：秒 | number | 是 | 1 |
| chart-height | 图表高度（px）为了保持美观所有图表高度不允许单独设置 | number | 否 | 240 |
| dark-mode | 黑暗模式 | boolean | 否 | false |
| col-count | 列数 | number | 否 | 2 |
| range-data | 测距数据 | array\<number\>  | 否 | [] |
| range-rate-data  | 角速度数据 | array\<number\> | 否 | [] |
| azimuth-data | 俯仰角数据 | array\<number\>  | 否 | [] |
| elevation-data | 方位角数据 | array\<number\>  | 否 | [] |
| titles | 图表标题 | object | 否 | ``` { range: '测距',rangeRate: '测速', azimuth: '俯仰角',elevation: '方位角'}``` |
| title-style | 图表标题样式 [参考配置文档](https://echarts.apache.org/zh/option.html#title.textStyle)  | object | 否 | ``` {fontSize: 15,color: '#100C2A'} ``` |

:::tip

提示：range-data，range-rate-data，azimuth-data，elevation-data 传入数据则显示，如果希望隐藏某个图表，只需做到不要传入对应的属性（空字符串也不应传入）即可

:::


