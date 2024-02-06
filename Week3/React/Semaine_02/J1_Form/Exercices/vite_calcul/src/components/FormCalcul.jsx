import { useState } from "react";

// ça permet de générer 20 valeurs à l'aide d'un générateur Array(20).keys()
// la fonction  i => i + 1  en deuxième paramètre permet de décaler de + 1
const numbers = Array.from(Array(20).keys(), (i) => i + 1);

function FormCalcul(props) {
  const [base, setBase] = useState("");
  const [multiple, setMultiple] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (base != 0) {
      // let i = 1 ;
      // let m = 1 ;
      // let res = [];
      // syntaxe plus moderne en JS
      let [i, m, res] = [1, 1, []];
      while (base * i <= 20) {
        m = base * i;
        res.push(m);
        i++;
      }

      setMultiple(res);
    }
  };

  const handleReset = (e) => {
    const m = multiple.filter((m) => m != e.target.value);
    setMultiple(m);
  };

  const handleChange = (e) => {
    setBase(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={base} onChange={handleChange}>
          {numbers.map((number, i) => (
            <option key={i} value={number}>
              {number}
            </option>
          ))}
          <option value="0">Aucune</option>
        </select>
        <div>
          <button type="submit">Calcul</button>
        </div>
      </form>
      {multiple.length > 0 &&
        multiple.map((m, i) => (
          <p key={i}>
            {m} -{" "}
            <button key={i} type="radio" value={m} onClick={handleReset}>
              X
            </button>
          </p>
        ))}
    </>
  );
}

export default FormCalcul;
