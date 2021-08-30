## Démarrer

Cette page vous guidera tout le long de l'installation d'Karman au sein d'un projet webpack.

### Use vue-cli@3

Nous fournissons un [plugin Karman](https://github.com/KarmanUI/vue-cli-plugin-karman) pour vue-cli@3, que vous pouvez utiliser pour créer rapidement un projet basé sur Karman.

### Utiliser le Starter Kit

Nous fournissons un [template de projet](https://github.com/KarmanUI/karman-starter) pour débuter rapidement. Pour les utilisateurs Laravel, il est aussi possible d'utiliser ce [template](https://github.com/KarmanUI/karman-in-laravkui-starter). VOus pouvez les télécharger directement.

Si vous préférer vous passer de template, voyez la section suivante.

### Importer Karman

Karman peut être importé entièrement ou à la demande. Commençons par l'import total.

#### Import total

Dans main.js:

```javascript
import Vue from 'vue';
import KarmanUI from 'karman-ui';
import 'karman-ui/lib/theme-default/index.css';
import App from './App.vue';

Vue.use(KarmanUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

L'exemple ci-dessus importe Karman entièrement. Notez que les fichiers CSS doivent être importés séparément.

#### À la demande

Grâce au [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), nous pouvons importer uniquement les composants désirés, rendant ainsi le projet plus léger.

Tout d'abord, installez babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Puis éditez .babelrc:

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "karman-ui",
        "styleLibraryName": "theme-default"
      }
    ]
  ]
}
```

Ensuite, si vous n'avez besoin que de Button et Select, éditez main.js comme suit:

```javascript
import Vue from 'vue';
import { Button, Select } from 'karman-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* ou
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

Exemple complet (liste complète des composants dans [components.json](https://github.com/spaceHuntsman/karman/blob/master/components.json)):

```javascript
import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'karman-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
```

### Configuration globale

Lors de l'import d'Karman, vous pouvez définir un objet de configuration global. Actuellement il possède de propriétés: `size` et `zIndex`. La propriété `size` détermine la taille par défaut de tout les composants et `zIndex` règle le z-index initial (default: 2000) des fenêtres modales:

Import total d'Karman：

```js
import Vue from 'vue';
import Karman from 'karman-ui';
Vue.use(Karman, { size: 'small', zIndex: 3000 });
```

Import partiel d'Karman：

```js
import Vue from 'vue';
import { Button } from 'karman-ui';

Vue.prototype.$KARMAN = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

Avec la configuration ci-dessus, la taille par défaut des composants ayant l'attribut size sera 'small', et le z-index initial des fenêtres modales est 3000.

### Commencer à développer

Maintenant que vous avez ajouté Vue et Karman à votre projet, vous pouvez commencer à coder. Référez-vous à la documentation de chaque composant pour savoir comment les utiliser.

### Utiliser Nuxt.js

Vous pouvez également commencer un projet avec [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-karman?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-karman on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
