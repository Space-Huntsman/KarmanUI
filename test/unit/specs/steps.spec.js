import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <kui-steps>
        <kui-step title="step1"></kui-step>
        <kui-step title="step2"></kui-step>
        <kui-step title="step3"></kui-step>
      </kui-steps>
    `);

    expect(vm.$el.querySelectorAll('.kui-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <kui-steps>
        <kui-step title="step1"></kui-step>
        <kui-step title="step2"></kui-step>
        <kui-step title="step3"></kui-step>
      </kui-steps>
    `, true);

    const vm2 = createVue(`
      <kui-steps :space="100">
        <kui-step title="step1"></kui-step>
        <kui-step title="step2"></kui-step>
        <kui-step title="step3"></kui-step>
        <kui-step title="step4"></kui-step>
      </kui-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.kui-step');
    const stepElm2 = vm2.$el.querySelector('.kui-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <kui-steps :active="1" process-status="error">
        <kui-step title="step1"></kui-step>
        <kui-step title="step2"></kui-step>
        <kui-step title="step3"></kui-step>
      </kui-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.kui-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <kui-steps :active="1" :process-status="processStatus">
          <kui-step title="abc"></kui-step>
          <kui-step title="abc2"></kui-step>
        </kui-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.kui-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.kui-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <kui-steps :active="1" finish-status="error">
        <kui-step title="abc"></kui-step>
        <kui-step title="abc2"></kui-step>
      </kui-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.kui-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <kui-steps :active="active" finish-status="error">
          <kui-step title="abc"></kui-step>
          <kui-step title="abc2"></kui-step>
        </kui-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.kui-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.kui-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <kui-steps direction="vertical">
        <kui-step title="aaa"></kui-step>
        <kui-step title="bbb"></kui-step>
      </kui-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <kui-steps direction="vertical" :space="200">
        <kui-step title="aaa"></kui-step>
        <kui-step title="bbb"></kui-step>
      </kui-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.kui-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <kui-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <kui-step title="step1"></kui-step>
        <kui-step title="step2" status="error"></kui-step>
        <kui-step title="step3"></kui-step>
      </kui-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.kui-step:nth-child(2) .kui-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.kui-step:nth-child(3) .kui-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
