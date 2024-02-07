

export default (state, action) => {
    switch(action.type){
        case "SET_NUMBER":

            const number = state.number + action.payload 
  
            return {
                ...state, 
                number 
            }

        case "RESET":

            return {
                ...state,
                number : '',
                
            }

        default:
            throw new Error("action non trouvé")
    }
}