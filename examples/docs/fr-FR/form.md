## Form

Un formulaire est constitué des éléments `input`, `radio`, `select`, `checkbox`, etc. Il sert principalement à collecter, vérifier et soumettre des données.

### Formulaire de base

Il peut contenir toutes sortes de champs tels que `input`, `select`, `radio` et `checkbox`.

:::demo Dans chaque composant `form`, il vous faudra utiliser la balise `form-item` pour servir de conteneur à chaque champ.

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
      <kui-date-picker type="date" placeholder="Choisissez une date" v-model="form.date1" style="width: 100%;"></kui-date-picker>
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
    <kui-button type="primary" @click="onSubmit">Créer</kui-button>
    <kui-button>Annuler</kui-button>
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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) stipule que
> <i>Lorsqu'il n'y a qu'un seul champ de type texte dans un formulaire, le navigateur devrait accepter la pression de la touche Entrée sur ce champ comme méthode de soumission du formulaire</i>

Pour éviter ce comportement, vous pouvez ajouter `@submit.native.prevent` dans `<kui-form>`.
  :::

### Formulaire horizontal

Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez le placer sur une seule ligne.

:::demo Mettez l'attribut `inline` à `true` et le formulaire sera en une seul ligne.

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

### Alignement

Suivant votre design, il y a différents moyens d'aligner vos labels.

:::demo L'attribut `labkui-position` permet de régler l'alignement, il peut être à `top` ou `left`. Quand il est à `top`, les labels sont placés au-dessus des champs.

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

Le composant Form vous permet d'effectuer des vérifications, afin de détecter et corriger les erreurs facilement.

:::demo Ajoutez l'attribut `rules` au composant `Form`, passez les règles de validation, et configurez l'attribut `prop` de `Form-Item` pour ajouter la clé de la règle correspondante au champ. Plus d'informations ici:  [async-validator](https://github.com/yiminghe/async-validator).

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
        <kui-date-picker type="date" placeholder="Choisissez une date" v-model="ruleForm.date1" style="width: 100%;"></kui-date-picker>
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
    <kui-button type="primary" @click="submitForm('ruleForm')">Créer</kui-button>
    <kui-button @click="resetForm('ruleForm')">Réinitialiser</kui-button>
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

### Validations personnalisées

Cet exemple montre comment vous pouvez personnaliser vos règles de validation pour effectuer une identification à deux facteurs.

:::demo Ici, nous utilisons `status-icon` pour afficher le résultat de la validation sous forme d'icône.
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
    <kui-button @click="resetForm('ruleForm')">Réinitialiser</kui-button>
  </kui-form-item>
</kui-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Veuillez entrer l\'âge'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Veuillez entrer des chiffres'));
          } else {
            if (value < 18) {
              callback(new Error('L\'âge doit être supérieur à 18 ans'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez entrer le mot de passe'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez entrer à nouveau le mot de passe'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Les deux entrées ne correspondent pas!'));
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
Les callback de validations personnalisées doivent être appelées. Un usage plus avancé se trouve ici: [async-validator](https://github.com/yiminghe/async-validator).
:::

### Ajouter ou supprimer des champs dynamiquement

:::demo En plus de pouvoir passer toutes les règles de validation en une seule fois au formulaire, vous pouvez aussi ajouter ou supprimer des règles sur un seul champ de manière dynamique.
```html
<kui-form :model="dynamicValidateForm" ref="dynamicValidateForm" labkui-width="120px" class="demo-dynamic">
  <kui-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Veuillez entrer l\'adresse e-mail', trigger: 'blur' },
      { type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change'] }
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
      required: true, message: 'domain ne peut pas être null', trigger: 'blur'
    }"
  >
    <kui-input v-model="domain.value"></kui-input><kui-button @click.prevent="removeDomain(domain)">Supprimer</kui-button>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('dynamicValidateForm')">Soumettre</kui-button>
    <kui-button @click="addDomain">Nouveau domaine</kui-button>
    <kui-button @click="resetForm('dynamicValidateForm')">Réinitialiser</kui-button>
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

### Validation des nombres

:::demo Pour valider les nombres correctement, il vous faudra ajouter le modificateur `.number` à l'attribut `v-model`. Il est utilisé par Vuejs pour transformer les valeurs en nombres .
```html
<kui-form :model="numberValidateForm" ref="numberValidateForm" labkui-width="100px" class="demo-ruleForm">
  <kui-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'l\'âge est requis'},
      { type: 'number', message: 'l\'âge doit être un nombre'}
    ]"
  >
    <kui-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></kui-input>
  </kui-form-item>
  <kui-form-item>
    <kui-button type="primary" @click="submitForm('numberValidateForm')">Soumettre</kui-button>
    <kui-button @click="resetForm('numberValidateForm')">Réinitialiser</kui-button>
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
Lorsqu'un `kui-form-item` est imbriqué dans un autre `kui-form-item`, la largeur de son label sera `0`. Utilisez `labkui-width` sur ce `kui-form-item` si besoin.
:::

### Taille

Tout les composants d'un formulaire héritent leur attribut `size` de ce formulaire. Il est aussi possible de l'utiliser individuellement sur chaque FormItem.

:::demo Vous pouvez régler le `size` de chaque item si vous ne souhaitez pas qu'il hérite de son parent.
```html
<kui-form ref="form" :model="sizeForm" labkui-width="120px" size="mini">
  <kui-form-item label="Activity name">
    <kui-input v-model="sizeForm.name"></kui-input>
  </kui-form-item>
  <kui-form-item label="Activity zone">
    <kui-select v-model="sizeForm.region" placeholder="veuillez sélectionner votre zone">
      <kui-option label="Zone one" value="shanghai"></kui-option>
      <kui-option label="Zone two" value="beijing"></kui-option>
    </kui-select>
  </kui-form-item>
  <kui-form-item label="Activity time">
    <kui-col :span="11">
      <kui-date-picker type="date" placeholder="Choisissez une date" v-model="sizeForm.date1" style="width: 100%;"></kui-date-picker>
    </kui-col>
    <kui-col class="line" :span="2">-</kui-col>
    <kui-col :span="11">
      <kui-time-picker placeholder="Choisissez une heure" v-model="sizeForm.date2" style="width: 100%;"></kui-time-picker>
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
    <kui-button type="primary" @click="onSubmit">Créer</kui-button>
    <kui-button>Annuler</kui-button>
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

### Attributs de Form

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| model| Données du formulaire. | object | — | — |
| rules | Règles de validation du formulaire. | object | — | — |
| inline | Si le formulaire est horizontal. | boolean | — | false |
| labkui-position | Position des labels. Si 'left' ou 'right', `labkui-width` est aussi requis. | string | left / right / top | right |
| labkui-width | Largeur des labels, tout les enfants directs hériteront de cette valeur. La largeur `auto` est supportée. | string | — | — |
| labkui-suffix | Suffixe de labels. | string | — | — |
| hide-required-asterisk | Si les champs obligatoires doivent avoir une astérisque rouge (étoile) à coté de leurs labels. | boolean | — | false |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit apparaître en ligne avec son champ. | boolean | — | false |
| status-icon  | Si une icône indiquant le résultat de validation doit apparaître. | boolean | — | false |
| validate-on-rule-change  | Si la validation doit se déclencher lorsque `rules` est modifié. | boolean | — | true |
| size  | Contrôle la taille des champs du formulaire. | string | medium / small / mini | — |
| disabled | Si tout les champs du formulaire doivent être désactivés. Si `true`, il ne peut pas être modifié par l'attribut `disabled` des enfants. | boolean | — | false |

### Méthodes de Form

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| validate | Valide le formulaire. Prends une callback en paramètre. Après la validation, la callback est exécutée avec deux paramètres: un boolean indiquant si la validation est bonne, et un objet contenant tout les champs qui ont échoués. Retourne une promesse si aucune callback n'est passée. | Function(callback: Function(boolean, object)) |
| validateField | Valide un ou plusieurs champs du formulaire. | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields | Efface tout les champs et les résultats de validation. | — |
| clearValidate | Efface les messages de validation de certains champs. Le paramètre est le nom du champ ou une liste des champs concernés. S'il est omis, tout les champs seront concernés. | Function(props: string \| array) |

### Évènnements de Form

| Nom | Description | Paramètres |
|----------- |------------ |----------- |
| validate   | Se déclenche après la validation d'un champ. | Nom du champs qui a été validé, si la validation est bonne et le message d'erreur sinon. |

### Attributs de FormItem

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| prop | Une des clés de `model`. Utilisés par les méthodes validate et resetFields. Requis. | string | Clés du model passé à `form`. |
| label | Le label. | string | — | — |
| labkui-width | Largeur du label, e.g. '50px'. La largeur `auto` est supportée. | string | — | — |
| required | Si le champ est requis ou non. Si omis, sera déterminé par les règles de validation. | boolean |  — | false |
| rules | Règles de validation du formulaire. | object | — | — |
| error | Message d'erreur du champ. S'il est modifié, le champ l'affichera immédiatement. | string | — | — |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit être en ligne avec le champ. | boolean | — | false |
| size  | Contrôle la taille du FormItem. | string | medium / small / mini | - |

### Slot de Form-Item
| Nom | Description |
|------|--------|
| — | Contenu de Form Item. |
| label | Contenu du label. |

### Slot avec portée de Form-Item
|      Nom     | Description |
|---------------|-------------|
|      error    | Contenu personnalisé pour les messages de validation. Le paramètre du scope est { error }. |

### Méthodes de Form-Item

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| resetField | Efface le champ et les résultats de validation. | — |
| clearValidate | Efface le status de validation du champ. | - |
