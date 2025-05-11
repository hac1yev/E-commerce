"use client";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products-slice";
import productDetailSlice from "./product-detail-slice";

export const store = configureStore({
    reducer: {
        productReducer: productSlice.reducer,
        productDetailReducer: productDetailSlice.reducer
    }
});