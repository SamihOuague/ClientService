import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import productReducer from "./features/product";

export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    }
});