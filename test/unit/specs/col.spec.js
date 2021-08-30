import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <kui-col :span="12">
        </kui-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('kui-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <kui-col :span="12">
        </kui-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('kui-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <kui-col :span="12" :pull="3">
        </kui-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('kui-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <kui-col :span="12" :push="3">
        </kui-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('kui-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <kui-row :gutter="20">
          <kui-col :span="12" ref="col">
          </kui-col>
        </kui-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <kui-row :gutter="20">
          <kui-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </kui-col>
        </kui-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('kui-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('kui-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('kui-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('kui-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('kui-col-md-8')).to.be.true;
  });
});
