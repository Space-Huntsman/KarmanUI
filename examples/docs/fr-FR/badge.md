## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<kui-badge :value="12" class="item">
  <kui-button size="small">Commentaires</kui-button>
</kui-badge>
<kui-badge :value="3" class="item">
  <kui-button size="small">Réponses</kui-button>
</kui-badge>
<kui-badge :value="1" class="item" type="primary">
  <kui-button size="small">Commentaires</kui-button>
</kui-badge>
<kui-badge :value="2" class="item" type="warning">
  <kui-button size="small">Réponses</kui-button>
</kui-badge>

<kui-dropdown trigger="click">
  <span class="kui-dropdown-link">
    Cliquez<i class="kui-icon-caret-bottom kui-icon--right"></i>
  </span>
  <kui-dropdown-menu slot="dropdown">
    <kui-dropdown-item class="clearfix">
      Commentaires
      <kui-badge class="mark" :value="12" />
    </kui-dropdown-item>
    <kui-dropdown-item class="clearfix">
      Réponses
      <kui-badge class="mark" :value="3" />
    </kui-dropdown-item>
  </kui-dropdown-menu>
</kui-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<kui-badge :value="200" :max="99" class="item">
  <kui-button size="small">Commentaires</kui-button>
</kui-badge>
<kui-badge :value="100" :max="10" class="item">
  <kui-button size="small">Réponses</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<kui-badge value="new" class="item">
  <kui-button size="small">Commentaires</kui-button>
</kui-badge>
<kui-badge value="hot" class="item">
  <kui-button size="small">Réponses</kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<kui-badge is-dot class="item">Requète</kui-badge>
<kui-badge is-dot class="item">
  <kui-button class="share-button" icon="kui-icon-share" type="primary"></kui-button>
</kui-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
