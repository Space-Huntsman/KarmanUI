<script>
import Loading from './loading';
import DocStyle from './docStyle';

export default {
  mixins: [Loading, DocStyle],
  mounted() {
  },
  data() {
    return {
      userConfig: {},
      lastApply: 0
    };
  },
  methods: {
    applyStyle(res, time) {
      if (time < this.lastApply) return;
      this.lastApply = time;
    },

    onError(err) {
      let message;
      try {
        message = JSON.parse(err).message;
      } catch (e) {
        message = err;
      }
      this.$message.error(message);
    }
  }
};
</script>
