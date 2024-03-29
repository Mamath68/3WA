# React State

> **Note**
> Afin d'expliquer le concept d'un **state**, nous allons repasser temporairement sur l'écriture d'un composant en classe ES6 (qui l'intègrent nativement)
> Sachez que l'on peut toutefois utiliser un state dans un composant de fonction, mais cela nécessite d'aborder la notion des _hooks_, ce qui est prévu plus loin dans ce cours …

Un state permet d'ajouter un état LOCAL à un composant.

Il existe une autre propriété en React le **state** qui est **"mutable"**. On met à jour cette propriété à l'aide d'une autre méthode `setState`. Cette méthode compare la valeur initiale de la propriété avec la valeur qui a changé et `setState` effectue un delta; si ce delta a changé, React met à jour la valeur du state. Cette méthode sera toujours à utiliser pour mettre à jour le state :

```js
this.state = {
  a: 1,
  b: 2,
};
```

**Lecture du state** dans le code :

```js
this.state.a;
this.state.b;
```

Ne cherchez pas à mettre à jour le state d'une autre manière. Par exemple ce qui suit n'est pas la bonne méthode ceci ne mettra pas à jour le rendu :

```js
// dans l'ancien code en class
// ❌ Ne fonctionnera pas !
this.state.a = 2;
```

Dans un composant fonctionnel vous ne pouvez pas modifier l'état d'un state comme suit :

```js
const [timer, setTimer] = React.useState(new Date)

// ❌ Ne fonctionnera pas !
timer = new Dat
```

Pour mettre à jour le state vous devez utiliser la méthode `setState`, elle mettra à jour le rendu (re-exécution, avec les classes, de la méthode render de la classe).

**Mise à jour du state** : notez que la mise à jour ci-dessous n'écrase pas la valeur "b" du state que l'on a défini précédemment, elle met à jour uniquement la valeur "a" du state. React fait ce que l'on appelle un delta avec le state initial.

```js
// dans l'ancien code en class
// ✅ Correct
this.setState({ a: 11 });
```

Avec un composant fonctionel, pour le modifier ( bonne pratique pour définir les composants )

```js
const [timer, setTimer] = React.useState(new Date)
// ✅ Correct
setTimer( new Date ) 
```

En résumé :

- un accès possible au state avec :

```js
// dans l'ancien code en class
this.state.maValeur;

// dans l'approche fonctionnelle
timer
```

- Une fonction pour mettre à jour le state :

```js
this.setState({ maValeur: "nouvelle valeur" });
```

## 01 Exemple complet avec une classe

```jsx
class TestState extends React.Component {
  constructor(props) {
    super(props);

    // Déclaration d'un état local (state), comprenant un compteur `count` initialisé à 0
    this.state = {
      count: 0,
    };
  }

  render() {
    // un setTimeout ne s'exécute qu'une seule fois, c'est le re-render qui ré-exécutera le settimeout
    setTimeout(() => {
      // à chaque fois cela déclenche un re-render
      this.setState({ count: this.state.count + 1 });
      // ne déclenche pas de re-render
      // this.state.count++;
      console.log(this.state.count);
    }, 1000);

    return (
      <div>
        <p>Count: {this.state.count} </p>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<TestState />);
```

## 01 Exercice Clock setTimeout

Ré-implémentez l'horloge précédente que nous avons vue dans le chapitre sur les props, cette fois utilisez un **state** pour gérer le temps qui passe (h/m/s).

---

## Approche fonctionnelle

Pour définir un state également en ayant une approche fonctionnelle, il faudra faire appel à un Hook : useState

```jsx
const Clock = () => {
  const [timer, setTimer] = React.useState(new Date());

  const tick = () => {
    console.log(timer);
    setTimeout(() => setTimer(new Date()), time);
  };

  tick();

  return <p>{timer.toLocaleTimeString()}</p>;
};
```

## 02 Approche fonction avec un Hook

1. En utilisant le Hook React.useState définissez un compteur qui s'incrémente toutes les secondes.

2. Réalisez maintenant un compteur cyclique de période 10 (modulo 10 pour le counteur).
