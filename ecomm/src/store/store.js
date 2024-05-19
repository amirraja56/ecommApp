import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
// import counterReducers from './counterSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        // counter: counterReducers,
    },
});

export default store;
