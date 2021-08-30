import { createVue, destroyVM } from '../util';

describe('Timeline', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </kui-timeline-item>
        </kui-timeline>
      `,
      data() {
        return {
          activities: [{
            content: '创建成功',
            timestamp: '2018-04-11'
          }, {
            content: '通过审核',
            timestamp: '2018-04-13'
          }, {
            content: '活动按期开始',
            timestamp: '2018-04-15'
          }]
        };
      }
    }, true);
    let contentElms = vm.$el.querySelectorAll('.kui-timeline-item__content');
    contentElms.forEach((elm, index) => {
      expect(elm.innerText).to.equal(vm.activities[index].content);
    });
    let timestampElms = vm.$el.querySelectorAll('.kui-timeline-item__timestamp');
    timestampElms.forEach((elm, index) => {
      expect(elm.innerText).to.equal(vm.activities[index].timestamp);
    });
  });

  it('reverse', done => {
    vm = createVue({
      template: `
        <kui-timeline :reverse="reverse">
          <kui-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </kui-timeline-item>
        </kui-timeline>
      `,

      data() {
        return {
          reverse: true,
          activities: [{
            content: '创建成功',
            timestamp: '2018-04-11'
          }, {
            content: '通过审核',
            timestamp: '2018-04-13'
          }, {
            content: '活动按期开始',
            timestamp: '2018-04-15'
          }]
        };
      }
    }, true);

    const contentElms = vm.$el.querySelectorAll('.kui-timeline-item__content');
    contentElms.forEach((elm, index) => {
      expect(elm.innerText).to.equal(vm.activities[vm.activities.length - index - 1].content);
    });

    vm.reverse = false;
    vm.$nextTick(() => {
      const contentElms = vm.$el.querySelectorAll('.kui-timeline-item__content');
      contentElms.forEach((elm, index) => {
        expect(elm.innerText).to.equal(vm.activities[index].content);
      });
      done();
    });
  });

  it('placement', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :placement="activity.placement">
            {{activity.content}}
          </kui-timeline-item>
        </kui-timeline>
      `,

      data() {
        return {
          activities: [{
            content: '创建成功',
            timestamp: '2018-04-11',
            placement: 'top'
          }, {
            content: '通过审核',
            timestamp: '2018-04-13'
          }, {
            content: '活动按期开始',
            timestamp: '2018-04-15'
          }]
        };
      }
    }, true);

    const timestampElm = vm.$el.querySelectorAll('.kui-timeline-item__timestamp')[0];
    expect(timestampElm.classList.contains('is-top')).to.true;
  });

  it('hide-timestamp', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :hide-timestamp="activity.hideTimestamp">
            {{activity.content}}
          </kui-timeline-item>
        </kui-timeline>
      `,

      data() {
        return {
          activities: [{
            content: '创建成功',
            timestamp: '2018-04-11',
            hideTimestamp: true
          }, {
            content: '通过审核',
            timestamp: '2018-04-13'
          }, {
            content: '活动按期开始',
            timestamp: '2018-04-15'
          }]
        };
      }
    }, true);

    const timestampElms = vm.$el.querySelectorAll('.kui-timeline-item__timestamp');
    expect(timestampElms.length).to.equal(2);
  });

  it('color', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            timestamp="2018-04-11"
            color="#f00">
            创建成功
          </kui-timeline-item>
        </kui-timeline>
      `
    }, true);

    const nodeElm = vm.$el.querySelector('.kui-timeline-item__node');
    expect(nodeElm.style.backgroundColor).to.equal('rgb(255, 0, 0)');
  });

  it('type', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            timestamp="2018-04-11"
            type="primary">
            创建成功
          </kui-timeline-item>
        </kui-timeline>
      `
    }, true);

    const nodeElm = vm.$el.querySelector('.kui-timeline-item__node');
    expect(nodeElm.classList.contains('kui-timeline-item__node--primary')).to.true;
  });

  it('size', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            timestamp="2018-04-11"
            type="large">
            创建成功
          </kui-timeline-item>
        </kui-timeline>
      `
    }, true);

    const nodeElm = vm.$el.querySelector('.kui-timeline-item__node');
    expect(nodeElm.classList.contains('kui-timeline-item__node--large')).to.true;
  });

  it('icon', () => {
    vm = createVue({
      template: `
        <kui-timeline>
          <kui-timeline-item
            timestamp="2018-04-11"
            icon="kui-icon-more">
            创建成功
          </kui-timeline-item>
        </kui-timeline>
      `
    }, true);

    const nodeElm = vm.$el.querySelector('.kui-timeline-item__icon');
    expect(nodeElm.classList.contains('kui-icon-more')).to.true;
  });
});
