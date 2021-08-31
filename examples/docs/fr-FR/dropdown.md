## Dropdown
Menu déroulant pour afficher des listes de liens et d'actions possibles.

### Usage
Passez sur le menu avec la souris pour dérouler son contenu.

:::demo L'élément déclencheur est généré par le `slot` par défaut, et le menu déroulant est généré par le `slot` appelé `dropdown`. Par défaut le menu apparaît simplement en passant la souris sur l'élément déclencheur, sans avoir à cliquer.

```html
<kui-dropdown>
  <span class="kui-dropdown-link">
    Menu déroulant<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #7A00A3;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Élément déclencheur

Utilisez le bouton pour ouvrir le menu déroulant.

:::demo Utilisez `split-button` pour séparer le déclencheur du reste du bouton, ce dernier devenant la partie gauche et le déclencheur la partie droite.
```html
<kui-dropdown>
  <kui-button type="primary">
    Liste déroulante<i class="kui-icon-arrow-down kui-icon--right"></i>
  </kui-button>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
    <kui-dropdown-item>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>
<kui-dropdown split-button type="primary" @click="handleClick">
  Liste déroulante
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
    <kui-dropdown-item>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown {
    vertical-align: top;
  }
  .kui-dropdown + .kui-dropdown {
    margin-left: 15px;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### Déclencheur

Vous pouvez choisir de déclencher le menu au moment du clic, ou en passant la souris sur l'élément.

:::demo Utilisez l'attribut `trigger`. Par défaut, il est à `hover`.

```html
<kui-row class="block-col-2">
  <kui-col :span="12">
    <span class="demonstration">En passant la souris</span>
    <kui-dropdown>
      <span class="kui-dropdown-link">
        Liste déroulante<i class="kui-icon-arrow-down kui-icon--right"></i>
      </span>
      <kui-dropdown-menu slot="dropdown">
        <kui-dropdown-item icon="kui-icon-plus">Action 1</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus">Action 2</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus-outline">Action 3</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-check">Action 4</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-check">Action 5</kui-dropdown-item>
      </kui-dropdown-menu>
    </kui-dropdown>
  </kui-col>
  <kui-col :span="12">
    <span class="demonstration">En cliquant</span>
    <kui-dropdown trigger="click">
      <span class="kui-dropdown-link">
        Liste déroulante<i class="kui-icon-arrow-down kui-icon--right"></i>
      </span>
      <kui-dropdown-menu slot="dropdown">
        <kui-dropdown-item icon="kui-icon-plus">Action 1</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus">Action 2</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-plus-outline">Action 3</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-check">Action 4</kui-dropdown-item>
        <kui-dropdown-item icon="kui-icon-circle-check">Action 5</kui-dropdown-item>
      </kui-dropdown-menu>
    </kui-dropdown>
  </kui-col>
</kui-row>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #7A00A3;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Fermer le menu

Utilisez l'attribut `hide-on-click` pour déterminer si le menu se ferme après avoir cliqué sur un élément de la liste.

:::demo Par défaut le menu se ferme après avoir cliqué dans la liste. Vous pouvez changer cette option en mettant `hide-on-click` à `false`.
```html
<kui-dropdown :hide-on-click="false">
  <span class="kui-dropdown-link">
    Liste déroulante<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #7A00A3;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Évènement command

Cliquer sur un élément du dropdown déclenche un évènement "command".
Le paramètre de cet évènement peut être assigné à chaque élément de la liste.

:::demo
```html
<kui-dropdown @command="handleCommand">
  <span class="kui-dropdown-link">
    Liste déroulante<i class="kui-icon-arrow-down kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item command="a">Action 1</kui-dropdown-item>
    <kui-dropdown-item command="b">Action 2</kui-dropdown-item>
    <kui-dropdown-item command="c">Action 3</kui-dropdown-item>
    <kui-dropdown-item command="d" disabled>Action 4</kui-dropdown-item>
    <kui-dropdown-item command="e" divided>Action 5</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
  .kui-dropdown-link {
    cursor: pointer;
    color: #7A00A3;
  }
  .kui-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
```
:::

### Tailles

En plus de la taille par défaut, le composant Dropdown propose trois autres tailles différentes.

:::demo Utilisez `size` pour déterminer une autre taille parmi `medium`, `small` ou `mini`.

```html
<kui-dropdown split-button type="primary">
  Défaut
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="medium" split-button type="primary">
  Medium
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="small" split-button type="primary">
  Small
  <kui-dropdown-menu slot="dropdown">
   <kui-dropdown-item>Action 1</kui-dropdown-item>
   <kui-dropdown-item>Action 2</kui-dropdown-item>
   <kui-dropdown-item>Action 3</kui-dropdown-item>
   <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<kui-dropdown size="mini" split-button type="primary">
  Mini
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item>Action 1</kui-dropdown-item>
    <kui-dropdown-item>Action 2</kui-dropdown-item>
    <kui-dropdown-item>Action 3</kui-dropdown-item>
    <kui-dropdown-item>Action 4</kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>
```
:::


### Attributs du Dropdown

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | Type du bouton, se référer au composant `Button`. Ne marche que si `split-button` est `true`.  | string  |  —   |    —     |
| size          | Taille du menu, marche aussi avec `split button`.  | string  | medium / small / mini  |    —     |
| split-button | Si le bouton est séparé en deux. | boolean         |     —       | false   |
| placement    | Emplacement du menu déroulant | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom-end |
| trigger       | Comment déclencher l'ouverture du menu.     | string  |    hover/click  |  hover |
| hide-on-click | Si le menu doit disparaître après avoir cliqué sur un élément.     | boolean          | — | true |
| show-timeout | Délai avant d'afficher le menu (ne marche que si `trigger` est `hover`) | number | — | 250 |
| hide-timeout | Délai avant de cacher le menu (ne marche que si `trigger` est `hover`) | number | — | 150 |
| tabindex     | [tabindex](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex) de Dropdown | number | — | 0 |
| disabled     | Si le Dropdown est désactivé | boolean | — | false |

### Dropdown Slots

| Nom | Description |
|------|--------|
| — | Contenu du Dropdown. Note: doit être un élément du DOM valide (ex. `<span>, <button> etc.`) ou `kui-component`, pour y attacher un évènement.  |
| dropdown | Contenu du menu du Dropdown, en général un élément `<kui-dropdown-menu>`. |

### Évènements du Dropdown

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| click | Si `split-button` est `true`, se déclenche quand le bouton de gauche est cliqué. | — |
| command | Se déclenche quand un élément de la liste est cliqué. | L'attribut command de l'élément de la liste. |
| visible-change | Se déclenche quand le menu s'affiche ou disparaît. | `true` quand il apparaît, `false` sinon. |

### Attributs des éléments du menu

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | Le contenu à envoyer au callback de l'évènement `command` du Dropdown. | string/number/object  |          —             |    —     |
| disabled      | Si l'élément est désactivé.  | boolean  |          —             |    false     |
| divided       | Si un diviseur doit être affiché.  | boolean  |          —             |    false     |
| icon          | Classe de l'icône. | string   |  —  |  —  |
