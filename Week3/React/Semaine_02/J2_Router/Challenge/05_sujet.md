# Jeu de Dés 🎲

## Contraintes

Vous allez créer une petite application avec Vite.js et react-router-dom. Vous utiliserez `useReducer` que nous avons vu cette semaine. Vous pouvez créer un fichier `reducer.js` à la racine du projet.

## Contexte

Vous créez un bouton qui lance trois dés et compte le nombre de fois que l'on obtient un brelan de 6, où un brelan est défini comme trois dés identiques. À chaque fois que l'on relance l'expérience, on réinitialise le compteur.

L'application possède trois pages : la page Home qui permet de lancer l'expérience, une page de description qui décrit le jeu, et une page permettant de consulter les statistiques.

## Page Home - Jeu

Sur cette page, vous avez un bouton pour lancer les dés au nombre de 3. Un autre champ du formulaire permet de définir le nombre de fois que vous répétez l'expérience. Pour consulter les résultats, un lien cliquable permet de voir la page des statistiques. Vous utiliserez les paramètres de react-router-dom de route pour afficher les résultats.

```txt
[Jeu] 🎲 [Description]

Nombre d'expériences : [100]

[Lancer]

[Résultat] 🎉
```

## Partie facultative

Explorez d'autres combinaisons du jeu du Yam. 🎲