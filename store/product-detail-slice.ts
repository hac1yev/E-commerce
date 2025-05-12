import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type PDetailProductContentTypes =  'brand' | 'title' | 'categories' | 'tags' | 'description' | 'price' | 'value' | 'life' | 'type_content' | 'image' | 'ratingResult';
type PDetailAdditionalInfoType = 'id' | 'additionalInfo' | 'brand' | 'type_content' | 'status_content';
type PDetailRating = 'ratingResult';

type ProductDetailState = {
    productContent: Pick<ProductType, PDetailProductContentTypes> | null;
    additionalInfo: Pick<ProductType, PDetailAdditionalInfoType> | null;
    ratingResult: Pick<ProductType, PDetailRating> | null;
};

const initialProductDetailState: ProductDetailState = {
    productContent: null,
    additionalInfo: null,
    ratingResult: null
};

const productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState: initialProductDetailState,
    reducers: {
        getAllProductItems(state,action) {
            state.productContent = {
                brand: action.payload.brand, title: action.payload.title, categories: action.payload.categories,
                tags: action.payload.tags, description: action.payload.description, price: action.payload.price,
                value: action.payload.value, life: action.payload.life, type_content: action.payload.type_content,
                image: action.payload.image, ratingResult: action.payload.ratingResult,
            }

            state.additionalInfo = {
                id: action.payload.id, additionalInfo: action.payload.additionalInfo, brand: action.payload.brand,
                type_content: action.payload.type_content, status_content: action.payload.status_content,
            }

            state.ratingResult = {
                ratingResult: action.payload.ratingResult
            }
        }
    }
});

export const useTypedProductDetailSelector: TypedUseSelectorHook<{ productDetailReducer: ProductDetailState }> = useSelector;
export const ProductDetailSliceActions = productDetailSlice.actions; 
export default productDetailSlice;