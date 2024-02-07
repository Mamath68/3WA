import { createContext, useContext, useReducer } from "react"
import reducer from './reducer'
const initialState = {
    total : [],
    number : '',
    operator : '',
    buttons : [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
}

// 1. création d'un contexte pour partager les actions et le state dans l'arbre de React
const CalculateContexte = createContext()

/*
2. Provider permet de contextualiser la logique du reducer à l'ensemble des composants de l'arbre de React ou une partie 

PascalCase pour nommer les contextes et provider 

*/
export const CalculateProvider =  ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState) ;

    const setNumber = (number) => {
        dispatch({ type : "SET_NUMBER", payload : number })
    }

    const reset = () => {
        dispatch({ type : "RESET" })
    }

    return (
        <CalculateContexte.Provider value={{state,setNumber, reset }}>
            {children}
        </CalculateContexte.Provider>
    )
}

// 3. création du Hook pour interargir avec le contexte dans l'abre de React 
export const useCalculator = () => {
    return useContext(CalculateContexte)
}