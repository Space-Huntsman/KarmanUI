<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .kui-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .kui-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .kui-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <kui-row class="demo-line">
      <kui-button>Default</kui-button>
      <kui-button type="primary">Primary</kui-button>
      <kui-button type="success">Success</kui-button>
      <kui-button type="info">Info</kui-button>
      <kui-button type="warning">Warning</kui-button>
      <kui-button type="danger">Danger</kui-button>
    </kui-row>
    <kui-row class="demo-line">
      <kui-button plain>Plain</kui-button>
      <kui-button type="primary" plain>Primary</kui-button>
      <kui-button type="success" plain>Success</kui-button>
      <kui-button type="info" plain>Info</kui-button>
      <kui-button type="warning" plain>Warning</kui-button>
      <kui-button type="danger" plain>Danger</kui-button>
    </kui-row>
    <kui-row class="demo-line">
      <kui-button round>Round</kui-button>
      <kui-button type="primary" round>Primary</kui-button>
      <kui-button type="success" round>Success</kui-button>
      <kui-button type="info" round>Info</kui-button>
      <kui-button type="warning" round>Warning</kui-button>
      <kui-button type="danger" round>Danger</kui-button>
    </kui-row>
    <kui-row class="demo-line">
      <kui-button icon="kui-icon-search" circle></kui-button>
      <kui-button type="primary" icon="kui-icon-edit" circle></kui-button>
      <kui-button type="success" icon="kui-icon-check" circle></kui-button>
      <kui-button type="info" icon="kui-icon-message" circle></kui-button>
      <kui-button type="warning" icon="kui-icon-star-off" circle></kui-button>
      <kui-button type="danger" icon="kui-icon-delete" circle></kui-button>
    </kui-row>
    <kui-row class="demo-line">
      <kui-button>Default</kui-button>
      <kui-button size="medium">Medium</kui-button>
      <kui-button size="small">Small</kui-button>
      <kui-button size="mini">Mini</kui-button>
    </kui-row>
    <h4>Radio</h4>
    <kui-row class="demo-line">
      <kui-radio v-model="radio" label="1">Option A</kui-radio>
      <kui-radio v-model="radio" label="2">Option B</kui-radio>
    </kui-row>
    <kui-row class="demo-line">
      <kui-radio-group v-model="radio1">
        <kui-radio-button label="New York"></kui-radio-button>
        <kui-radio-button label="Washington"></kui-radio-button>
        <kui-radio-button label="Los Angeles"></kui-radio-button>
        <kui-radio-button label="Chicago"></kui-radio-button>
      </kui-radio-group>
    </kui-row>
    <kui-row class="demo-line">
      <kui-radio v-model="radio2" label="1" border>Option A</kui-radio>
      <kui-radio v-model="radio2" label="2" border>Option B</kui-radio>
    </kui-row>
    <h4>Checkbox</h4>
    <kui-row class="demo-line">
      <kui-checkbox v-model="checked">Option</kui-checkbox>
    </kui-row>
    <kui-row class="demo-line">
      <kui-checkbox-group v-model="checked1">
        <kui-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</kui-checkbox-button>
      </kui-checkbox-group>
    </kui-row>
    <kui-row class="demo-line">
      <kui-checkbox v-model="checked2" label="Option1" border></kui-checkbox>
    </kui-row>
    <h4>Input</h4>
    <kui-row style="width: 180px">
      <kui-input placeholder="Please input" v-model="input"></kui-input>
    </kui-row>
    <h4>InputNumber</h4>
    <kui-row>
      <kui-input-number v-model="inputNumber" :min="1" :max="10"></kui-input-number>
    </kui-row>
    <h4>Select</h4>
    <kui-row>
      <kui-select v-model="selectValue" placeholder="Select">
        <kui-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></kui-option>
      </kui-select>
    </kui-row>
    <h4>Cascader</h4>
    <kui-row>
      <kui-cascader :options="cascadeOptions" v-model="cascaderValue"></kui-cascader>
    </kui-row>
    <h4>Switch</h4>
    <kui-row>
      <kui-switch v-model="switchValue"></kui-switch>
      <kui-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </kui-switch>
    </kui-row>
    <h4>Slider</h4>
    <kui-row style="width: 380px">
      <kui-slider v-model="slider"></kui-slider>
    </kui-row>
    <h4>DatePicker</h4>
    <kui-row>
      <kui-date-picker v-model="datePicker" type="date"></kui-date-picker>
    </kui-row>
    <h4>Rate</h4>
    <kui-row>
      <kui-rate class="demo-line" v-model="rate"></kui-rate>
      <kui-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </kui-rate>
    </kui-row>
    <h4>Transfer</h4>
    <kui-row>
      <kui-transfer v-model="transfer" filterable :data="transferData">
        <kui-button class="transfer-footer" slot="left-footer" size="small">Operation</kui-button>
        <kui-button class="transfer-footer" slot="right-footer" size="small">Operation</kui-button>
      </kui-transfer>
    </kui-row>
    <h4>Table</h4>
    <kui-row>
      <kui-table :data="tableData" style="width: 70%">
        <kui-table-column prop="date" label="Date" width="180"></kui-table-column>
        <kui-table-column prop="name" label="Name" width="180"></kui-table-column>
        <kui-table-column prop="address" label="Address"></kui-table-column>
      </kui-table>
    </kui-row>
    <h4>Tag</h4>
    <kui-row>
      <kui-tag class="demo-item" closable>Tag One</kui-tag>
      <kui-tag class="demo-item" closable type="success">Tag Two</kui-tag>
      <kui-tag class="demo-item" closable type="info">Tag Three</kui-tag>
      <kui-tag class="demo-item" closable type="warning">Tag Four</kui-tag>
      <kui-tag class="demo-item" closable type="danger">Tag Five</kui-tag>
    </kui-row>
    <h4>Progress</h4>
    <kui-row style="width: 380px">
      <kui-progress :percentage="20"></kui-progress>
      <kui-progress :percentage="60" status="exception"></kui-progress>
      <kui-progress :percentage="100" status="success"></kui-progress>
    </kui-row>
    <h4>Tree</h4>
    <kui-row style="width: 380px">
      <kui-tree :data="treeData" :props="defaultTreeProps" ></kui-tree>
    </kui-row>
    <h4>Pagination</h4>
    <kui-row>
      <kui-pagination layout="prev, pager, next" :total="1000"></kui-pagination>
    </kui-row>
    <h4>Badge</h4>
    <kui-row>
      <kui-badge :value="12" class="demo-item">
        <kui-button size="small">comments</kui-button>
      </kui-badge>
      <kui-badge :value="3" class="demo-item">
        <kui-button size="small">replies</kui-button>
      </kui-badge>
      <kui-badge :value="1" class="demo-item" type="primary">
        <kui-button size="small">comments</kui-button>
      </kui-badge>
      <kui-badge :value="2" class="demo-item" type="warning">
        <kui-button size="small">replies</kui-button>
      </kui-badge>
    </kui-row>
    <h4>Alert</h4>
    <kui-row style="width: 380px;">
      <kui-alert class="demo-item" title="success alert" type="success" show-icon></kui-alert>
      <kui-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></kui-alert>
      <kui-alert class="demo-item" title="warning alert" type="warning" show-icon></kui-alert>
      <kui-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </kui-alert>
    </kui-row>
    <h4>Loading</h4>
    <kui-row>
      <kui-table :data="tableData" style="width: 90%" v-loading="true">
        <kui-table-column prop="date" label="Date" width="180"></kui-table-column>
        <kui-table-column prop="name" label="Name" width="180"></kui-table-column>
        <kui-table-column prop="address" label="Address"></kui-table-column>
      </kui-table>
    </kui-row>
    <h4>Message</h4>
    <kui-row>
      <div role="alert" class="demo-item kui-message kui-message--success kui-message-fade-leave-active kui-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="kui-message__icon kui-icon-success"></i><p class="kui-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item kui-message kui-message--warning kui-message-fade-leave-active kui-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="kui-message__icon kui-icon-warning"></i><p class="kui-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item kui-message kui-message--info kui-message-fade-leave-active kui-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="kui-message__icon kui-icon-info"></i><p class="kui-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item kui-message kui-message--error is-closable kui-message-fade-leave-active kui-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="kui-message__icon kui-icon-error"></i><p class="kui-message__content">Oops, this is a error message.</p><i class="kui-message__closeBtn kui-icon-close"></i></div>
    </kui-row>
    <h4>MessageBox</h4>
    <kui-row>
      <div class="kui-message-box"><div class="kui-message-box__header"><div class="kui-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="kui-message-box__headerbtn"><i class="kui-message-box__close kui-icon-close"></i></button></div><div class="kui-message-box__content"><div class="kui-message-box__status kui-icon-warning"></div><div class="kui-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="kui-message-box__input" style="display: none;"><div class="kui-input"><!----><input type="text" autocomplete="off" placeholder="" class="kui-input__inner"><!----><!----><!----></div><div class="kui-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="kui-message-box__btns"><button type="button" class="kui-button kui-button--default kui-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="kui-button kui-button--default kui-button--small kui-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </kui-row>
    <h4>Notification</h4>
    <kui-row>
      <div role="alert" class="kui-notification right" style="position: relative; left: 0;"><!----><div class="kui-notification__group"><span class="kui-notification__title">Notification</span><div class="kui-notification__content"><div>This is a message </div></div><div class="kui-notification__closeBtn kui-icon-close"></div></div></div>
    </kui-row>
    <h4>Menu</h4>
    <kui-row>
      <kui-menu :default-active="menu" class="kui-menu-demo" mode="horizontal">
        <kui-menu-item index="1">Processing Center</kui-menu-item>
        <kui-submenu index="2">
          <template slot="title">Workspace</template>
          <kui-menu-item index="2-1">item one</kui-menu-item>
          <kui-menu-item index="2-2">item two</kui-menu-item>
          <kui-menu-item index="2-3">item three</kui-menu-item>
          <kui-submenu index="2-4">
            <template slot="title">item four</template>
            <kui-menu-item index="2-4-1">item one</kui-menu-item>
            <kui-menu-item index="2-4-2">item two</kui-menu-item>
            <kui-menu-item index="2-4-3">item three</kui-menu-item>
          </kui-submenu>
        </kui-submenu>
        <kui-menu-item index="3" disabled>Info</kui-menu-item>
        <kui-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </kui-menu-item>
      </kui-menu>
      <kui-menu
        default-active="2"
        class="demo-line"
      >
        <kui-submenu index="1">
          <template slot="title">
            <i class="kui-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <kui-menu-item-group title="Group One">
            <kui-menu-item index="1-1">item one</kui-menu-item>
            <kui-menu-item index="1-2">item one</kui-menu-item>
          </kui-menu-item-group>
          <kui-menu-item-group title="Group Two">
            <kui-menu-item index="1-3">item three</kui-menu-item>
          </kui-menu-item-group>
          <kui-submenu index="1-4">
            <template slot="title">item four</template>
            <kui-menu-item index="1-4-1">item one</kui-menu-item>
          </kui-submenu>
        </kui-submenu>
        <kui-menu-item index="2">
          <i class="kui-icon-menu"></i>
          <span>Navigator Two</span>
        </kui-menu-item>
        <kui-menu-item index="3" disabled>
          <i class="kui-icon-document"></i>
          <span>Navigator Three</span>
        </kui-menu-item>
        <kui-menu-item index="4">
          <i class="kui-icon-setting"></i>
          <span>Navigator Four</span>
        </kui-menu-item>
      </kui-menu>
    </kui-row>
    <h4>Tabs</h4>
    <kui-row>
      <kui-tabs v-model="tab" class="demo-item">
        <kui-tab-pane label="User" name="first">User</kui-tab-pane>
        <kui-tab-pane label="Config" name="second">Config</kui-tab-pane>
        <kui-tab-pane label="Role" name="third">Role</kui-tab-pane>
        <kui-tab-pane label="Task" name="fourth">Task</kui-tab-pane>
      </kui-tabs>
      <kui-tabs type="card" class="demo-item">
        <kui-tab-pane label="User">User</kui-tab-pane>
        <kui-tab-pane label="Config">Config</kui-tab-pane>
        <kui-tab-pane label="Role">Role</kui-tab-pane>
        <kui-tab-pane label="Task">Task</kui-tab-pane>
      </kui-tabs>
    </kui-row>
    <h4>Dialog</h4>
    <kui-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="kui-dialog" style="margin: 0"><div class="kui-dialog__header"><span class="kui-dialog__title">Tips</span><button type="button" aria-label="Close" class="kui-dialog__headerbtn"><i class="kui-dialog__close kui-icon kui-icon-close"></i></button></div><div class="kui-dialog__body"><span>This is a message</span> </div><div class="kui-dialog__footer"><span class="dialog-footer"><button type="button" class="kui-button kui-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="kui-button kui-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </kui-row>
    <h4>Tooltip</h4>
    <kui-row>
      <div role="tooltip" x-placement="top" class="kui-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="kui-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </kui-row>
    <h4>Popover</h4>
    <kui-row>
      <div role="tooltip" x-placement="top" id="kui-popover-2936" aria-hidden="true" class="kui-popover kui-popper kui-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="kui-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </kui-row>
    <h4>Card</h4>
    <kui-row>
      <kui-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </kui-card>
    </kui-row>
    <h4>Carousel</h4>
    <kui-row>
      <kui-carousel height="150px">
        <kui-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </kui-carousel-item>
      </kui-carousel>
    </kui-row>
    <h4>Collapse</h4>
    <kui-row>
      <kui-collapse v-model="collapse">
        <kui-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </kui-collapse-item>
        <kui-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </kui-collapse-item>
      </kui-collapse>
    </kui-row>
    <h4>Avatar</h4>
    <kui-row class="demo-line avatar-demo">
      <kui-avatar icon="kui-icon-user-solid"/>
      <kui-avatar> avatar </kui-avatar>
      <kui-avatar shape="square" fit="contain" :src="avatarData.url"></kui-avatar>
      <kui-avatar size="large"> large </kui-avatar>
      <kui-avatar size="medium"> medium </kui-avatar>
      <kui-avatar size="small"> small </kui-avatar>
    </kui-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Karman',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://picsum.photos/200'
      }
    };
  }
};
</script>
