<template>
  <ul class="kui-select-group__wrap" v-show="visible">
    <li class="kui-select-group__title">{{ label }}</li>
    <li>
      <ul class="kui-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'karman-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'KuiOptionGroup',

    componentName: 'KuiOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('KuiOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('KuiOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
