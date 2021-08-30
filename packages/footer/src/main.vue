<template>
  <footer class="kui-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'KuiFooter',

    componentName: 'KuiFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
