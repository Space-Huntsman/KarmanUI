import { createVue, destroyVM, triggerKeyDown } from '../util';

describe('Tabs', () => {
  let vm;
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" ref="pane-click">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    let paneList = vm.$el.querySelector('.kui-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-click', spy);

    setTimeout(_ => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(_ => {
        expect(spy.withArgs(vm.$refs['pane-click']).calledOnce).to.true;
        expect(tabList[2].classList.contains('is-active')).to.be.true;
        expect(paneList[2].style.display).to.not.ok;
        done();
      });
    }, 100);
  });
  it('active-name', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" :active-name="activeName" @click="handleClick">
          <kui-tab-pane name="tab-A" label="用户管理">A</kui-tab-pane>
          <kui-tab-pane name="tab-B" label="配置管理">B</kui-tab-pane>
          <kui-tab-pane name="tab-C" label="角色管理">C</kui-tab-pane>
          <kui-tab-pane name="tab-D" label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          activeName: 'tab-B'
        };
      },
      methods: {
        handleClick(tab) {
          this.activeName = tab.name;
        }
      }
    }, true);
    setTimeout(_ => {
      const paneList = vm.$el.querySelector('.kui-tabs__content').children;
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;

      expect(tabList[1].classList.contains('is-active')).to.be.true;
      expect(paneList[1].style.display).to.not.ok;

      tabList[3].click();
      vm.$nextTick(_ => {
        expect(tabList[3].classList.contains('is-active')).to.be.true;
        expect(paneList[3].style.display).to.not.ok;
        expect(vm.activeName === 'tab-D');
        done();
      });
    }, 100);
  });
  it('card', () => {
    vm = createVue({
      template: `
        <kui-tabs type="card">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('kui-tabs--card')).to.be.true;
  });
  it('border card', () => {
    vm = createVue({
      template: `
        <kui-tabs type="border-card">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    expect(vm.$el.classList.contains('kui-tabs--border-card')).to.be.true;
  });
  it('dynamic', (done) => {
    vm = createVue({
      template: `
        <kui-tabs type="card" ref="tabs">
          <kui-tab-pane :label="tab.label" :name="tab.name" v-for="tab in tabs" :key="tab.name">Test Content</kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          tabs: [{
            label: 'tab1',
            name: 'tab1'
          }, {
            label: 'tab2',
            name: 'tab2'
          }, {
            label: 'tab3',
            name: 'tab3'
          }, {
            label: 'tab4',
            name: 'tab4'
          }]
        };
      }
    }, true);

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.kui-tab-pane').length).to.equal(4);
      vm.tabs.push({
        label: 'tab5',
        name: 'tab5'
      });
      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.kui-tab-pane').length).to.equal(5);
        done();
      });
    }, 100);
  });
  it('editable', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <kui-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          editableTabsValue: '2',
          editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }, {
            title: 'Tab 3',
            name: '3',
            content: 'Tab 3 content'
          }],
          tabIndex: 3
        };
      },
      methods: {
        handleTabsEdit(targetName, action) {
          if (action === 'add') {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: 'New Tab',
              name: newTabName,
              content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
          }
          if (action === 'remove') {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
              tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1];
                  if (nextTab) {
                    activeName = nextTab.name;
                  }
                }
              });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
          }
        }
      }
    }, true);

    setTimeout(_ => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      const paneList = vm.$el.querySelector('.kui-tabs__content').children;

      tabList[1].querySelector('.kui-icon-close').click();
      setTimeout(_ => {
        expect(tabList.length).to.be.equal(2);
        expect(paneList.length).to.be.equal(2);
        expect(tabList[1].classList.contains('is-active')).to.be.true;

        vm.$refs.tabs.$el.querySelector('.kui-tabs__new-tab').click();
        setTimeout(_ => {
          expect(tabList.length).to.be.equal(3);
          expect(paneList.length).to.be.equal(3);
          expect(tabList[2].classList.contains('is-active')).to.be.true;
          done();
        }, 100);
      }, 100);
    }, 100);
  });
  it('addable & closable', done => {
    vm = createVue({
      template: `
        <kui-tabs
          ref="tabs"
          v-model="editableTabsValue"
          type="card"
          addable
          closable
          @tab-add="addTab"
          @tab-remove="removeTab"
        >
          <kui-tab-pane
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :key="item.name"
            :name="item.name"
          >
            {{item.content}}
          </kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          editableTabsValue: '2',
          editableTabs: [{
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          }, {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }],
          tabIndex: 2
        };
      },
      methods: {
        addTab(targetName) {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }, true);

    setTimeout(_ => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      const paneList = vm.$el.querySelector('.kui-tabs__content').children;

      vm.$refs.tabs.$el.querySelector('.kui-tabs__new-tab').click();

      setTimeout(_ => {
        expect(tabList.length).to.be.equal(3);
        expect(paneList.length).to.be.equal(3);
        expect(tabList[2].classList.contains('is-active')).to.be.true;

        tabList[2].querySelector('.kui-icon-close').click();
        setTimeout(_ => {
          expect(tabList.length).to.be.equal(2);
          expect(paneList.length).to.be.equal(2);
          expect(tabList[1].classList.contains('is-active')).to.be.true;
          done();
        }, 100);
      }, 100);
    }, 100);
  });
  it('closable in tab-pane', (done) => {
    vm = createVue({
      template: `
        <kui-tabs type="card" ref="tabs">
          <kui-tab-pane label="用户管理" closable>A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" closable>C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.kui-icon-close').length).to.equal(2);
      done();
    }, 100);
  });
  it('disabled', done => {
    vm = createVue({
      template: `
        <kui-tabs type="card" ref="tabs">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane disabled label="配置管理" ref="disabled">B</kui-tab-pane>
          <kui-tab-pane label="角色管理">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    vm.$nextTick(_ => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;

      tabList[1].click();
      vm.$nextTick(_ => {
        expect(tabList[1].classList.contains('is-active')).to.not.true;
        done();
      });
    });
  });
  it('tab-position', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" tab-position="left">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" ref="pane-click">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    let paneList = vm.$el.querySelector('.kui-tabs__content').children;
    let spy = sinon.spy();

    vm.$refs.tabs.$on('tab-click', spy);

    setTimeout(_ => {
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;
      expect(tabList[0].classList.contains('is-active')).to.be.true;
      expect(paneList[0].style.display).to.not.ok;

      tabList[2].click();
      vm.$nextTick(_ => {
        expect(spy.withArgs(vm.$refs['pane-click']).calledOnce).to.true;
        expect(tabList[2].classList.contains('is-active')).to.be.true;
        expect(paneList[2].style.display).to.not.ok;
        done();
      });
    }, 100);
  });
  it('stretch', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" stretch :tab-position="tabPosition">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" ref="pane-click">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          tabPosition: 'bottom'
        };
      }
    }, true);

    setTimeout(_ => {
      expect(vm.$el.querySelector('[role=tablist]').classList.contains('is-stretch')).to.be.true;

      vm.tabPosition = 'left';

      vm.$nextTick(_ => {
        expect(vm.$el.querySelector('[role=tablist]').classList.contains('is-stretch')).not.to.be.true;
        done();
      });
    }, 100);
  });
  it('horizonal-scrollable', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" style="width: 200px;">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    setTimeout(_ => {
      const btnPrev = vm.$el.querySelector('.kui-tabs__nav-prev');
      btnPrev.click();
      vm.$nextTick(_ => {
        const tabNav = vm.$el.querySelector('.kui-tabs__nav-wrap');
        expect(tabNav.__vue__.navOffset).to.be.equal(0);

        const btnNext = vm.$el.querySelector('.kui-tabs__nav-next');
        btnNext.click();

        vm.$nextTick(_ => {
          expect(tabNav.__vue__.navOffset).to.not.be.equal(0);

          btnPrev.click();

          vm.$nextTick(_ => {
            expect(tabNav.__vue__.navOffset).to.be.equal(0);
            done();
          });
        });
      });
    }, 100);
  });
  it('vertical-scrollable', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" tab-position="left" style="height: 200px;">
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="用户管理">A</kui-tab-pane>
          <kui-tab-pane label="配置管理">B</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    setTimeout(_ => {
      const btnPrev = vm.$el.querySelector('.kui-tabs__nav-prev');
      btnPrev.click();
      vm.$nextTick(_ => {
        const tabNav = vm.$el.querySelector('.kui-tabs__nav-wrap');
        expect(tabNav.__vue__.navOffset).to.be.equal(0);

        const btnNext = vm.$el.querySelector('.kui-tabs__nav-next');
        btnNext.click();

        vm.$nextTick(_ => {
          expect(tabNav.__vue__.navOffset).to.not.be.equal(0);

          btnPrev.click();

          vm.$nextTick(_ => {
            expect(tabNav.__vue__.navOffset).to.be.equal(0);
            done();
          });
        });
      });
    }, 100);
  });
  it('should work with lazy', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs">
          <kui-tab-pane label="用户管理" name="A">A</kui-tab-pane>
          <kui-tab-pane label="配置管理" name="B">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" name="C">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿" lazy name="D">D</kui-tab-pane>
        </kui-tabs>
      `
    }, true);

    expect(vm.$el.querySelector('.kui-tabs__content').children.length).to.be.equal(3);
    expect(vm.$el.querySelector('.kui-tabs__content > #pane-D')).to.be.equal(null);

    setTimeout(_ => {
      vm.$el.querySelector('.kui-tabs__nav > #tab-D').click();
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.kui-tabs__content').children.length).to.be.equal(4);
        expect(vm.$el.querySelector('.kui-tabs__content > #pane-D')).not.to.be.equal(null);

        vm.$el.querySelector('.kui-tabs__nav > #tab-A').click();
        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.kui-tabs__content').children.length).to.be.equal(4);
          expect(vm.$el.querySelector('.kui-tabs__content > #pane-D')).not.to.be.equal(null);
          done();
        });
      });
    }, 100);
  });
  it('before leave', done => {
    vm = createVue({
      template: `
        <kui-tabs ref="tabs" v-model="activeName" :before-leave="beforeLeave">
          <kui-tab-pane name="tab-A" label="用户管理">A</kui-tab-pane>
          <kui-tab-pane name="tab-B" label="配置管理">B</kui-tab-pane>
          <kui-tab-pane name="tab-C" label="角色管理">C</kui-tab-pane>
          <kui-tab-pane name="tab-D" label="定时任务补偿">D</kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          activeName: 'tab-B'
        };
      },
      methods: {
        beforeLeave() {
          return new window.Promise((resolve, reject) => {
            reject();
          });
        }
      }
    }, true);
    setTimeout(_ => {
      const paneList = vm.$el.querySelector('.kui-tabs__content').children;
      const tabList = vm.$refs.tabs.$refs.nav.$refs.tabs;

      expect(tabList[1].classList.contains('is-active')).to.be.true;
      expect(paneList[1].style.display).to.not.ok;

      tabList[3].click();
      vm.$nextTick(_ => {
        setTimeout(() => {
          expect(tabList[1].classList.contains('is-active')).to.be.true;
          expect(paneList[1].style.display).to.not.ok;
          expect(vm.activeName === 'tab-B');
          done();
        }, 200);
      });
    }, 100);
  });
  it('keyboard event', done => {
    vm = createVue({
      template: `
        <kui-tabs v-model="activeName">
          <kui-tab-pane label="用户管理" name="first">A</kui-tab-pane>
          <kui-tab-pane label="配置管理" name="second">B</kui-tab-pane>
          <kui-tab-pane label="角色管理" name="third">C</kui-tab-pane>
          <kui-tab-pane label="定时任务补偿" name="fourth">D</kui-tab-pane>
        </kui-tabs>
      `,
      data() {
        return {
          activeName: 'second'
        };
      }
    }, true);

    expect(vm.activeName).to.be.equal('second');
    vm.$nextTick(() => {
      triggerKeyDown(vm.$el.querySelector('#tab-second'), 39);
      expect(vm.activeName).to.be.equal('third');

      triggerKeyDown(vm.$el.querySelector('#tab-third'), 39);
      expect(vm.activeName).to.be.equal('fourth');

      triggerKeyDown(vm.$el.querySelector('#tab-fourth'), 39);
      expect(vm.activeName).to.be.equal('first');

      triggerKeyDown(vm.$el.querySelector('#tab-first'), 37);
      expect(vm.activeName).to.be.equal('fourth');

      triggerKeyDown(vm.$el.querySelector('#tab-fourth'), 37);
      expect(vm.activeName).to.be.equal('third');
      done();
    });
  });
});
