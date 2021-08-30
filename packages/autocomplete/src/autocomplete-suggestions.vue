<template>
  <transition name="kui-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="kui-autocomplete-suggestion kui-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <kui-scrollbar
        tag="ul"
        wrap-class="kui-autocomplete-suggestion__wrap"
        view-class="kui-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="kui-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </kui-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'karman-ui/src/utils/vue-popper';
  import Emitter from 'karman-ui/src/mixins/emitter';
  import KuiScrollbar from 'karman-ui/packages/scrollbar';

  export default {
    components: { KuiScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'KuiAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('KuiAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.kui-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
