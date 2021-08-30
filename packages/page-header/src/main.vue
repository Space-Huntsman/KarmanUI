<template>
  <div class="kui-page-header">
    <div class="kui-page-header__left" @click="$emit('back')">
      <i class="kui-icon-back"></i>
      <div class="kui-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="kui-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'karman-ui/src/locale';
export default {
  name: 'KuiPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
