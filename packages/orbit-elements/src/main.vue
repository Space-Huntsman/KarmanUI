<template>
  <kui-row class="kui-orbit-elements" :class="[size,`label-position-${labelPosition}`]" :gutter="gutter">
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">
          <slot name="label-a">轨道半长轴a(m)</slot>
        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.a }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precisionA" v-model="value.a" :size="size"
                              placeholder="请输入">
              <span slot="prefix" class="kui-input-number__icon">a</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">

          <slot name="label-e">轨道偏心率e</slot>

        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.e }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precision" v-model="value.e" :size="size" placeholder="请输入">
              <span slot="prefix" class="kui-input-number__icon">e</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">

          <slot name="label-i">轨道倾角i(°)</slot>

        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.i }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precision" v-model="value.i" :size="size" placeholder="请输入">
              <span slot="prefix" class="kui-input-number__icon">i</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">

          <slot name="label-o">升交点赤经Ω(°)</slot>

        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.o }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precision" v-model="value.o" :size="size" placeholder="请输入"><span
                slot="prefix"
                class="kui-input-number__icon">Ω</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">

          <slot name="label-w">近地点幅角ω(°)</slot>

        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.w }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precision" v-model="value.w" :size="size" placeholder="请输入"><span
                slot="prefix"
                class="kui-input-number__icon">ω</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">

          <slot name="label-m">平近点角M(°)</slot>

        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.m }}
          </template>
          <template v-else>
            <kui-input-number :controls="false" :precision="precision" v-model="value.m" :size="size" placeholder="请选择"><span
                slot="prefix"
                class="kui-input-number__icon">M</span>
            </kui-input-number>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
    <kui-col v-if="showDate||showDate===''" :style="colStyle">
      <kui-row class="element-col">
        <kui-col :style="labelColStyle">
          <slot name="label-date">历元时刻(BJT)</slot>
        </kui-col>
        <kui-col :style="inputColStyle">
          <template v-if="inputReadOnly">
            {{ value.dateTime }}
          </template>
          <template v-else>
            <kui-row :gutter="2">
              <kui-col :span="highPrecision?18:24">
                <kui-date-picker v-model="dateTime" type="datetime" placeholder="请选择" :size="size"
                                 clearable></kui-date-picker>
              </kui-col>
              <kui-col :span="6" v-if="highPrecision">
                <kui-input-number :controls="false" :precision="4" :max="0.9999" :min="0" v-model="millisecond"
                                  :size="size"
                                  placeholder="请输入">
                </kui-input-number>
              </kui-col>
            </kui-row>
          </template>
        </kui-col>
      </kui-row>
    </kui-col>
  </kui-row>
</template>

<script>
const valueTpl = {
  a: null,
  e: null,
  i: null,
  o: null, // Ω
  w: null, // ω
  m: null, // M
  dateTime: null
};
import {formatDate} from 'karman-ui/src/utils/date-util';

export default {
  name: 'KuiOrbitElements',
  props: {
    readOnly: false,
    precisionA: {
      default: 3,
      type: Number
    },
    precision: {
      default: 6,
      type: Number
    },
    colInRowCount: {
      default: 7,
      type: Number
    },
    labelAlign: {
      // left / right / center
      default: 'left',
      type: String
    },
    labelWidth: {
      default: 110,
      type: Number
    },
    labelPosition: {
      // top / left
      default: 'top',
      type: String
    },
    inline: {
      default: true,
      type: Boolean
    },
    showDate: {
      default: true,
      type: Boolean
    },
    size: {
      default: 'medium',
      // medium / small / mini
      type: String
    },
    gutter: {
      default: 10,
      type: Number
    },
    highPrecision: {
      default: true,
      type: Boolean
    },
    value: {
      default: () => {
        return {...valueTpl};
      },
      type: Object,
      validator(value) {

        if (!Object.keys(value).includes('a')) {
          console.error('v-model format error', value);
          return false;
        }
        if (!Object.keys(value).includes('e')) {
          console.error('v-model format error', value);
          return false;
        }
        if (!Object.keys(value).includes('i')) {
          console.error('v-model format error', value);
          return false;
        }
        if (!Object.keys(value).includes('w')) {
          console.error('v-model format error', value);
          return false;
        }
        if (!Object.keys(value).includes('m')) {
          console.error('v-model format error', value);
          return false;
        }
        if (!Object.keys(value).includes('dateTime')) {
          console.error('v-model format error', value);
          return false;
        }
        return true;
      }
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal, newVal === oldVal);
        if (oldVal) {
          this.$emit('change', this.value);
        }
        this.initTimeVal();
      }, deep: true,
      immediate: false
    },
    dateTime() {
      this.calcDateVal();
    },
    millisecond() {
      this.calcDateVal();
    }
  },
  mounted() {
    this.initTimeVal();
  },
  methods: {
    initTimeVal() {
      if (!this.value.dateTime) {
        return;
      }
      if (this.highPrecision && this.value.dateTime && /\./.test(this.value.dateTime)) {
        const timeArray = this.value.dateTime.split('.');
        this.dateTime = new Date(timeArray[0]);
        this.millisecond = +timeArray[1] / 10000;
      }
      if (!this.highPrecision) {
        if (this.value.dateTime) {
          if (/\./.test(this.value.dateTime)) {
            const timeArray = this.value.dateTime.split('.');
            this.dateTime = new Date(timeArray[0]);
          } else {
            this.millisecond = new Date(this.value.dateTime);
          }
        }
        this.millisecond = null;
      }
    },
    calcDateVal() {
      if (this.dateTime) {
        if (this.highPrecision) {
          this.$set(this.value, 'dateTime', `${formatDate(this.dateTime, this.format)}.${((this.millisecond * 10000)).toFixed(0)}`);
        } else {
          this.$set(this.value, 'dateTime', `${formatDate(this.dateTime, this.format)}`);
        }

      } else {
        this.$set(this.value, 'dateTime', null);
      }

    }
  },
  data() {
    return {
      dateTime: null,
      millisecond: null,
      format: 'yyyy-MM-dd HH:mm:ss'
    };
  },
  computed: {
    inputReadOnly() {
      return this.readOnly || this.readOnly === '';
    },
    labelColStyle() {
      return {
        width: this.labelPosition === 'top' ? '100%' : `${this.labelWidth}px`, textAlign: this.labelAlign
      };
    },
    inputColStyle() {
      return {
        width: this.labelPosition === 'top' ? '100%' : `calc(100 % - ${this.labelWidth}px - 0.5em)`
      };
    },
    colStyle() {
      return {width: this.inline ? `${this.colInRowCount === 0 ? 100 : 100 / this.colInRowCount}% ` : '100%'};
    }
  }
};
</script>
