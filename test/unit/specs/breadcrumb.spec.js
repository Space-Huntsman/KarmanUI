import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <kui-breadcrumb separator=">">
        <kui-breadcrumb-item to="/">首页</kui-breadcrumb-item>
        <kui-breadcrumb-item>活动管理</kui-breadcrumb-item>
        <kui-breadcrumb-item>活动列表</kui-breadcrumb-item>
        <kui-breadcrumb-item>活动详情</kui-breadcrumb-item>
      </kui-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.kui-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
