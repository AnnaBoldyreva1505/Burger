import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";
import productReducer from "./product/productSlice.js";
import orderReducer, {localStorageMiddleware} from "./order/orderSlice.js";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import ModalReduser from "./modalDelivery/modalDeliverySlice.js"

export const store = configureStore({
reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: ModalReduser,
},
middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)

});
