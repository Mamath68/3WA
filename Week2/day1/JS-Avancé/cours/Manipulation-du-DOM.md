# Manipulation du DOM

## textContent

La propriété *textContent* est une propriété de manipuler le contenu textuel (le texte à l'intérieur des <>) d'un élément html : le récupérer ou le modifier.

```javascript
const paragraph = document.querySelector('p');
paragraph.textContent = "Modification du contenu textuel";
```

Attention si il y a du html à l'intérieur il ne sera pas interprété (c'est la propriété *innerHTML* qui le permet).

## classList

La propriété *classList* permet de manipuler les classes d'un élément html. Il existe plusieurs méthodes pour la manipulation des classes css :

* add : permet d'ajouter une classe
* remove : permet de retirer une classe
* toggle : ajoute la classe si elle n'est pas déjà présente sinon elle la retire
* contains : renvoie un booléen si la classe précisée se trouve sur l'élément

## dataset

Les attributs data-* vont permettre de stocker des informations qui vont servir principalement dans le code js.

```html
<p data-id="42">...</p>
```

```javascript
const paragraph = document.querySelector('p');
console.log(paragraph.dataset.id);
```

## Création d'éléments dynamiques

Grâce à la fonction *document.createElement* on peut créer de nouveaux éléments dans la page web.

```javascript
const paragraph = document.createElement('p');
paragraph.textContent = "Bonjour tout le monde";
paragraph.classList.add('important');

const section = document.querySelector('#paragraphs');
section.append(paragraph);
```
