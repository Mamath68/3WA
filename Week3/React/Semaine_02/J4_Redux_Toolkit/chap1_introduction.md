# Redux toolkit

Dans la suite du cours vous utiliserez **vite** comme bundle pour créer un nouveau projet.

```bash
npm create vite@latest
```

Puis pour installer un nouveau projet React on ajoute le nom de l'application et l'option --template react.

:shell:

```bash
# installer un nouveau projet en précisant l'utilisation de React
npm create vite@latest counter --template react

# installation des dépendances
npm install @reduxjs/toolkit

# pour binder avec des Hooks les fonctionnalités de reduxtoolkit dans React
npm install react-redux
```

## createSlice gestion du state

🚀 C'est une fonction, createSlice, qui accepte un état initial, et qui gère des créateurs d'action, permet de découper le state en plus petites parties autonomes.

- Exemple dans un fichier messageSlice.jsx

```js
// import de la fonction 
import { createSlice } from '@reduxjs/toolkit'

// définit un state 
const initialState = { message: '' }

const messageSlice = createSlice({
// clé permettant d'identifier le reducer spécifique 
  name: 'message',
  initialState,
  // gestions des actions dans le/les reducer(s) du state
  reducers: {
    showMessage(state, action) {
      state.message = action.payload
    }
  },
})

// Export des actions
const store = configureStore({
     reducer: {
       e : messageSlice.reducer
    }
});

export const { showMessage } = messageSlice.actions

// pour contextualiser le store dans l'arbre React
export default store;
```

Une fois que l'on a contextualisé le store de redux avec le component Provider de react-redux, on doit utiliser ses hooks, afin de pouvoir lire et dispatcher des actions dans le state, les actions de reduxtoolkit sont importées.

```js
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/valueSlice';

// ...
```

### Partie 1 : Exercice counter synchrone

> [!WARNING]
> Rappelons que Redux gère les actions de manière synchrone.

1. Créez un compteur aléatoire en utilisant reduxtoolkit.

1. Installez le projet **app-counter** avec vite (bundle).

1. Créez un bouton pour incrémenter une valeur de manière aléatoire.

1. Pour chaque valeur affichée; vous indiquerez si le nombre est pair ou impair. Aidez-vous de la remarque qui suit pour mettre en place cette fonctionnalité.

👉 Remarque : Dans la partie reducers de votre slice (createSlice), vous pouvez découper une action en une fonction **reducer** et une fonction **prepare**, cette dernière fonction permet de gérer le payload, voyez l'exemple ci-dessous :

```js
reducers: {
        increment: {
            reducer: (state, action) => {}
        }
        prepare : () => ({payload : ...})
}
```

## Parti 2 : 🤖 Gestion d'un state asynchrone dans notre exercice

On utilise dans cette exemple la fonction **createAsynchThunk** de reduxtoolkit

👉 Une action asynchrone ne peut être dispatcher dans Redux sans passer par le middleware **Thunk** qui est intégré dans reduxtoolkit.

>[!NOTE]
> En effet, toutes les actions dans Redux sont dispatchées de manière synchrone, **createAsynchThunk** attendra la résolution de la Promesse et dispatchera l'action dans le reducer de manière synchrone.

### Mise en pratique

On définit d'abord la fonction asynchrone à l'aide de **createAsynchThunk** elle-même, voyez l'exemple qui suit :

```js
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus', // nom interne pour reduxtoolkit
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)
```

Puis dans la partie createSlice on précise les états de la promesse, au moins fullfilled ( promesse résolue ).

- 👉 **extraReducers** permet le traitement de la promesse dans le createSlice

```js
const usersSlice = createSlice({
  name: 'users',
  initialState : { entities : [] },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      // todo ?
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload)
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
        // todo ?
    })
  },
})
```

1. Définissez un compteur asynchrone dans une promesse, affichez avec un délai de 500ms les nombres du compteur.

### 03 Exercice middleware

Nous allons afficher une liste incrémentable d'étoiles dans le component principal; pour chaque incrémentation d'une valeur aléatoire pair ou impair, on affichera une étoile. Cette liste "graphique" sera placée sous les valeurs affichées par notre compteur précédent, voyez le wireframe ci-après.

Pour définir un middleware, précisez que l'on utilise thunk, cependant on utilisera l'autre méthode ci-après à l'aide de la fonction getDefaultMiddleware et de sa méthode concat pour ajouter nos middlewares au createStore. Notons que dans ce cas le middleware thunk est ajouté par défaut par reduxtoolkit.

```js
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
})
```

Dans la fonction **createStore** ajoutez la fonction suivante pour la clé middleware:

```js

const middlewares = [
    ((store) => (next) => (action) => { /* ... */})
];

createStore({
    reducer { },
    middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat([ ...middlewares ] )
});
```

Rendu visuel

![counter](./images/counter.png)
