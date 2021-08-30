import { createVue, destroyVM, waitImmediate } from '../util';

const AXIOM = 'Rem is the best girl';

describe('Result', () => {

  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('render test', () => {
    vm = createVue({
      template: '<kui-result />'
    }, true);
    expect(vm.$el.querySelector('.kui-result__icon')).to.exist;
    expect(Array.from(vm.$el.classList)).to.contain('kui-result');
  });

  it('should render title props', () => {
    vm = createVue({
      template: '<kui-result :title="title"/>',
      data() {
        return {
          title: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__title').innerText).to.be.equal(AXIOM);
  });

  it('should render sub-title props', () => {
    vm = createVue({
      template: '<kui-result :sub-title="subTitle"/>',
      data() {
        return {
          subTitle: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__subtitle').innerText).to.be.equal(AXIOM);
  });

  it('should render icon props', async() => {
    vm = createVue({
      template: '<kui-result :icon="icon"/>',
      data() {
        return {
          icon: 'success'
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__icon svg')).to.exist;
    expect(Array.from(vm.$el.querySelector('.kui-result__icon svg').classList)).to.contain('icon-success');
    vm.icon = 'error';
    await waitImmediate();
    expect(vm.$el.querySelector('.kui-result__icon svg')).to.exist;
    expect(Array.from(vm.$el.querySelector('.kui-result__icon svg').classList)).to.contain('icon-error');
    vm.icon = 'warning';
    await waitImmediate();
    expect(vm.$el.querySelector('.kui-result__icon svg')).to.exist;
    expect(Array.from(vm.$el.querySelector('.kui-result__icon svg').classList)).to.contain('icon-warning');
    vm.icon = 'info';
    await waitImmediate();
    expect(vm.$el.querySelector('.kui-result__icon svg')).to.exist;
    expect(Array.from(vm.$el.querySelector('.kui-result__icon svg').classList)).to.contain('icon-info');
  });

  it('should render icon slots', () => {
    vm = createVue({
      template: '<kui-result><template slot="icon">{{icon}}</template></kui-result>',
      data() {
        return {
          icon: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__icon')).to.exist;
    expect(vm.$el.querySelector('.kui-result__icon').innerText).to.be.equal(AXIOM);
  });

  it('should render title slots', () => {
    vm = createVue({
      template: '<kui-result><template slot="title">{{title}}</template></kui-result>',
      data() {
        return {
          title: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__title')).to.exist;
    expect(vm.$el.querySelector('.kui-result__title').innerText).to.be.equal(AXIOM);
  });

  it('should render sub-title slots', () => {
    vm = createVue({
      template: '<kui-result><template slot="subTitle">{{subTitle}}</template></kui-result>',
      data() {
        return {
          subTitle: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__subtitle')).to.exist;
    expect(vm.$el.querySelector('.kui-result__subtitle').innerText).to.be.equal(AXIOM);
  });

  it('should render extra slots', () => {
    vm = createVue({
      template: '<kui-result><template slot="extra">{{extra}}</template></kui-result>',
      data() {
        return {
          extra: AXIOM
        };
      }
    }, true);
    expect(vm.$el.querySelector('.kui-result__extra')).to.exist;
    expect(vm.$el.querySelector('.kui-result__extra').innerText).to.be.equal(AXIOM);
  });
});
