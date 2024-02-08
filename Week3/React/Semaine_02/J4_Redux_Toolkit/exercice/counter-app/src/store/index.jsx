import { configureStore } from '@reduxjs/toolkit'
import { messageSlice } from './messageSlice';
import { counterSlice } from './counterSlice';

// Export des actions
const store = configureStore({
    reducer: {
        message: messageSlice.reducer, // permet de récupérer le store de le lire
        counter: counterSlice.reducer
    }
});

export default store; 