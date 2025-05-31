"use client";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products-slice";
import productDetailSlice from "./product-detail-slice";
import homePageSlice from "./home-slice";


export const store = configureStore({
    reducer: {
        productReducer: productSlice.reducer,
        productDetailReducer: productDetailSlice.reducer,
        homePageReducer: homePageSlice.reducer
    }
});