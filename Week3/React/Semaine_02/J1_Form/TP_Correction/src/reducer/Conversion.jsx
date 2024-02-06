export const initialState = {
  number: "",
  conversion: "",
  base: 10,
  message: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      const { number, base } = action;
      const binary = /^[01]+$/;
      console.log(number, binary.test(number));

      // on teste si le nombre en base 10 ou 2 n'est pas à un nombre dans la bonne base
      // attention au cas particulier ou isNaN("") renvoi false
      if (base == 10 && isNaN(number)) {
        return {
          ...state,
          message: "ce n'est pas un nombre decimal",
        };
      }

      // error firts
      if (base == 2 && number != 0 && binary.test(number) == false) {
        return {
          ...state,
          message: "ce n'est pas un nombre binaire",
        };
      }

      if (number && base == 2)
        return {
          ...state,
          conversion: number,
          number: parseInt(number, base).toString(10),
          base,
          message: "",
        };

      if (number && base == 10)
        return {
          ...state,
          conversion: parseInt(number, base).toString(2),
          number,
          base,
          message: "",
        };

      return {
        ...state,
        number: "",
        conversion: "",
      };

    default:
      throw new Error("action non trouvée");
  }
};
