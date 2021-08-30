<template>
  <div class="kui-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`kui-collapse-content-${id}`"
      :aria-describedby ="`kui-collapse-content-${id}`"
    >
      <div
        class="kui-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`kui-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="kui-collapse-item__arrow kui-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <kui-collapse-transition>
      <div
        class="kui-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`kui-collapse-head-${id}`"
        :id="`kui-collapse-content-${id}`"
      >
        <div class="kui-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </kui-collapse-transition>
  </div>
</template>
<script>
  import KuiCollapseTransition from 'karman-ui/src/transitions/collapse-transition';
  import Emitter from 'karman-ui/src/mixins/emitter';
  import { generateId } from 'karman-ui/src/utils/util';

  export default {
    name: 'KuiCollapseItem',

    componentName: 'KuiCollapseItem',

    mixins: [Emitter],

    components: { KuiCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('KuiCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('KuiCollapse', 'item-click', this);
      }
    }
  };
</script>
