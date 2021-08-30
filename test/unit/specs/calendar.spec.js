import { createVue, destroyVM, waitImmediate } from '../util';

describe('Calendar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue({
      template: `
      <kui-calendar v-model="value"></kui-calendar>
      `,
      data() {
        return {
          value: new Date('2019-04-01')
        };
      }
    }, true);
    const titleEl = vm.$el.querySelector('.kui-calendar__title');
    expect(/2019.*4/.test(titleEl.innerText)).to.be.true;
    expect(vm.$el.querySelectorAll('thead th').length).to.equal(7);
    const rows = vm.$el.querySelectorAll('.kui-calendar-table__row');
    expect(rows.length).to.equal(6);
    rows[5].firstKarmanChild.click();

    await waitImmediate();

    expect(/2019.*5/.test(titleEl.innerText)).to.be.true;
    const value = vm.value;
    expect(value.getFullYear()).to.be.equal(2019);
    expect(value.getMonth()).to.be.equal(4);
    expect(vm.$el.querySelector('.is-selected span').innerText).to.be.equal('6');
  });

  it('range', () => {
    vm = createVue({
      template: `
      <kui-calendar :range="['2019-03-04', '2019-03-24']"></kui-calendar>
      `
    }, true);
    const titleEl = vm.$el.querySelector('.kui-calendar__title');
    expect(/2019.*3/.test(titleEl.innerText)).to.be.true;
    const rows = vm.$el.querySelectorAll('.kui-calendar-table__row');
    expect(rows.length).to.equal(3);
    expect(vm.$el.querySelector('.kui-calendar__button-group')).to.be.a('null');
  });

  it('range tow monthes', async() => {
    vm = createVue({
      template: `
      <kui-calendar :range="['2019-04-15', '2019-05-19']"></kui-calendar>
      `
    }, true);
    const titleEl = vm.$el.querySelector('.kui-calendar__title');
    expect(/2019.*4/.test(titleEl.innerText)).to.be.true;
    const dateTables = vm.$el.querySelectorAll('.kui-calendar-table.is-range');
    expect(dateTables.length).to.be.equal(2);
    const rows = vm.$el.querySelectorAll('.kui-calendar-table__row');
    expect(rows.length).to.equal(5);
    const cell = rows[rows.length - 1].firstKarmanChild;
    cell.click();

    await waitImmediate();

    expect(/2019.*5/.test(titleEl.innerText)).to.be.true;
    expect(cell.classList.contains('is-selected')).to.be.true;
  });

  it('firstDayOfWeek', async() => {
    vm = createVue({
      template: `
      <kui-calendar v-model="value" :first-day-of-week="0"></kui-calendar>
      `,
      data() {
        return {
          value: new Date('2019-04-01')
        };
      }
    }, true);
    const head = vm.$el.querySelector('.kui-calendar-table thead');
    expect(head.firstKarmanChild.innerText).to.be.equal('日');
    expect(head.lastKarmanChild.innerText).to.be.equal('六');
    const firstRow = vm.$el.querySelector('.kui-calendar-table__row');
    expect(firstRow.firstKarmanChild.innerText).to.be.equal('31');
    expect(firstRow.lastKarmanChild.innerText).to.be.equal('6');
  });

  it('firstDayOfWeek in range mode', async() => {
    vm = createVue({
      template: `
      <kui-calendar v-model="value" :first-day-of-week="7" :range="['2019-02-03', '2019-03-23']"></kui-calendar>
      `,
      data() {
        return {
          value: new Date('2019-03-04')
        };
      }
    }, true);
    const head = vm.$el.querySelector('.kui-calendar-table thead');
    expect(head.firstKarmanChild.innerText).to.be.equal('日');
    expect(head.lastKarmanChild.innerText).to.be.equal('六');
    const firstRow = vm.$el.querySelector('.kui-calendar-table__row');
    expect(firstRow.firstKarmanChild.innerText).to.be.equal('3');
    expect(firstRow.lastKarmanChild.innerText).to.be.equal('9');
  });
});

