import { createContext, useContext, useReducer } from "react"
import reducer, { initialState } from './reducer'

// 1. création d'un contexte pour partager les actions et le state dans l'arbre de React
const CalculateContexte = createContext()

/*
2. Provider permet de contextualiser la logique du reducer à l'ensemble des composants de l'arbre de React ou une partie 
PascalCase pour nommer les contextes et provider 
*/
export const CalculateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setSymbol = (symbol) => {
        dispatch({ type: "SET_SYMBOL", payload: symbol });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    const calculTotal = () => {
        dispatch({ type: "TOTAL" });
    };

    return (
        <CalculateContexte.Provider value={{ state, reset, setSymbol, calculTotal }}>
            {children}
        </CalculateContexte.Provider>
    )
}

// 3. création du Hook pour interargir avec le contexte dans l'abre de React 
export const useCalculator = () => {
    return useContext(CalculateContexte)
}