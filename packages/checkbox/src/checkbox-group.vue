<script>
  import Emitter from 'karman-ui/src/mixins/emitter';

  export default {
    name: 'KuiCheckboxGroup',

    componentName: 'KuiCheckboxGroup',

    mixins: [Emitter],

    inject: {
      elFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$KARMAN || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('KuiFormItem', 'el.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="kui-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
