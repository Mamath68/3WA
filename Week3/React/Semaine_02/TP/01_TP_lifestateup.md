# 01 TP Lifting State Up

- Par équipe de 2 sur Discord

Parfois des composants doivent faire remonter des données dynamiques à leur parent direct. Nous allons découvrir cette technique dans un exercice d'application.

Voici un exemple pour bien expliciter la problématique.

Supposons que l'on ait deux composants Foo et bar :

```text
    Foo
    .
    .
    .
    Bar
```

Et que Bar fasse remonter un état à son composant parent direct.

- On passe une méthode du composant parent Foo à l'enfant direct Bar.

- Dans Bar on crée un événement qui appelera la méthode de Foo en lui passant éventuellement une/des valeurs. C'est-à-dire un état local à Bar que l'on passe à Foo (Lifting state up).

```js
const function Foo(props) {
  const handleChange = (e) => {
    console.log("parent", e);
  };

  return <Bar onChange={handleChange} />;
};

const function Bar(props){
  return (
    <p>
      <button onClick={() => props.onChange(1)}>Lifting state up</button>
    </p>
  );
};
```

## Exemple d'utilisation Form

Pour la gestion des formulaires on utilise souvent cette technique pour configurer les champs d'un formulaire. Voyez l'exemple qui suit :

1. Form est la classe mère qui utilise Input un composant enfant. Ce composant fera remonter son état au parent (lifting state up).

```js
const function Form (props) {
  const [user, setUser] = React.useState({ username: "", email: "" });

  const handleChange = (event) => {
    setUser({ [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(`New User : ${value}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
```

1. L'enfant Input pourra par exemple être utiliser pour styliser ce champ dans un projet.

```js
const function Input (props) (
  <div style={{ margin: "10px" }}>
    <input {...props} />
  </div>
);
```

## Challenge

Vous allez créer un script React permettant de réaliser une conversion de nombre décimal vers un nombre binaire.

Vous pouvez utiliser au choix :

1. Vous pouvez utiliser si vous le souhaitez un fichier simple HTML.

1. Le Webpack voir dans le dossier MODELS.

1. Vite.js en JS

Créez deux composants **App** et **BaseNumberInput**. Le composant App contiendra deux composants BaseNumberInput : respectivement pour saisir le nombre décimal et afficher le nombre binaire.

```txt
Nombre décimal : [ ... ]
Nombre binaire : [ ... ]
```

Hiérarchie des composants :

```txt
                 App
                .    .
            .            .
BaseNumberInput    BaseNumberInput
```

Dans le composant BaseNumberInput l'attribut onChangeBase sera appelé dans le composant lui-même. La logique algorithmique du changement de base sera implémentée dans le composant parent App (méthode this.handleChange) :

```js
<BaseNumberInput onChangeBase={handleChange} />
// Dans le composant BaseNumberInput
props.onChangeBase(e.target.value)
```
