// Reducer
import localforage from 'localforage';

// Define a key for storing the state in localforage
const LOCALFORAGE_KEY = 'calculatorState';

// Fonction de calcul du tableau
function calcul(symbols) {
    let [s, i] = [0, 0];
    let op = (a, b) => parseFloat(a) + parseFloat(b);
    while (i < symbols.length) {
        if (symbols[i] == '+') op = (a, b) => parseFloat(a) + parseFloat(b);
        if (symbols[i] == '*') op = (a, b) => parseFloat(a) * parseFloat(b);
        if (symbols[i] == '-') op = (a, b) => parseFloat(a) - parseFloat(b);

        if (symbols[i] != "+" && symbols[i] != "*" && symbols[i] != "-") s = op(s, symbols[i]);

        i++;
    }

    return s;
}

// Fonction pour vérifier la cohérence des symboles
function isCorrect(symbol, symbols, v = ['*', '+', '-']) {
    if (symbols.length == 0 && v.includes(symbol)) return false;
    // si = on ne peut pas ajouter un nombre
    if (symbol == '=') return false;
    const lastSymbol = symbols[symbols.length - 1];
    if (v.includes(symbol) && v.includes(lastSymbol)) {
        // mutation du state effet de bord TODO
        symbols[symbols.length - 1] = symbol;

        return false
    }
    symbol = parseFloat(symbol);

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
 */
export default (state, action) => {
    switch (action.type) {
        case "SET_SYMBOL":
            const symbol = action.payload;

            // on peut changer d'opérateur
            if (state.operators.includes(symbol)) state.symbol = state.symbols.length ? symbol : null;

            // On vérifie si on peut ajouter le bon symbole dans le champ vide
            if (state.number == '' && isCorrect(symbol, state.symbols) === false) return { ...state, number: '' };

            // On ajoute un opérateur et une valeur dans le champ de saisi
            if (state.operators.includes(symbol) && state.number !== '') {
                return {
                    ...state,
                    number: '',
                    symbols: [...state.symbols, state.number, symbol],
                    symbol,
                    total: calcul([...state.symbols, state.number])
                };
            }

            // Dans le cas où on ajoute un opérateur, on calcule sans ce dernier le total
            if (state.operators.includes(symbol) && state.number === '') {
                return {
                    ...state,
                    number: '',
                    symbols: [...state.symbols, symbol],
                    symbol,
                    total: calcul([...state.symbols])
                };
            }

            if (symbol === '=') {
                const symbols = state.number !== '' ? [...state.symbols, state.number] : [...state.symbols];

                return {
                    ...state,
                    number: '',
                    symbols,
                    symbol,
                    total: calcul(symbols),
                };
            }

            // Ce n'est pas un opérateur
            const number = state.number + action.payload;

            return {
                ...state,
                number,
            };


        case "RESET":

            return {
                ...state,
                symbols: [],
                symbol: '',
                operator: '',
                number: '',
                total: ''
            };

        default:
            throw new Error("Action non trouvée");
    }
}