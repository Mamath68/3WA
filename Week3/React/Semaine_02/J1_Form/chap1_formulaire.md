# Introduction aux formulaires

Nous allons maintenant introduire la notion de formulaire.

En HTML les éléments de formulaire tels que input, textearea et select conservent leur propre état et sont mis à jour en fonction des données passées par l'utilisateur.

Dans React la gestion des "mutables" passera ici par un state avec setState pour sa mise à jour.

**Exemple de formulaire :**

```js
const function Form (props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`New User : ${value}`);
    event.preventDefault();
  };

   return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={state.value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
};
```

## 01 Exercice formulaire User

_Vous pouvez faire l'exercice dans un seul et même fichier._

Créez un formulaire pour ajouter à une liste user des utilisateurs, vous forcerez la saisie en majuscule dans le champ de saisie.

Vérifiez que l'utilisateur n'existe pas déjà dans la liste, si l'utilisateur se trompe alors affichez un message d'avertissement.

Gérez également le cas où le champ est vide dans l'ajout d'un utilisateur.

Affichez la liste des utilsateurs sous le formulaire, affichez dans un composant Users la liste.

Indication sur la structure de l'application :

```text
  App
    .
    .
  Form
    .
    .
  Users
```

## Textarea

La particularité d'un textarea en HTML c'est qu'il définit son contenu texte par une structure de type composition. React utilise l'attribut value pour définir la valeur d'un élément, vous utiliserez donc la syntaxe suivante avec cet élément :

```js
<textarea value={value} onChange={handleChange} />
```

## Select

En HTML classique on écrit :

```html
<select>
  <option selected value="devReact">Alan</option>
  <option value="devSymfony">Alice</option>
  <option value="devDjango">Naoudi</option>
  <option value="devAngular">Fenley</option>
</select>
```

En React vous écrirez la syntaxe suivante :

```js
function Form (props) {
const [value, setValue] = React.useState("devReact");

// ...

// render
  return(
    <select value={value} onChange={handleChange}>
      <option value="devReact">Alan</option>
      <option value="devSymfony">Alice</option>
      <option value="devDjango">Naoudi</option>
      <option value="devAngular">Fenley</option>
    </select>
  )
}
```

### Select multiple

Pour la gestion d'une sélection multiple, vous pouvez passer un array comme suit :

```js
<select multiple={true} value={['a', 'b', 'c']}>
```

La gestion de l'upload des fichiers sera vue plus tard dans le cours.

## Gestion des inputs multiples

On peut évidemment gérer les différentes valeurs des champs du formulaire en s'inspirant de ce que l'on vient de faire, mais dans ce cas la gestion des variables peut devenir compliquée selon la longueur du formulaire.

Vous pouvez cependant utiliser la syntaxe suivante pour contrôler la saisie des valeurs de plusieurs champs :

```js
// fields dans le state = { username : '', email : '' };
const { value, name } = event.target;
```

## 02 Exercice formulaire calcul des multiples d'un nombre entier

Créez un projet avec vite.js

:shell:

```bash
# tapez la ligne de commande suivante pour configurer un projet avec vite.js 
npm create vite@latest
```

1. Sélectionnez un projet React sans TypeScript, un projet React seul.
1. Tapez entrée
1. Mettez dans le dossier de l'application et tapez la commande suivante

 :shell:

```bash
npm install 

# lance le serveur de tests
npm run dev 
```

vite est un builder qui permet d'avoir une structure d'application simple pour développer.

- index.html dans le dossier de l'application est le point d'entrée de l'application avec #root pour l'arbre de React
- main.jsx est un fichier d'amorçage ou bootstrap qui configure les dépendances de l'application.
- Le reste des dossiers et fichiers du dossier src/ c'est une structure classique d'application, où on développera les composants et leurs fichiers de styles spécifiques et global index.css définira les styles CSS pour l'ensemble des composants.

```txt
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── index.css
└── main.jsx
```

_Vous pouvez faire l'exercice dans un seul et même fichier._

1. Créez un formulaire permettant de calculer les multiples d'un nombre entier, vous afficherez tous ses multiples inférieurs ou égale à 20.

Créez un champ de sélection permettant de choisir un nombre parmi une liste de valeurs. Pensez à faire une boucle.

```js
<select value={base} onChange={(e) => setBase(e.target.value) }>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="7">7</option>
  <option value="0">Aucune</option>
</select>
```

Vous afficherez le résultat sous le formulaire dans une liste ul/li.

Pensez à gérer les erreurs dans ce formulaire.

Voyez le wireframe suivant pour vous aider :

```text
 [11]

-----

Multiple de 11 :
11 
22 
```

1. Affichez les nombres avec un bouton de suppression, implémentez pour chaque valeur la possibilité de supprimer une valeur ou plusieurs.

```text
 [11]

-----

Multiple de 11 :
11 []
22 []
```
