<template>
  <transition-group
    tag="ul"
    :class="[
      'kui-upload-list',
      'kui-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="kui-list"
  >
    <li
      v-for="file in files"
      :class="['kui-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="kui-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url" alt=""
        >
        <a class="kui-upload-list__item-name" @click="handleClick(file)">
          <i class="kui-icon-document"></i>{{file.name}}
        </a>
        <label class="kui-upload-list__item-status-label">
          <i :class="{
            'kui-icon-upload-success': true,
            'kui-icon-circle-check': listType === 'text',
            'kui-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="kui-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="kui-icon-close-tip" v-if="!disabled">{{ t('lang.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <kui-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)">
        </kui-progress>
        <span class="kui-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span
            class="kui-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="kui-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="kui-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="kui-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'karman-ui/src/mixins/locale';
  import KuiProgress from 'karman-ui/packages/progress';

  export default {

    name: 'KuiUploadList',

    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { KuiProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
