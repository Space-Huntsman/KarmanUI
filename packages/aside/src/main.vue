<template>
  <aside class="kui-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'KuiAside',

    componentName: 'KuiAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
