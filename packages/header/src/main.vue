<template>
  <header class="kui-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'KuiHeader',

    componentName: 'KuiHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
