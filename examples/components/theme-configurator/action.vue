<template>
  <div class="configurator-action">
      <div class="action-group">
        <kui-tooltip :content="getActionDisplayName('undo')">
          <img
            src="../../assets/images/icon-undo.svg"
            @click="onUndo"
            :class="{ 'active': userConfigHistory.length > 0 }"
          />
        </kui-tooltip>
        <kui-tooltip :content="getActionDisplayName('redo')">
          <img
            src="../../assets/images/icon-redo.svg"
            @click="onRedo"
            :class="{ 'active': userConfigRedoHistory.length > 0 }"
          />
        </kui-tooltip>
        <div class="button-group">
          <kui-button
            class="reset"
            type="primary"
            round
            size="mini"
            :disabled="isOfficial"
            @click="onReset"
          >
            {{getActionDisplayName('reset-theme')}}
          </kui-button>
          <kui-button
            class="download"
            type="primary"
            round
            size="mini"
            :disabled="downloadDisabled"
            @click="onDownload"
          >
            {{getActionDisplayName('download-theme')}}
          </kui-button>
        </div>
      </div>
      <kui-select v-model="selectedComponent" class="selector">
        <kui-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </kui-option>
      </kui-select>
      <div class="line"></div>
    </div>
</template>

<style lang="scss">
.configurator-action {
  padding: 15px 18px 0;
  .action-group {
    padding: 5px 0;
    img {
      cursor: not-allowed;
      width: 16px;
      height: 16px;
      padding: 7px 0;
      margin-left: 5px;
      opacity: .5;
      &.active {
        opacity: 1;
        cursor: pointer;
      }
      &:last-of-type {
        margin-left: 10px;
      }
    }
    .button-group {
      float: right;
      .kui-button {
        padding: 6px 15px;
        &.is-disabled {
          color: #C1C4D6;
          background-color: #fff;
          border-color: #EBEEF5;
        }
      }
      .reset {
        background: #E6F1FC;
        color: #3366FF;
        border-color: #A2CFFC;
      }
      .download {
        background: #3366FF;
        color: #FFF;
        border-color: #3366FF
      }
    }
  }
  .selector {
    width: 100%;
    input {
      background: #f5f7fa;
      border: none;
      font-size: 18px;
      padding-left: 0;
      color: #606266;
    }
  }
  .line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #E6E8F0;
  }
}
</style>

<script>
import { getActionDisplayName } from './utils/utils';
export default {
  props: {
    selectOptions: Array,
    userConfigHistory: Array,
    userConfigRedoHistory: Array,
    isOfficial: Boolean,
    onUndo: Function,
    onRedo: Function
  },
  data() {
    return {
      selectedComponent: 'color',
      downloadDisabled: false
    };
  },
  watch: {
    selectedComponent: {
      handler(val) {
        this.$emit('select', val);
      }
    }
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    onReset() {
      this.$parent.onReset();
    },
    onDownload() {
      this.downloadDisabled = true;
      this.$parent.onDownload();
      setTimeout(() => {
        this.downloadDisabled = false;
      }, 2500);
    }
  }
};
</script>
