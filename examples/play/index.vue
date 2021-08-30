<template>
  <div style="margin: 20px;">
    <kui-input v-model="input" placeholder="请输入内容"></kui-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Karman UI!'
      };
    }
  };
</script>
