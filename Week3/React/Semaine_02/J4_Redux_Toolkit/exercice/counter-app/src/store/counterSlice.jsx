// import de la fonction 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

// create slice une unité autonome de gestion d'un store avec ses reducers
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        }
    },
})

export const { increment } = counterSlice.actions