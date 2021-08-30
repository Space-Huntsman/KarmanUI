## Radio

Boutons de sélection entre plusieurs options.

### Usage

Radio ne devrait pas avoir trop d'options. Dans ce cas utilisez plutôt Select.

:::demo Créer un composant Radio est facile, vous avez juste besoin de lier les `v-model` des options. Chacun équivaut à la valeur de `label` du radio correspondant. Le type de `label` est `String`, `Number` ou `Boolean`.
```html
<template>
  <kui-radio v-model="radio" label="1">Option A</kui-radio>
  <kui-radio v-model="radio" label="2">Option B</kui-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Désactivé

L'attribut `disabled` désactive le radio.

:::demo Ajoutez simplement l'attribut `disabled` au radio.
```html
<template>
  <kui-radio disabled v-model="radio" label="disabled">Option A</kui-radio>
  <kui-radio disabled v-model="radio" label="selected and disabled">Option B</kui-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Groupe de boutons radio

Utile pour choisir entre plusieurs groupes d'options mutuellement exclusives.

:::demo Combinez `kui-radio-group` avec `kui-radio` pour afficher un groupe de radios. Liez une variable au `v-model` de `kui-radio-group` et configurez le label dans `kui-radio`. Cet élément fournit aussi l'évènement `change` qui a en paramètre la valeur courante.

```html
<kui-radio-group v-model="radio">
  <kui-radio :label="3">Option A</kui-radio>
  <kui-radio :label="6">Option B</kui-radio>
  <kui-radio :label="9">Option C</kui-radio>
</kui-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### Style bouton

Des radios affichés comme des boutons standards.

:::demo Changez simplement `kui-radio` pour `kui-radio-button`. L'attribut `size` permet de régler la taille.
```html
<template>
  <div>
    <kui-radio-group v-model="radio1">
      <kui-radio-button label="New York"></kui-radio-button>
      <kui-radio-button label="Washington"></kui-radio-button>
      <kui-radio-button label="Los Angeles"></kui-radio-button>
      <kui-radio-button label="Chicago"></kui-radio-button>
    </kui-radio-group>
  </div>
  <div style="margin-top: 20px">
    <kui-radio-group v-model="radio2" size="medium">
      <kui-radio-button label="New York" ></kui-radio-button>
      <kui-radio-button label="Washington"></kui-radio-button>
      <kui-radio-button label="Los Angeles"></kui-radio-button>
      <kui-radio-button label="Chicago"></kui-radio-button>
    </kui-radio-group>
  </div>
  <div style="margin-top: 20px">
    <kui-radio-group v-model="radio3" size="small">
      <kui-radio-button label="New York"></kui-radio-button>
      <kui-radio-button label="Washington" disabled ></kui-radio-button>
      <kui-radio-button label="Los Angeles"></kui-radio-button>
      <kui-radio-button label="Chicago"></kui-radio-button>
    </kui-radio-group>
  </div>
  <div style="margin-top: 20px">
    <kui-radio-group v-model="radio4" disabled size="mini">
      <kui-radio-button label="New York"></kui-radio-button>
      <kui-radio-button label="Washington"></kui-radio-button>
      <kui-radio-button label="Los Angeles"></kui-radio-button>
      <kui-radio-button label="Chicago"></kui-radio-button>
    </kui-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
```
:::

### Avec bordures

:::demo L'attribut `border` ajoute une bordure aux radios.
```html
<template>
  <div>
    <kui-radio v-model="radio1" label="1" border>Option A</kui-radio>
    <kui-radio v-model="radio1" label="2" border>Option B</kui-radio>
  </div>
  <div style="margin-top: 20px">
    <kui-radio v-model="radio2" label="1" border size="medium">Option A</kui-radio>
    <kui-radio v-model="radio2" label="2" border size="medium">Option B</kui-radio>
  </div>
  <div style="margin-top: 20px">
    <kui-radio-group v-model="radio3" size="small">
      <kui-radio label="1" border>Option A</kui-radio>
      <kui-radio label="2" border disabled>Option B</kui-radio>
    </kui-radio-group>
  </div>
  <div style="margin-top: 20px">
    <kui-radio-group v-model="radio4" size="mini" disabled>
      <kui-radio label="1" border>Option A</kui-radio>
      <kui-radio label="2" border>Option B</kui-radio>
    </kui-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
```
:::

### Attributs de Radio

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| label | La valeur du radio. | string / number / boolean | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| border  | Si une bordure doit être affichée autour du radio. | boolean   | — | false |
| size  | Taille du radio, ne marche que si `border` est `true`. | string  | medium / small / mini | — |
| name | Attribut 'name' natif. | string | — | — |

### Évènements de Radio

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs de Radio-group

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| size | Taille des radios. | string | medium / small / mini | —
| disabled  | Si les radios sont désactivés. | boolean   | — | false
| text-color | Couleur du texte quand le bouton est actif. | string | — | #ffffff   |
| fill  | Bordure et couleur de fond quand le bouton est actif. | string | — | #409EFF |

### Évènements de Radio-group

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs Radio-button

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| label | Valeur du radio. | string / number | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| name | Attribut 'name' natif. | string | — | — |
