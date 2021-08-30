export default {
  name: 'KuiMarker',

  props: {
    mark: {
      type: [String, Object]
    }
  },
  render() {
    let label = typeof this.mark === 'string' ? this.mark : this.mark.label;

    return (
      <div class="kui-slider__marks-text" style={ this.mark.style || {} }>
        { label }
      </div>
    );
  }
};
