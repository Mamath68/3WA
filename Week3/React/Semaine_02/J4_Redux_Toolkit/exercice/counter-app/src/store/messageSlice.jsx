// import de la fonction 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: 'Hello la FSD 49',
    messages: []
}

// create slice une unité autonome de gestion d'un store avec ses reducers
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    // gestions des actions dans le/les reducer(s) du state
    reducers: {
        changeMessage: (state, action) => {
            state.message = action.payload
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        toUpperCase: (state) => {
            state.messages = state.messages.map(message => message.toUpperCase())
        },
        toLowerCase: (state) => {
            state.messages = state.messages.map(message => message.toLowerCase())
        },
        shuffleMessages: (state, action) => {
            state.messages.sort((a, b) => Math.random() - .5)
        }
    },
})

export const { addMessage, changeMessage, toUpperCase, toLowerCase, shuffleMessages } = messageSlice.actions