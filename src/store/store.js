import { configureStore } from "@reduxjs/toolkit";

import ShopReducer from "../features/Shop/shopSlice"
import HeaderReducer from "../components/Header/headerSlice"
import CartReducer from "../components/Cart/cartSlice"

const rootReducer = {
    shop: ShopReducer,
    header: HeaderReducer,
    cart: CartReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store