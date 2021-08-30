<template>
  <i :class="'kui-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'KuiIcon',

    props: {
      name: String
    }
  };
</script>
