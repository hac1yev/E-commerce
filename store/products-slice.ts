import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type ProductState = {
    products: Pick<ProductType, keyof ProductType>[];
    totalProducts: number | null;
};

const initialProductState: ProductState = {
    products: [],
    totalProducts: null
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialProductState,
    reducers: {
        getAllProducts(state,action) {
            state.products = [
                ...action.payload.products
            ];
            state.totalProducts = action.payload.totalProducts;
        },
    }
});

export const useTypedProductSelector: TypedUseSelectorHook<{ productReducer: ProductState }> = useSelector;
export const ProductSliceActions = productSlice.actions; 
export default productSlice;