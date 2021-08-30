## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<kui-row>
  <kui-button>Défaut</kui-button>
  <kui-button type="primary">Primary</kui-button>
  <kui-button type="success">Success</kui-button>
  <kui-button type="info">Info</kui-button>
  <kui-button type="warning">Warning</kui-button>
  <kui-button type="danger">Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain>Plein</kui-button>
  <kui-button type="primary" plain>Primary</kui-button>
  <kui-button type="success" plain>Success</kui-button>
  <kui-button type="info" plain>Info</kui-button>
  <kui-button type="warning" plain>Warning</kui-button>
  <kui-button type="danger" plain>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button round>Arrondi</kui-button>
  <kui-button type="primary" round>Primary</kui-button>
  <kui-button type="success" round>Success</kui-button>
  <kui-button type="info" round>Info</kui-button>
  <kui-button type="warning" round>Warning</kui-button>
  <kui-button type="danger" round>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button icon="kui-icon-search" circle></kui-button>
  <kui-button type="primary" icon="kui-icon-edit" circle></kui-button>
  <kui-button type="success" icon="kui-icon-check" circle></kui-button>
  <kui-button type="info" icon="kui-icon-message" circle></kui-button>
  <kui-button type="warning" icon="kui-icon-star-off" circle></kui-button>
  <kui-button type="danger" icon="kui-icon-delete" circle></kui-button>
</kui-row>
```
:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<kui-row>
  <kui-button disabled>Défaut</kui-button>
  <kui-button type="primary" disabled>Principal</kui-button>
  <kui-button type="success" disabled>Succès</kui-button>
  <kui-button type="info" disabled>Info</kui-button>
  <kui-button type="warning" disabled>Attention</kui-button>
  <kui-button type="danger" disabled>Danger</kui-button>
</kui-row>

<kui-row>
  <kui-button plain disabled>Plein</kui-button>
  <kui-button type="primary" plain disabled>Principal</kui-button>
  <kui-button type="success" plain disabled>Succès</kui-button>
  <kui-button type="info" plain disabled>Info</kui-button>
  <kui-button type="warning" plain disabled>Attention</kui-button>
  <kui-button type="danger" plain disabled>Danger</kui-button>
</kui-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo
```html
<kui-button type="text">Bouton texte</kui-button>
<kui-button type="text" disabled>Bouton texte</kui-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Karman. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<kui-button type="primary" icon="kui-icon-edit"></kui-button>
<kui-button type="primary" icon="kui-icon-share"></kui-button>
<kui-button type="primary" icon="kui-icon-delete"></kui-button>
<kui-button type="primary" icon="kui-icon-search">Recherche</kui-button>
<kui-button type="primary">Upload<i class="kui-icon-upload kui-icon-right"></i></kui-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<kui-button-group>` pour grouper vos boutons.

```html
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-arrow-left">Page précédente</kui-button>
  <kui-button type="primary">Page suivante<i class="kui-icon-arrow-right kui-icon-right"></i></kui-button>
</kui-button-group>
<kui-button-group>
  <kui-button type="primary" icon="kui-icon-edit"></kui-button>
  <kui-button type="primary" icon="kui-icon-share"></kui-button>
  <kui-button type="primary" icon="kui-icon-delete"></kui-button>
</kui-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<kui-button type="primary" :loading="true">Chargement</kui-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<kui-row>
  <kui-button>Défaut</kui-button>
  <kui-button size="medium">Medium</kui-button>
  <kui-button size="small">Small</kui-button>
  <kui-button size="mini">Mini</kui-button>
</kui-row>
<kui-row>
  <kui-button round>Défaut</kui-button>
  <kui-button size="medium" round>Medium</kui-button>
  <kui-button size="small" round>Small</kui-button>
  <kui-button size="mini" round>Mini</kui-button>
</kui-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
