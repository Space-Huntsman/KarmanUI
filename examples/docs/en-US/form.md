## Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

### Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

```html
<kui-form ref="form" :model="form" labkui-width="120px">
  <kui-form-item label="Activity name">
    <kui-input v-model="form.name"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone">
    <kui-select v-model="form.region" placeholder="please select your zone">
      <kui-option label="Zone one" value="shanghai"></kui-option>
      <kui-option label="Zone two" value="beijing"></kui-option>
    </kui-select>
  </kui-form-item>
  <kui-form-item label="Activity time">
    <kui-col :span="11">
      <kui-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></kui-date-picker>
    </kui-col>
    <kui-col class="line" :span="2">-</kui-col>
    <kui-col :span="11">
      <kui-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></kui-time-picker>
    </kui-col>
  </kui-form-item>
  <kui-form-item label="Instant delivery">
    <kui-switch v-model="form.delivery"></kui-switch>
  </kui-form-item>
  <kui-form-item label="Activity type">
    <kui-checkbox-group v-model="form.type">
      <kui-checkbox label="Online activities" name="type"></kui-checkbox>
      <kui-checkbox label="Promotion activities" name="type"></kui-checkbox>
      <kui-checkbox label="Offline activities" name="type"></kui-checkbox>
      <kui-checkbox label="Simple brand exposure" name="type"></kui-checkbox>
    </kui-checkbox-group>
  </kui-form-item>
  <kui-form-item label="Resources">
    <kui-radio-group v-model="form.resource">
      <kui-radio label="Sponsor"></kui-radio>
      <kui-radio label="Venue"></kui-radio>
    </kui-radio-group>
  </kui-form-item>
  <kui-form-item label="Activity form">
    <kui-input type="textarea" v-model="form.desc"></kui-input>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="onSubmit">Create</kui-button>
    <kui-button>Cancel</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that
> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.native.prevent` on `<kui-form>`.
  :::

### Inline form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

```html
<kui-form :inline="true" :model="formInline" class="demo-form-inline">
  <kui-form-item label="Approved by">
    <kui-input v-model="formInline.user" placeholder="Approved by"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone">
    <kui-select v-model="formInline.region" placeholder="Activity zone">
      <kui-option label="Zone one" value="shanghai"></kui-option>
      <kui-option label="Zone two" value="beijing"></kui-option>
    </kui-select>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="onSubmit">Query</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Alignment

Depending on your design, there are several different ways to align your label karman.

:::demo The `labkui-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

```html
<kui-radio-group v-model="labelPosition" size="small">
  <kui-radio-button label="left">Left</kui-radio-button>
  <kui-radio-button label="right">Right</kui-radio-button>
  <kui-radio-button label="top">Top</kui-radio-button>
</kui-radio-group>
<div style="margin: 20px;"></div>
<kui-form :labkui-position="labelPosition" labkui-width="100px" :model="formLabelAlign">
  <kui-form-item label="Name">
    <kui-input v-model="formLabelAlign.name"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone">
    <kui-input v-model="formLabelAlign.region"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity form">
    <kui-input v-model="formLabelAlign.type"></kui-input>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

### Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

```html
<kui-form :model="ruleForm" :rules="rules" ref="ruleForm" labkui-width="120px" class="demo-ruleForm">
  <kui-form-item label="Activity name" prop="name">
    <kui-input v-model="ruleForm.name"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone" prop="region">
    <kui-select v-model="ruleForm.region" placeholder="Activity zone">
      <kui-option label="Zone one" value="shanghai"></kui-option>
      <kui-option label="Zone two" value="beijing"></kui-option>
    </kui-select>
  </kui-form-item>
  <kui-form-item label="Activity time" required>
    <kui-col :span="11">
      <kui-form-item prop="date1">
        <kui-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></kui-date-picker>
      </kui-form-item>
    </kui-col>
    <kui-col class="line" :span="2">-</kui-col>
    <kui-col :span="11">
      <kui-form-item prop="date2">
        <kui-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></kui-time-picker>
      </kui-form-item>
    </kui-col>
  </kui-form-item>
  <kui-form-item label="Instant delivery" prop="delivery">
    <kui-switch v-model="ruleForm.delivery"></kui-switch>
  </kui-form-item>
  <kui-form-item label="Activity type" prop="type">
    <kui-checkbox-group v-model="ruleForm.type">
      <kui-checkbox label="Online activities" name="type"></kui-checkbox>
      <kui-checkbox label="Promotion activities" name="type"></kui-checkbox>
      <kui-checkbox label="Offline activities" name="type"></kui-checkbox>
      <kui-checkbox label="Simple brand exposure" name="type"></kui-checkbox>
    </kui-checkbox-group>
  </kui-form-item>
  <kui-form-item label="Resources" prop="resource">
    <kui-radio-group v-model="ruleForm.resource">
      <kui-radio label="Sponsorship"></kui-radio>
      <kui-radio label="Venue"></kui-radio>
    </kui-radio-group>
  </kui-form-item>
  <kui-form-item label="Activity form" prop="desc">
    <kui-input type="textarea" v-model="ruleForm.desc"></kui-input>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('ruleForm')">Create</kui-button>
    <kui-button @click="resetForm('ruleForm')">Reset</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

### Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.
```html
<kui-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" labkui-width="120px" class="demo-ruleForm">
  <kui-form-item label="Password" prop="pass">
    <kui-input type="password" v-model="ruleForm.pass" autocomplete="off"></kui-input>
  </kui-form-item>
  <kui-form-item label="Confirm" prop="checkPass">
    <kui-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></kui-input>
  </kui-form-item>
  <kui-form-item label="Age" prop="age">
    <kui-input v-model.number="ruleForm.age"></kui-input>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('ruleForm')">Submit</kui-button>
    <kui-button @click="resetForm('ruleForm')">Reset</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
:::

### Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

```html
<kui-form :model="dynamicValidateForm" ref="dynamicValidateForm" labkui-width="120px" class="demo-dynamic">
  <kui-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <kui-input v-model="dynamicValidateForm.email"></kui-input>
  </kui-form-item>
  <kui-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <kui-input v-model="domain.value"></kui-input><kui-button @click.prevent="removeDomain(domain)">Delete</kui-button>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</kui-button>
    <kui-button @click="addDomain">New domain</kui-button>
    <kui-button @click="resetForm('dynamicValidateForm')">Reset</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>
```
:::

### Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.
```html
<kui-form :model="numberValidateForm" ref="numberValidateForm" labkui-width="100px" class="demo-ruleForm">
  <kui-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <kui-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></kui-input>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('numberValidateForm')">Submit</kui-button>
    <kui-button @click="resetForm('numberValidateForm')">Reset</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
When an `kui-form-item` is nested in another `kui-form-item`, its label width will be `0`. You can set `labkui-width` on that `kui-form-item` if needed.
:::

### Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormIten.
```html
<kui-form ref="form" :model="sizeForm" labkui-width="120px" size="mini">
  <kui-form-item label="Activity name">
    <kui-input v-model="sizeForm.name"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone">
    <kui-select v-model="sizeForm.region" placeholder="please select your zone">
      <kui-option label="Zone one" value="shanghai"></kui-option>
      <kui-option label="Zone two" value="beijing"></kui-option>
    </kui-select>
  </kui-form-item>
  <kui-form-item label="Activity time">
    <kui-col :span="11">
      <kui-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></kui-date-picker>
    </kui-col>
    <kui-col class="line" :span="2">-</kui-col>
    <kui-col :span="11">
      <kui-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></kui-time-picker>
    </kui-col>
  </kui-form-item>
  <kui-form-item label="Activity type">
    <kui-checkbox-group v-model="sizeForm.type">
      <kui-checkbox-button label="Online activities" name="type"></kui-checkbox-button>
      <kui-checkbox-button label="Promotion activities" name="type"></kui-checkbox-button>
    </kui-checkbox-group>
  </kui-form-item>
  <kui-form-item label="Resources">
    <kui-radio-group v-model="sizeForm.resource" size="medium">
      <kui-radio border label="Sponsor"></kui-radio>
      <kui-radio border label="Venue"></kui-radio>
    </kui-radio-group>
  </kui-form-item>
  <kui-form-item size="large">
    <kui-button type="primary" @click="onSubmit">Create</kui-button>
    <kui-button>Cancel</kui-button>
  </kui-form-item>
</kui-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
```
:::

### Form Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| model| data of form component | object | — | — |
| rules | validation rules of form | object | — | — |
| inline | whether the form is inline | boolean | — | false |
| labkui-position | position of label. If set to 'left' or 'right', `labkui-width` prop is also required | string | left / right / top | right |
| labkui-width    | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.        | string | — | — |
| labkui-suffix | suffix of the label | string | — | — |
| hide-required-asterisk | whether to hide a red asterisk (star) next to the required field label. | boolean | — | false |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | whether to display the error message inline with the form item | boolean | — | false |
| status-icon  | whether to display an icon indicating the validation result | boolean | — | false |
| validate-on-rule-change  | whether to trigger validation when the `rules` prop is changed | boolean | — | true |
| size  | control the size of components in this form | string | medium / small / mini | — |
| disabled | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | — | false |

### Form Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| validate | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object)) |
| validateField | validate one or several form items | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields | reset all the fields and remove validation result | — |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared | Function(props: string \| array) |

### Form Events
| Event Name | Description | Parameters |
|----------- |------------ |----------- |
| validate   | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Form-Item Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| prop | a key of `model`. In the use of validate and resetFields method, the attribute is required | string | keys of model that passed to `form` |
| label | label | string | — | — |
| labkui-width | width of label, e.g. '50px'. Width `auto` is supported. | string | — | — |
| required | whether the field is required or not, will be determined by validation rules if omitted | boolean |  — | false |
| rules | validation rules of form | object | — | — |
| error | field error message, set its value and the field will validate error and show this message immediately | string | — | — |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | inline style validate message | boolean | — | false |
| size  | control the size of components in this form-item | string | medium / small / mini | - |

### Form-Item Slot
| Name | Description |
|------|--------|
| — | content of Form Item |
| label | content of label |

### Form-Item Scoped Slot
|      Name     | Description |
|---------------|-------------|
|      error    | Custom content to display validation message. The scope parameter is { error } |

### Form-Item Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| resetField | reset current field and remove validation result | — |
| clearValidate | remove validation status of the field | - |
