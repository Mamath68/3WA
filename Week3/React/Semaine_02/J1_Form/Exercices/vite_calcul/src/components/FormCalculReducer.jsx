import { useReducer } from "react";
const initialState = {
  base: "",
  multiple: [],
  numbers: Array.from(Array(20).keys(), (i) => i + 1),
};

// logique algo de l'application <==> service
function reducer(state, action) {
  switch (action.type) {
    case "CALCUL_MULTIPLE":
      const base = state.base;
      let [i, m, res] = [1, 1, []];

      if (base != 0) {
        while (base * i < 20) {
          m = base * i;
          res.push(m);
          i++;
        }
      }

      return {
        ...state,
        multiple: res,
      };

    case "SET_BASE":
      return {
        ...state,
        base: action.base,
      };

    case "RESET_MULTIPLE":
      const resetNum = action.resetNum;
      console.log(action);
      console.log(
        "RESET_MULTIPLE",
        state.multiple.filter((m) => m != resetNum)
      );

      return {
        ...state,
        multiple: state.multiple.filter((m) => m != resetNum),
      };

    default:
      return state;
  }
}

function FormCalculReducer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { numbers, base, multiple } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CALCUL_MULTIPLE" });
  };

  const handleReset = (e) => {
    dispatch({ type: "RESET_MULTIPLE", resetNum: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          value={base}
          onChange={(e) =>
            dispatch({ type: "SET_BASE", base: e.target.value })
          }>
          <option value="0">
            0
          </option>
          {numbers.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
        <div>
          <button type="submit">Calcul</button>
        </div>
      </form>
      {multiple.length > 0 &&
        multiple.map((m, i) => (
          <p key={i}>
            {m} -{" "}
            <button
              className="btn"
              key={i}
              type="radio"
              value={m}
              onClick={handleReset}>
              X
            </button>
          </p>
        ))}
    </>
  );
}

export default FormCalculReducer;
