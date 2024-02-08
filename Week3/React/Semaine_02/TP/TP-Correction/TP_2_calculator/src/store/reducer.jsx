// Reducer
import localforage from 'localforage';

// Define a key for storing the state in localforage
const LOCALFORAGE_KEY = 'calculatorState';

// Fonction de calcul du tableau
function calcul(symbols) {
    let [s, i] = [0, 0];
    let op = (a, b) => a + b;
    while (i < symbols.length) {
        switch (symbols[i]) {
            case "+":
                op = (a, b) => a + b;
                break;
            case "*":
                op = (a, b) => a * b;
                break;
            case "-":
                op = (a, b) => a - b;
                break;
            default:
                let [a, b] = [parseFloat(s), parseFloat(symbols[i])]
                s = op(a, b);
        }

        i++;
    }

    return s;
}

// Fonction pour vérifier la cohérence des symboles
function isCorrect(symbol, symbols, v = ['*', '+', '-']) {
    const isEmptySymbols = symbols.length === 0;
    const lastSymbol = isEmptySymbols ? null : symbols[symbols.length - 1];

    if (isEmptySymbols && v.includes(symbol)) return false;
    if (v.includes(symbol) && v.includes(lastSymbol)) return false
    if (isNaN(parseFloat(symbol)) === false && isNaN(parseFloat(lastSymbol)) === false) return false;

    return true;
}

export const initialState = {
    number: '',
    operator: '',
    total: '',
    buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    symbols: [],
    operators: ['*', '+', '-'],
}

/**
 * L'algorithme se base sur un opérande dans total et un nombre dans number => on fait un calcul
 * Travaillez toujours sur une copie du state
 */
export default (state, action) => {
    switch (action.type) {
        case "SET_SYMBOL":
            const symbol = action.payload;

            // on peut changer d'opérateur si on en a déjà sélectionné un
            if (state.operators.includes(symbol)) {
                state.symbol = state.symbols.length ? symbol : null;
                state.symbols.length && state.operators.includes(state.symbols.length - 1) ? state.symbols[state.symbols.length - 1] = symbol : null;
            }

            // On vérifie si on peut ajouter le bon symbole dans le champ vide
            if (state.number == '' && isCorrect(symbol, state.symbols) === false) return { ...state, number: '' };

            // On ajoute un opérateur et une valeur dans le champ de saisi
            if (state.operators.includes(symbol) && state.number !== '') {
                return {
                    ...state,
                    number: '',
                    symbols: [...state.symbols, state.number, symbol],
                    symbol,
                    total: calcul([...state.symbols, state.number]) // calcul partiel 
                };
            }

            // Dans le cas où on ajoute un opérateur, on calcule sans ce dernier le total
            if (state.operators.includes(symbol) && state.number === '') {
                return {
                    ...state,
                    number: '',
                    symbols: [...state.symbols, symbol],
                    symbol,
                    total: calcul([...state.symbols]) // calcul partiel 
                };
            }

            // Ce n'est pas un opérateur mais une valeur 
            const number = state.number + action.payload;

            return {
                ...state,
                number,
            };

        case "TOTAL":
            const symbols = state.number !== '' ? [...state.symbols, state.number] : [...state.symbols];

            // attention si on retape sur total après avoir sélection un opérateur =>  on le retire
            if (state.symbols[state.symbols.length - 1] && state.operators.includes(state.symbols[state.symbols.length - 1])) {
                state.symbols.pop()
            }

            return {
                ...state,
                number: '',
                symbols,
                symbol: '',
                total: calcul(symbols),
            };


        case "RESET":

            return {
                ...state,
                ...initialState
            };

        default:
            throw new Error("Action non trouvée");
    }
}