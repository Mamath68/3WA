# Support de Cours sur Context API et useReducer en React

**Introduction :**
La **Context API** de React est une fonctionnalité qui permet de partager des données entre différents composants sans avoir besoin de passer ces données à travers les composants intermédiaires. Cela améliore la gestion de l'état global de l'application et facilite la communication entre les composants.

En combinaison avec la **useReducer** hook, la Context API devient un outil puissant pour gérer des états complexes de manière plus organisée, en utilisant des actions et des reducers. Cela est particulièrement utile dans le cas de la gestion d'états partagés entre plusieurs composants.

**1. Création du Contexte :**
Pour commencer, créez un contexte à l'aide de la fonction `createContext()`. Il est généralement recommandé de nommer les contextes en PascalCase pour les distinguer plus facilement.

```javascript
const CalculateContext = createContext();
```

**2. Mise en Place du Provider :**
Le Provider est responsable de la mise à disposition du state et des fonctions de dispatch à tous les composants enfants. Dans ce cas, nous utilisons le hook `useReducer` pour gérer l'état global de l'application.

```javascript
export const CalculateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setNumber = (number) => {
        dispatch({ type: "SET_NUMBER", payload: number });
    };

    // ... (définir d'autres fonctions comme setSymbol, reset, setOperator, calcul)

    return (
        <CalculateContext.Provider value={{ state, setNumber, reset, setOperator, calcul, setSymbol }}>
            {children}
        </CalculateContext.Provider>
    );
};
```

**3. Utilisation du Contexte avec useCalculator Hook :**
Le hook `useCalculator` permet à un composant de consommer le contexte créé précédemment et d'accéder au state et aux fonctions de dispatch associées.

```javascript
export const useCalculator = () => {
    return useContext(CalculateContext);
};
```

**Exemple d'Utilisation dans un Composant :**
Maintenant, dans n'importe quel composant où vous souhaitez accéder à l'état global ou exécuter des actions, utilisez le hook `useCalculator`.

```javascript
import React from "react";
import { useCalculator } from "./votreCheminVersLeFichierAvecLeHook";

const CalculatorComponent = () => {
    const { state, setNumber, reset, setOperator, calcul, setSymbol } = useCalculator();

    // Utilisez state et les fonctions de dispatch selon vos besoins

    return (
        // Votre composant JSX
    );
};
```

**Conclusion :**
En utilisant la Context API et le useReducer hook, vous pouvez créer une gestion d'état centralisée et simplifiée pour votre application React. Cela améliore la maintenabilité du code en évitant les problèmes liés à la propagation d'états à travers de multiples composants.