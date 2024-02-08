export const initialState = {
  result: null,
  currentValue: '0',
  operator: null,
  tempValue: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_VALUE':
      if (state.currentValue === '0' && state.payload === '0') {
        return state;
      } else if (action.payload === '.' && state.currentValue.includes('.')) {
        return state;
      } else if (action.payload === '.') {
        return {
          ...state,
          currentValue: state.currentValue + action.payload,
        };
      }
      return {
        ...state,
        currentValue: state.currentValue === '0' ? action.payload : state.currentValue + action.payload,
      };
    case 'OPERATE':
      if (state.currentValue === '0' && !state.tempValue) {
        return state;
      }
      if (!state.tempValue) {
        return {
          ...state,
          operator: action.payload,
          tempValue: state.currentValue,
          currentValue: '0',
        };
      }
    case 'RESULT':
      if (!state.operator) return state;
      const resultat = calculate(state);
      return {
        ...state,
        result: `${state.tempValue} ${state.operator} ${state.currentValue} = ${resultat}`,
        currentValue: resultat,
        operator: null,
        tempValue: null,
      };
    case 'RESET':
      return initialState;

    default:
      throw new Error('Action non trouvée');
  }
};

function calculate(state) {
  const { currentValue, operator, tempValue } = state;
  switch (operator) {
    case 'x':
      return (parseFloat(currentValue) * parseFloat(tempValue)).toString();
    case '+':
      return (parseFloat(currentValue) + parseFloat(tempValue)).toString();
  }
}
