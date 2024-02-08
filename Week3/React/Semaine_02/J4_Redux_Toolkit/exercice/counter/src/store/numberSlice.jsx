// import de la fonction 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numbers: [{ id: 1, number: 1 }, { id: 2, number: 2 }]
}

// create slice une unité autonome de gestion d'un store avec ses reducers
export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        addNumber: {
            reducer: (state, action) => {
                state.numbers.push(action.payload)
            },
            prepare: (number) => {
                const id = Math.random().toString()

                return {
                    payload: { id, number }
                }
            }
        }
    }
})

// permet de dispatcher une action avec son reducer ici on a un changeMessage
export const { addNumber } = numberSlice.actions