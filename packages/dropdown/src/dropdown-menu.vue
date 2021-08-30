<template>
  <transition name="kui-zoom-in-top" @after-leave="doDestroy">
    <ul class="kui-dropdown-menu kui-popper" :class="[size && `kui-dropdown-menu--${size}`]" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from 'karman-ui/src/utils/vue-popper';

  export default {
    name: 'KuiDropdownMenu',

    componentName: 'KuiDropdownMenu',

    mixins: [Popper],

    props: {
      visibleArrow: {
        type: Boolean,
        default: true
      },
      arrowOffset: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        size: this.dropdown.dropdownSize
      };
    },

    inject: ['dropdown'],

    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },

    mounted() {
      this.dropdown.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.dropdown.$el;
      // compatible with 2.6 new v-slot syntax
      // issue link https://github.com/spaceHuntsman/karman/issues/14345
      this.dropdown.initDomOperation();
    },

    watch: {
      'dropdown.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        }
      }
    }
  };
</script>
