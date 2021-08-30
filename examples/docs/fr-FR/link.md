## Link

Un hyperlien textuel.

### Usage basique

Lien texte basique.

:::demo

```html
<div>
  <kui-link href="https://karman.eleme.io" target="_blank">défaut</kui-link>
  <kui-link type="primary">primaire</kui-link>
  <kui-link type="success">succès</kui-link>
  <kui-link type="warning">avertissement</kui-link>
  <kui-link type="danger">danger</kui-link>
  <kui-link type="info">info</kui-link>
</div>
```

:::

### Désactivé

Lien désactivé.

:::demo

```html
<div>
  <kui-link disabled>défaut</kui-link>
  <kui-link type="primary" disabled>primaire</kui-link>
  <kui-link type="success" disabled>succès</kui-link>
  <kui-link type="warning" disabled>avertissement</kui-link>
  <kui-link type="danger" disabled>danger</kui-link>
  <kui-link type="info" disabled>info</kui-link>
</div>
```

:::

### Souligné

Lien souligné.

:::demo

```html
<div>
  <kui-link :underline="false">non souligné</kui-link>
  <kui-link>Souligné</kui-link>
</div>
```

:::

### Icône

Lien avec icône.

:::demo

```html
<div>
  <kui-link icon="kui-icon-edit">Éditer</kui-link>
  <kui-link>Vérifier<i class="kui-icon-view kui-icon--right"></i> </kui-link>
</div>
```

:::

### Attributs

| Attribut  | Description                     | Type    | Options                                     | Défaut  |
| --------- | ------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | Type du lien.                   | string  | primary / success / warning / danger / info | défaut  |
| underline | Si le composant est souligné.   | boolean | —                                           | true    |
| disabled  | Si le composant est désactivé.  | boolean | —                                           | false   |
| href      | Identique au `href` natif.      | string  | —                                           | -       |
| icon      | Nom de classe de l'icône.       | string  | —                                           | -       |
