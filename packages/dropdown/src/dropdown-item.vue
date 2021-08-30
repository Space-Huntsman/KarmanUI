<template>
  <li
    class="kui-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'kui-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'karman-ui/src/mixins/emitter';

  export default {
    name: 'KuiDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('KuiDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
