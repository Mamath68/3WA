import { configureStore } from '@reduxjs/toolkit'
import { messageSlice } from './messageSlice';
import { numberSlice } from './numberSlice';

// Export des actions
const store = configureStore({
    reducer: {
        message: messageSlice.reducer, // permet de récupérer le store de le lire
        number: numberSlice.reducer
    }
});

export default store; 