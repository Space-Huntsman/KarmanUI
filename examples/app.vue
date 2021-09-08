<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  // import { use } from 'main/locale';
  // import zhLocale from 'main/locale/lang/zh-CN';

  // const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN';
  // const localize = lang => {
  //   switch (lang) {
  //     case 'zh-CN':
  //       use(zhLocale);
  //       break;
  //   }
  // };
  // localize(lang);

  export default {
    name: 'app',

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    watch: {
      lang(val) {
        // localize(val);
      }
    },

    methods: {
    },

    mounted() {
    }
  };
</script>
