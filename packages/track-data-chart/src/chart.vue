<template>
  <div class="kui-track-data-chart-container" :ref="`REF__Container`">
  </div>
</template>

<script>
import * as eChart from 'echarts';

export default {
  props: {
    config: {
      default: null,
      type: Object
    }
  }, data() {
    return {
      chart: null
    };
  },
  watch: {
    config: {
      handler() {
        this.$nextTick(() => {
          this.setChart();
        });
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setChart();
    });
  },
  destroyed() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    setChart() {
      if (this.chart === null) {
        this.chart = eChart.init(this.$refs.REF__Container, this.config || {
          title: {
            text: ''
          },
          tooltip: {},
          xAxis: {
            data: []
          },
          yAxis: {},
          series: [
            {
              name: '',
              type: '',
              data: []
            }
          ]
        });
      } else {
        this.chart.setOption(this.config);
      }
    }
  }
};
</script>

<style scoped>

</style>
