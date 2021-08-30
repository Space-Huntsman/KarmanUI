## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `kui-breadcrumb`, chaque `kui-breadcrumb-item` est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type `String` appelé `separator` qui détermine le séparateur. Sa valeur par défaut est '/'.

```html
<kui-breadcrumb separator="/">
  <kui-breadcrumb-item :to="{ path: '/' }">Accueil</kui-breadcrumb-item>
  <kui-breadcrumb-item><a href="/">Gestion promotions</a></kui-breadcrumb-item>
  <kui-breadcrumb-item>Liste promotions</kui-breadcrumb-item>
  <kui-breadcrumb-item>Détail promotion</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<kui-breadcrumb separator-class="kui-icon-arrow-right">
  <kui-breadcrumb-item :to="{ path: '/' }">Accueil</kui-breadcrumb-item>
  <kui-breadcrumb-item>Gestion promotions</kui-breadcrumb-item>
  <kui-breadcrumb-item>Liste promotions</kui-breadcrumb-item>
  <kui-breadcrumb-item>Détail promotion</kui-breadcrumb-item>
</kui-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'historique. | boolean | — | false |
