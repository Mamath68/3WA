import { useReducer } from "react";
import { reducer, initialState } from "./reducer/conversion";
import Input from "./components/Input";
import Message from "./components/Message";
import "./App.css";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { base, number, conversion, message } = state;
  function onChangeBase(number, base) {
    dispatch({ type: "SET_NUMBER", number, base });
  }

  console.log(message);

  return (
    <>
      <div className="messages">
        {message && <Message message={message} />}
        <Input base="10" onChangeBase={onChangeBase} number={number} />
        <Input base="2" onChangeBase={onChangeBase} number={conversion} />
      </div>
    </>
  );
}

export default App;
