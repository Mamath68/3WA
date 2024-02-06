
# TP Calcularice avec mémoire

## Partie 1: Mise en place de React Router

🚀 **Objectif :** Configurer React Router dans une application React simple : calculator.

## 🧮 Wireframe

```txt
+-----------------------------+
|      Home - Contact        |
+-----------------------------+
| 1. Lundi  <->  /day/2      |
| 2. Mardi                   |
| 3. Mercredi                |
| 4. Jeudi                   |
| 5. Vendredi                |
| 6. Samedi                  |
| 7. Dimanche                |
+-----------------------------+
|         Calculatrice       |
+-----------------------------+
|                             |
|   +---------------------+   |
|   |      Affichage      |   |
|   +---------------------+   |
|                             |
|   +-------------+ +---+     |
|   | 7 | 8 | 9 | | +   |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 4 | 5 | 6 | | *   |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 1 | 2 | 3 | |     |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 0 | . | = | |     |     |
|   +-------------+ +---+     |
+-----------------------------+
```

### Tâches

1. Créez un nouveau projet React à l'aide de Vite.js.
1. Créez une petite calculatrice avec les opérateurs suivants 👉  `x`, `+`.
1. Installez `react-router-dom` en utilisant npm.
1. Dans le fichier principal (`App.js` ou `App.jsx`), configurez React Router avec au moins deux routes pour commencer, par exemple Home et Contact .
1. Créez des affichages distincts pour chaque jour de la semaine et affichez un contenu simple dans chacun. Pour chaque jour on mémorise l'ensemble des calculs effetués par jour (voir les autres parties)

ℹ️ **Conseil :** Utilisez le composant `<Link>`  ou `<NavLink />` pour créer des liens entre les différentes pages.

---

## Partie 2: Utilisation de LocalForage

🚀 **Objectif :** Mettre en œuvre LocalForage pour le stockage local dans une application React.

### Tâche

1. Reprenez l'exercice précédent.
1. Installez `localforage` en utilisant npm.
1. Initialisez LocalForage dans le fichier principal de votre application (voir la documentation pour la mise de place de ce module).
1. Créez un composant React qui utilise LocalForage pour stocker et récupérer les données des résultats de chaque calcule effectué par jour.
1. Affichez ces données dans votre application (voir plus loin).

ℹ️ **Conseil :** Utilisez les méthodes `setItem` et `getItem` de LocalForage.

---

## Partie 3: Routes Paramétrées

🚀 **Objectif :** Mettez en place et utilisez des routes paramétrées avec React Router.

### Tâchees

1. Reprenez l'exercice précédent
1. Ajoutez une nouvelle route paramétrée à votre configuration React Router : chaque route paramètrée affichera un jour de la semaine, les resultats de chaque calcul mémorisée par jour : `day/1` pour le jour 1 (dimanche), `day/2`, ..., `day/7` (samedi).
1. Créez un composant associé à cette route qui utilise `useParams` pour récupérer les valeurs des paramètres de l'URL. Et affichez les données.
1. Affichez les valeurs des paramètres dans le composant associé à la route paramétrée.

ℹ️ **Conseil :** Utilisez le composant `<Link>` ou `<NavLink>` avec des paramètres dans l'URL.

---

# Bon travail! 🎉
