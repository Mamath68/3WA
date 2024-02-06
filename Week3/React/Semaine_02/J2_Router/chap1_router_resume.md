# React Router et LocalForage

## React Router

### Introduction à React Router

#### Qu'est-ce que React Router ?

🚀

React Router est une bibliothèque de routage pour React qui permet la gestion de la navigation côté client dans une application web.

#### Pourquoi utiliser React Router ?

- Permet la navigation sans rechargement de la page.
- Facilite la création de Single Page Applications (SPAs).
- Gère la synchronisation de l'interface utilisateur avec l'URL.

### Installation de React Router

#### Utilisation de npm pour l'installation

```bash
npm install react-router-dom
```

### Utilisation de React Router

#### Configuration des Routes

Dans le fichier principal (ex: `main.jsx`), configurez les routes avec `createBrowserRouter` et définissez les éléments pour chaque route.

```jsx
// main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // ... Autres routes
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

#### Création de Composants pour les Routes

Créez des composants React pour chaque route (ex: `Home.jsx`, `About.jsx`) et utilisez-les comme éléments dans la configuration des routes.

```jsx
// Home.jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Accueil</h2>
      {/* Contenu de la page d'accueil */}
    </div>
  );
};

export default Home;
```

#### Navigation avec `<Link>`

Utilisez `<Link>` pour créer des liens de navigation entre les différentes pages.

```jsx
// Dans un composant
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À Propos</Link></li>
      </ul>
    </nav>
  );
};
```

### Avantages de React Router

- Navigation fluide et rapide.
- Gestion de l'historique du navigateur.
- Facilite la création de pages dynamiques.

## Partie 2: navigate

- Exemple de navigation back et forward avec le hook useNavigate

```js
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <>
                    <button onClick={() => navigate(-1)}>Go back</button>
                    <button onClick={() => navigate(1)}>
                        Go forward
                    </button>
                </>
            </ul>
        </nav>
    )
}
```

## Partie 2: Routes Paramétrées avec React Router

### Introduction aux Routes Paramétrées

#### Qu'est-ce qu'une Route Paramétrée ?

>[!NOTE]
> Une route paramétrée dans React Router permet de définir des routes dont certaines parties peuvent changer dynamiquement en fonction des paramètres passés dans l'URL. Cela rend la gestion des routes plus flexible et puissante.

#### Utilisation des Routes Paramétrées

- Permet la capture de valeurs variables dans l'URL.
- Facilite la récupération de ces valeurs dans les composants associés à la route.

### Création de Routes Paramétrées

#### Configuration de la Route Paramétrée

Définissez des paramètres dans la configuration de la route à l'aide de `:paramName`.

```jsx
// main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import UserProfile from "./UserProfile"; // Composant associé à la route paramétrée

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/user/:userId", element: <UserProfile /> }, // Route paramétrée
  // ... Autres routes
]);
```

#### Récupération des Paramètres dans le Composant

Dans le composant associé à la route paramétrée, utilisez le hook `useParams` pour récupérer les valeurs des paramètres.

```jsx
// UserProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>Profil de l'utilisateur {userId}</h2>
      {/* Contenu du profil */}
    </div>
  );
};

export default UserProfile;
```

### Navigation vers des Routes Paramétrées Calculatrice

#### Utilisation de `<Link>` avec Paramètres

Créez des liens de navigation vers des routes paramétrées en passant les valeurs des paramètres.

```jsx
// Dans un composant
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <ul>
      <li><Link to="/user/1">Utilisateur 1</Link></li>
      <li><Link to="/user/2">Utilisateur 2</Link></li>
      {/* ... Autres utilisateurs */}
    </ul>
  );
};
```

### Avantages des Routes Paramétrées

- Gestion dynamique des routes en fonction des paramètres.
- Facilité de navigation et de récupération des paramètres.
- Permet de créer des interfaces utilisateur réactives.

### Exercice affichage des utilisateurs

1. En reprenant l'exercice de conversion, ce sont les utilisateurs de notre application de conversion.
1. Créez des pages pour affichez un utilisateur en fonction de son identifiant, en utilisant les routes paramètrées.
1. Créez la page qui affichera tous les utilisateurs

```js
const users = [
  { id: 1, name: 'John Doe', address: '123 Main St, Cityville, USA' },
  { id: 2, name: 'Jane Smith', address: '456 Oak Ave, Townsville, USA' },
  { id: 3, name: 'Bob Johnson', address: '789 Pine Ln, Villagetown, USA' },
  { id: 4, name: 'Alice Williams', address: '101 Cedar Blvd, Hamletville, USA' },
  { id: 5, name: 'Charlie Brown', address: '202 Elm Rd, Boroughburg, USA' },
];

export default users;
```

## Partie 4: LocalForage

### Introduction à LocalForage

#### Qu'est-ce que LocalForage ?

LocalForage est une bibliothèque qui fournit une API de stockage local, abstrayant différents backends de stockage tels que IndexedDB, WebSQL et localStorage.

#### Pourquoi utiliser LocalForage ?

- Stockage persistant des données côté client.
- API simple et cohérente pour interagir avec différents backends.
- Facilité d'utilisation par rapport aux API de stockage natif.

### Installation de LocalForage

#### Utilisations de npm pour l'installation

```bash
npm install localforage
```

### Utilisation de LocalForage

#### Initialisation de LocalForage

Dans le fichier principal de votre application (ex: `main.jsx`), initialisez LocalForage.

```jsx
// main.jsx
import localforage from "localforage";

localforage.config({
  driver: localforage.INDEXEDDB, // Choisissez le backend de stockage
  name: "myApp", // Nom de la base de données
  version: 1.0, // Version de la base de données
  storeName: "keyvaluepairs", // Nom du magasin
});
```

#### Utilisations de LocalForage

Utilisez les méthodes fournies par LocalForage pour stocker et récupérer des données.

```jsx
// Exemple d'utilisation dans un composant
import React, { useEffect } from "react";
import localforage from "localforage";

const MyComponent = () => {
  useEffect(() => {
    // Stockage de données
    localforage.setItem("myKey", "myValue");

    // Récupération de données
    localforage.getItem("myKey").then((value) => {
      console.log("Valeur récupérée:", value);
    });
  }, []);

  return <div

>Contenu du composant</div>;
};

export default MyComponent;
```

### 🚀  Avantages de LocalForage

- Abstraction des différents backends de stockage.
- Facilité d'utilisation avec des méthodes simples.
- Gestion transparente de la persistance des données.

---

Ce support de cours devrait vous donner une base solide pour comprendre et utiliser `react-router-dom` et `localforage` dans vos projets React. N'hésitez pas à ajuster le contenu en fonction de vos besoins spécifiques.

## Exercices

## Exercice 1: Mise en place de React Router

🚀 **Objectif :** Configurer React Router dans une application React simple : calculatrice.

## 🧮 Wireframe

```txt
+-----------------------------+
|         Menu Principal      |
+-----------------------------+
| 1. Lundi                   |
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
|   | 7 | 8 | 9 | | + |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 4 | 5 | 6 | | * |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 1 | 2 | 3 | |   |     |
|   +-------------+ +---+     |
|   +-------------+ +---+     |
|   | 0 | . | = | |   |     |
|   +-------------+ +---+     |
+-----------------------------+
```

### Tâches

1. Créez une petite calculatrice avec les opérateurs suivants : `fois`, `plus`.
1. Créez un nouveau projet React à l'aide de Vite.js.
1. Installez `react-router-dom` en utilisant npm.
1. Dans le fichier principal (`App.js` ou `App.jsx`), configurez React Router avec au moins deux routes (par exemple, une pour la page d'accueil et une pour une page de contact).
1. Créez des composants distincts pour chaque route et affichez un contenu simple dans chacun.

ℹ️ **Conseil :** Utilisez le composant `<Link>` pour créer des liens entre les différentes pages.

---

## Exercice 2: Utilisation de LocalForage

🚀 **Objectif :** Mettre en œuvre LocalForage pour le stockage local dans une application React.

### Tâche

1. Reprenez l'exercice précédent.
1. Installez `localforage` en utilisant npm.
1. Initialisez LocalForage dans le fichier principal de votre application.
1. Créez un composant React qui utilise LocalForage pour stocker et récupérer les données des résultats de chaque calcule effectué.
1. Affichez ces données dans votre application.

ℹ️ **Conseil :** Utilisez les méthodes `setItem` et `getItem` de LocalForage.

---

## Exercice 3: Routes Paramétrées

🚀 **Objectif :** Mettez en place et utilisez des routes paramétrées avec React Router.

### Tâchees

1. Reprenez l'exercice précédent
1. Ajoutez une nouvelle route paramétrée à votre configuration React Router : chaque route paramètrée affichera un jour de la semaine, le resultat de chaque calcul mémorisée par jour : `calcul/1` pour le jour 1 (dimanche), `calcul/2`, ..., `calcul/7` (samedi).
1. Créez un composant associé à cette route qui utilise `useParams` pour récupérer les valeurs des paramètres de l'URL.
1. Créez une liste d'éléments liens qui naviguent vers la route paramétrée avec des valeurs différentes.
1. Affichez les valeurs des paramètres dans le composant associé à la route paramétrée.

ℹ️ **Conseil :** Utilisez le composant `<Link>` avec des paramètres dans l'URL.

---

## Bon travail! 🎉
