import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type ProductState = {
    product: (Pick<ProductType, keyof ProductType> & {
        status_content: string;
        type_content: string;
    }) | null
}

const initialProductDetailState: ProductState = {
    product: null
};

const productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState: initialProductDetailState,
    reducers: {
        getAllProducts(state,action) {
            state.product = {
                ...action.payload
            }
        }
    }
});

export const useTypedProductSelector: TypedUseSelectorHook<{ productDetailReducer: ProductState }> = useSelector;
export const ProductSliceActions = productDetailSlice.actions; 
export default productDetailSlice;