"use client";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products-slice";

export const store = configureStore({
    reducer: {
        productReducer: productSlice.reducer
    }
});