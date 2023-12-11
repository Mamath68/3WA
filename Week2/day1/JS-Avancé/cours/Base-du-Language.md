# Les bases du langage javascript

## Chargement des fichiers

Les fichiers js sont chargés à l'aide de la balise *script* dans le fichier *index.html*.

```html
<script src="js/main.js" defer>
```

L'attribut *defer* permet au script d'être chargé seulement quand la page est prête.

## Syntaxe

### Variables

Les variables permettent de stocker des données et de les réutiliser plus loin. En JavaScript il existe les mots-clé *let* et *const* pour stocker des informations.

```javascript
// Déclaration d'une variable text contenant la chaîne de caractères Hello world
let text = "Hello world";

// On peut modifier le contenu de la variable text
text = "Hello Toto";

// Déclaration d'une constante pi content un nombre à virgule
const pi = 3.14;

// La constante ne peut pas être modifiée
// pi = 42;     => erreur !
```

Les variables et constantes déclarées à l'aide de *let* et *const* n'existent que dans le bloc dans lequel elles ont été définies.

### Types

#### Chaîne de caractères

Les chaînes de caractères sont des données textuelles. Une chaîne de caractère est entourée de "" ou ''.

```javascript
const name = "Toto";
let age = 20;

console.log('Bonjour ' + name + ', tu as ' + age + 'ans');
```

Le caractère "+" permet de faire de la concaténation, c'est-à-dire rassembler plusieurs chaîne de caractères. Pour éviter de mettre des "+" partout, on peut utiliser l'interpolation de chaînes de caractères.

```javascript
const name = "Toto";
let age = 20;

console.log(`Bonjour ${name}, tu as ${age} ans`);
```

#### Tableaux

Les tableaux permettent de stocker plusieurs éléments.

```javascript
const fruits = [
    "Orange",
    "Pomme",
    "Ananas",
    "Cerise",
    "Fraise"
];
```

Ces données sont identifiées par un index dans le tableau, index qui commence toujours à 0 et qui augmente de 1 entre chaque élément. On peut récupérer le nombre d'éléments contenus dans un tableau à l'aide de la propriété *length*.

```javascript
console.log("Il y a " + fruits.length + " éléments dans ce tableau");
```

On peut ajouter d'autres éléments dans ce tableau à l'aide de la méthode *push*.

```javascript
// La méthode push permet d'ajouter 1 ou plusieurs éléments dans le tableau
fruits.push("Framboise");
fruits.push("Kiwi", "Banane", "Myrtille");
console.log(fruits);
```

On peut accéder à un élément en particulier dans ce tableau grâce à l'index de l'élément dans le tableau.

```javascript
console.log(fruits[1]);     // Affiche Pomme
```

Pour en savoir plus sur les tableaux : [Documentation sur les tableaux](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Objets

Les objets permettent de stocker plusieurs données. Ces données sont identifiées par un nom de propriété.

```javascript
const user = {
    firstname: "John",
    lastname: "Doe"
};
```

On peut accéder à une donnée à l'aide de la propriété.

```javascript
console.log(user.firstname + " " + user.lastname);
```

Il est possible de rajouter des propriétés sur un objet déjà existant.

```javascript
// Ajout d'une propriété age contenant la valeur 42 à l'objet user déjà défini
user.age = 42;
```

### Conditions

Les conditions vont permettre d'exécuter certaines instructions en fonction d'une condition.

```javascript
if (condition) {
    /*
     * Instructions exécutées si la condition est vraie (condition == true)
     */
} else {
    /*
     * Instructions exécutées si la condition est fausse (condition == false)
     */
}
```

```javascript
let age = 20;

if (age >= 18) {
    console.log("Vous êtes une personne majeure");
} else {
    console.log("Vous êtes une personne mineure");
}
```

### Boucles

Les boucles vont permettre de répéter certaines instructions en fonction d'une condition.

```javascript
while (condition) {
    /*
     * Instructions exécutées tant que la condition est vraie (condition == true)
     */
}
```

Il existe différents types de boucles : for, while, foreach.

#### La boucle for

La boucle for est principalement utilisée pour réaliser des compteurs.

```javascript
for (let counter = 1; counter <= 100; counter++) {
    console.log(counter);
}
```

#### La boucle while

La boucle while est une boucle générique qui marche dans tous les cas.

```javascript
let counter = 1;

while (counter <= 100) {
    console.log(counter);
    
    counter++;
}

let userInput = prompt("Saisir un nombre entre 1 et 100");

while (userInput < 1 || userInput > 100) {
    userInput = prompt("Le nombre saisi n'est pas compris entre et 1 et 100");
}
```

#### La boucle for...of

La boucle for...of permet de parcourir un tableau (aussi appelée boucle "foreach").

```javascript
// Avant l'arrivée de cette boucle "foreach", on pouvait parcourir les tableaux avec la boucle for traditionnelle
const fruits = [
    "Orange",
    "Pomme",
    "Ananas",
    "Cerise",
    "Fraise"
];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Grâce à la boucle for...of on peut parcourir plus facilement ce tableau
for (let fruit of fruits) {
    console.log(fruit);
}
```
