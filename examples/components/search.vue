<template>
  <kui-autocomplete
      v-model="query"
      size="small"
      class="compoent-search-el"
      prefix-icon="kui-icon-search"
      :popper-class="`compoent-search${ isEmpty ? ' is-empty' : '' }`"
      :fetch-suggestions="querySearch"
      placeholder="搜索文档"
      :trigger-on-focus="false"
      @select="handleSelect"
      highlight-first-item>
    <template slot-scope="props">
      <p class="compoent-search-title" v-if="props.item.title">
        <span v-html="props.item.highlightedCompo"></span>
        <span class="compoent-search-separator"></span>
        <span v-html="props.item.title"></span>
      </p>
      <p
          class="compoent-search-content"
          v-if="props.item.content"
          v-html="props.item.content"></p>
      <a
          class="compoent-search-link"
          v-if="props.item.img"
          target="_blank"
          href="https://www.algolia.com/docsearch">
        <img
            class="compoent-search-logo"
            src="../assets/images/search-by-algolia.svg"
            alt="compoent-logo">
      </a>
      <p
          class="compoent-search-empty"
          v-if="props.item.isEmpty">无匹配结果</p>
    </template>
  </kui-autocomplete>
</template>

<style lang="scss" >

.compoent-search {
  width: 450px !important;
  &-el{
    width: 450px!important;
    & input{
      border-width:  0 0 1px 0;
    }
  }
  &.is-empty {
    .kui-autocomplete-suggestion__list {
      padding-bottom: 0;
    }
  }

  .kui-autocomplete-suggestion__list {
    position: static !important;
    padding-bottom: 28px;
  }

  li {
    border-bottom: solid 1px #ebebeb;

    &:last-child {
      border-bottom: none;
    }
  }

  .compoent-highlight {
    color: #3366FF;
    font-weight: bold;
  }

  .compoent-search-title {
    font-size: 14px;
    margin: 6px 0;
    line-height: 1.8;
  }

  .compoent-search-separator {
    padding: 0 6px;
  }

  .compoent-search-content {
    font-size: 12px;
    margin: 6px 0;
    line-height: 2.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .compoent-search-link {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-right: 20px;
    background-color: #e4e7ed;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    text-align: right;

    &:hover {
      background-color: #e4e7ed;
    }

    img {
      display: inline-block;
      height: 17px;
      margin-top: 10px;
    }
  }

  .compoent-search-empty {
    margin: 5px 0;
    text-align: center;
    color: #999;
  }
}
</style>

<script>

export default {
  data() {
    return {
      index: null,
      query: '',
      isEmpty: false
    };
  },

  computed: {
    lang() {
      return 'zh-CN';
    },

    placeholder() {
      return this.lang ? this.langs[this.lang].search : '';
    },

    emptyText() {
      return this.lang ? this.langs[this.lang].empty : '';
    }
  },

  watch: {
    lang() {

    }
  },

  methods: {

    querySearch(query, cb) {
      if (!query) return;
      // anchor: hit.anchor,
      //     component: hit.component,
      //     highlightedCompo: hit._highlightResult.component.value,
      //     title: hit._highlightResult.title.value,
      //     content
    },

    handleSelect(val) {
      if (val.img || val.isEmpty) return;
      const component = val.component || '';
      const anchor = val.anchor;
      this.$router.push(`/${this.lang}/component/${component}${anchor ? `#${anchor}` : ''}`);
    }
  },

  mounted() {
  }
};
</script>
