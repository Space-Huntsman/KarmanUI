## Inicio rápido

Esta sección te guía en el proceso de usar Karman con webpack en un proyecto.

### Use vue-cli@3

Proporcionamos un [plugin de Karman](https://github.com/KarmanUI/vue-cli-plugin-karman) para vue-cli@3, que puede utilizar para construir rápidamente un proyecto basado en Karman.

### Usa la plantilla de Kit de inicio

Proveemos una plantilla general [project template](https://github.com/KarmanUI/karman-starter). Para los usuarios de Laravel, también tenemos [template](https://github.com/KarmanUI/karman-in-laravkui-starter). Puedes descargarlas y agregarlas directamente también.

Si prefiere no utilizarlas, lee las siguientes secciones de este documento.

### Importando Karman

Puede importar Karman completamente o solamente importar lo que necesite. Comencemos importando todo.

#### Importando todo

En main.js:

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

El código anterior importa Karman completamente. Nótese que el archivo CSS necesita ser incluido por separado.

#### En demanda

Con la ayuda de [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.

Primero, instale babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Luego edite .babelrc:

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

Luego, si necesita Button y Select, edite main.js:

```javascript
import Vue from 'vue';
import { Button, Select } from 'karman-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

Ejemplo completo (Referencia completa de componentes [components.json](https://github.com/spaceHuntsman/karman/blob/master/components.json))

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

### Configuración global

Cuando importa Karman, puede definir un objeto global de configuración. Por ahora este karmano solo contiene dos propiedades: `size`, `zIndex`. `size` define el tamaño por defecto de todos los componentes.

La propiedad `zIndex` indica el z-index inicial (por defecto: 2000) para los modal:

Importando Karman completamente：

```js
import Vue from 'vue';
import Karman from 'karman-ui';
Vue.use(Karman, { size: 'small', zIndex: 3000 });
```

Importando Karman parcialmente：

```js
import Vue from 'vue';
import { Button } from 'karman-ui';

Vue.prototype.$KARMAN = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo `size` será `small`. El valor inicial de z-index para los modals se ha establecido a 3000.

### Empiece ya!

Ahora ha incorporado Vue y Karman a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.

### Use Nuxt.js

También podemos comenzar un proyecto usando [Nuxt.js](nuxtjs.org):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-karman?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-karman on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
