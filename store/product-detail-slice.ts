import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type ProductDetailState = {
    product: (Pick<ProductType, keyof ProductType> & {
        status_content: string;
        type_content: string;
    }) | null
}

const initialProductDetailState: ProductDetailState = {
    product: null
};

const productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState: initialProductDetailState,
    reducers: {
        getAllProductItems(state,action) {
            state.product = {
                ...action.payload
            }
        }
    }
});

export const useTypedProductDetailSelector: TypedUseSelectorHook<{ productDetailReducer: ProductDetailState }> = useSelector;
export const ProductDetailSliceActions = productDetailSlice.actions; 
export default productDetailSlice;