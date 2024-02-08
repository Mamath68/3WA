export const initialState = [[]];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CALCULATION":
      const { day, calculation } = action.payload;
      const newCalculations = [...state];
      newCalculations[day] = [...(newCalculations[day] || []), calculation];
      return newCalculations;
    case "LOAD_CALCULATIONS":
      return action.payload;
    default:
      return state;
  }
};
