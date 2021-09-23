<template>
  <kui-row class="kui-track-data-chart"
  >
    <kui-col v-for="key in Object.keys(config)" :span="24/colCount" :key="key">

      <kui-card shadow="never" title="" :style="cardStyle">
        <chart :config="config[key]" :style="{height:`${chartHeight}px`}"></chart>
      </kui-card>
    </kui-col>

  </kui-row>
</template>

<script>
import chart from './chart';
import {formatDate} from '../../../src/utils/date-util';
import _ from 'lodash';

export default {
  name: 'KuiTrackDataChart',
  components: {
    chart
  },
  methods: {
    generate(key, data) {
      let startTime = this.startTime.getTime();

      let labels = [];

      data.map((item, index) => {

        labels.push(formatDate(new Date(startTime + index * this.timeStep * 1000), 'yyyy-MM-dd HH:mm:ss'));
      });
      let options = {
        darkMode: this.darkMode || this.darkMode === '',
        color: ['#3366FF'],
        backgroundColor: this.darkMode || this.darkMode === '' ? '#100C2A' : 'rgba(255,255,255,0)',
        title: {
          width: '100%',
          text: this.titles[key],
          textStyle: {
            ...this.titleStyle || {
              fontSize: 15,
              color: this.darkMode || this.darkMode === '' ? '#CCCCCC' : '#100C2A'
            }
          },
          textAlign: 'left'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          data: labels,
          type: 'category',
          axisLabel: {
            rotate: 0
          }
        }],
        yAxis: {
          type: 'value',
          align: 'right',
          axisLabel: {
            rotate: 10
          },
          splitLine: {
            show: true
          }
        },
        animation: 'auto',
        animationDuration: 1000,
        animationDurationUpdate: 500,
        animationEasing: 'cubicInOut',
        animationEasingUpdate: 'cubicInOut',
        animationThreshold: 2000,
        series: [
          {
            name: this.titles[key],
            type: 'line',
            data: data
          }
        ]
      };
      if (this.zoom) {
        options.dataZoom = [
          {
            startValue: this.startTime
          }
        ];
      }

      if (this.chartOverwriteOptions.part) {
        // 如果part===true 代表分开覆盖配置 这里要求数据结构必须用 `part_${key}`的键去存储
        if (this.chartOverwriteOptions.hasOwnProperty(`part_${key}`)) {
          this.$set(this.config, key, _.merge(options, this.chartOverwriteOptions[`part_${key}`]));
        } else {
          // 没有覆盖使用默认配置
          this.$set(this.config, key, options);
        }
      } else {
        // 如果是false 会直接覆盖配置
        this.$set(this.config, key, _.merge(options, this.chartOverwriteOptions));
      }
    }
  },
  data() {
    return {
      config: {}

    };
  },
  watch: {
    rangeData(value) {
      this.generate('range', value);
    },
    rangeRateData(value) {
      this.generate('rangeRate', value);
    },
    azimuthData(value) {
      this.generate('azimuth', value);
    },
    elevationData(value) {
      this.generate('elevation', value);
    }
  },
  computed: {
    cardStyle() {
      if (this.darkMode === true || this.darkMode === '') {
        return {
          backgroundColor: '#100C2A',
          border: this.border ? '1px solid rgba(255,255,255,0.12)' : 'none'
        };
      }
      return {backgroundColor: 'rgba(255,255,255,0)', border: this.border ? '1px solid  rgba(0,0,0,0.12)' : 'none'};
    }
  },
  props: {
    zoom: {
      default: false,
      type: Boolean
    },
    border: {
      default: true,
      type: Boolean
    },
    chartOverwriteOptions: {
      default: () => {
        return {};
      },
      type: Object
    },
    startTime: {
      default: null,
      type: Date
    },
    timeStep: {
      default: 1,
      type: Number
    },
    chartHeight: {
      default: 300,
      type: Number
    },
    darkMode: false,
    colCount: {
      default: 2,
      type: Number
    },
    rangeData: {
      default: () => [],
      type: Array
    },
    rangeRateData: {
      default: () => [],
      type: Array
    },
    azimuthData: {
      default: () => [],
      type: Array
    },
    elevationData: {
      default: () => [],
      type: Array
    },
    titles: {
      default: () => {
        return {
          range: '测距',
          rangeRate: '角速度',
          azimuth: '俯仰角',
          elevation: '方位角'
        };
      },
      type: Object
    },
    titleStyle: {
      fontSize: 15,
      color: '#100C2A'
    },
    textAlign: 'left'
  }
};
</script>

