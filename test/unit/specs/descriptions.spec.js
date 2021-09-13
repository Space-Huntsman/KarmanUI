import { destroyVM, createVue, waitImmediate } from '../util';

describe('Descriptions', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('render test', () => {
    vm = createVue(
      {
        template: `
          <kui-descriptions title="title" extra="extra">
            <kui-descriptions-item v-for="item in 4" :key="item"></kui-descriptions-item>
          </kui-descriptions>
        `
      },
      true
    );
    const el = vm.$el;
    expect(el.querySelector('.kui-descriptions__title').textContent).to.equal('title');
    expect(el.querySelector('.kui-descriptions__extra').textContent).to.equal('extra');
    expect(el.querySelectorAll('.kui-descriptions-item__label').length).to.equal(4);
  });

  it('should render border props', () => {
    vm = createVue(
      {
        template: `
          <kui-descriptions border>
            <kui-descriptions-item v-for="item in 3" :label="item" :key="item">{{ item }}</kui-descriptions-item>
          </kui-descriptions>
        `
      },
      true
    );
    const el = vm.$el;
    expect(Array.from(el.querySelector('table').classList)).to.contain('is-bordered');
  });

  it('should render class props', () => {
    vm = createVue(
      {
        template: `
          <kui-descriptions border label-class-name="label-class-name" content-class-name="content-class-name">
            <kui-descriptions-item v-for="item in 3" :label="item" :key="item">{{ item }}</kui-descriptions-item>
          </kui-descriptions>
        `
      },
      true);

    expect(Array.from(vm.$el.querySelector('.kui-descriptions-item__label').classList)).to.contain('label-class-name');
    expect(Array.from(vm.$el.querySelector('.kui-descriptions-item__content').classList)).to.contain('content-class-name');
  });

  it('should render column props', async() => {
    vm = createVue({
      template: `
      <kui-descriptions :column="5" :border="border">
        <kui-descriptions-item v-for="item in 10" :label="item" :key="item">{{ item }}</kui-descriptions-item>
      </kui-descriptions>
    `,
      data() {
        return {
          border: false
        };
      }
    }, true);

    expect(vm.$el.querySelector('tr').children.length).to.equal(5);
    vm.border = true;
    await waitImmediate();
    expect(vm.$el.querySelector('tr').children.length).to.equal(10);
  });

  it('should render direction props', async() => {
    vm = createVue({

      template: `
      <kui-descriptions :column="5" :direction="direction" border>
        <kui-descriptions-item v-for="item in 10" :label="item" :key="item">{{ item }}</kui-descriptions-item>
      </kui-descriptions>
    `,
      data() {
        return {
          direction: 'horizontal'
        };
      }
    }, true);

    expect(vm.$el.querySelector('tr').children.length).to.equal(10);
    expect(vm.$el.querySelectorAll('tr')[0].children[0].innerHTML).to.equal(vm.$el.querySelectorAll('tr')[0].children[1].innerHTML);
    vm.direction = 'vertical';
    await waitImmediate();
    expect(vm.$el.querySelector('tr').children.length).to.equal(5);
    expect(vm.$el.querySelectorAll('tr')[0].children[0].innerHTML).to.equal(vm.$el.querySelectorAll('tr')[1].children[0].innerHTML);
  });

  it('should render title slots', async() => {
    vm = createVue({
      template: `
      <kui-descriptions>
        <template slot="title">title</template>
        <kui-descriptions-item v-for="item in 10" :label="item" :key="item">{{ item }}</kui-descriptions-item>
      </kui-descriptions>
    `
    }, true);

    expect(vm.$el.querySelector('.kui-descriptions__title').innerText).to.equal('title');
  });

  it('should render span props', async() => {
    vm = createVue({
      template: `
        <kui-descriptions :column="3">
          <kui-descriptions-item label="1">1</kui-descriptions-item>
          <kui-descriptions-item label="2" :span="2">2</kui-descriptions-item>
          <kui-descriptions-item label="3">3</kui-descriptions-item>
        </kui-descriptions>
      `
    }, true);

    expect(vm.$el.querySelectorAll('td')[1].getAttribute('colSpan')).to.equal('2');
  });

  it('re-rendered when slots is updated', async() => {
    const CHANGE_VALUE = 'company';
    vm = createVue({
      template: `
        <div>
          <kui-descriptions v-for="(remark,index) in remarks" :key="index" :title="remark">
            <kui-descriptions-item label="remark">
              <kui-tag size="small">{{remark}}</kui-tag>
            </kui-descriptions-item>
          </kui-descriptions>
          <button @click="onClick">click</button>
        </div>
      `,
      data() {
        return {
          remarks: ['school', 'hospital']
        };
      },
      methods: {
        onClick() {
          this.$set(this.remarks, 0, CHANGE_VALUE);
        }
      }
    }, true);
    vm.$el.querySelector('button').click();
    await waitImmediate();
    expect(vm.$el.querySelector('.kui-tag').innerText).to.equal(CHANGE_VALUE);
  });
});
