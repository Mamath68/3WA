export const initialState = {
  users: [
    { id: 1, name: "John Doe", address: "123 Main St, Cityville, USA" },
    { id: 2, name: "Jane Smith", address: "456 Oak Ave, Townsville, USA" },
    { id: 3, name: "Bob Johnson", address: "789 Pine Ln, Villagetown, USA" },
    {
      id: 4,
      name: "Alice Williams",
      address: "101 Cedar Blvd, Hamletville, USA",
    },
    { id: 5, name: "Charlie Brown", address: "202 Elm Rd, Boroughburg, USA" },
  ],
  user: null,
  count: 5,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
      };

    case "GET_USER":
      const { id } = action;
      const user = state.users.find((u) => u.id == id);

      return {
        ...state,
        user,
      };

    default:
      throw new Error("action non trouvée");
  }
};
