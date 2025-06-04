import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type FavoriteStateType = {
    favoriteProducts: ProductType[]
}

const initialFavoriteState = {
    favoriteProducts: []
};

const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState: initialFavoriteState,
    reducers: {
        getFavoriteProducts(state,action) {
            state.favoriteProducts = [
                ...action.payload
            ]
        }
    }
});

export const useTypedFavoriteSelector: TypedUseSelectorHook<{ favoriteReducer: FavoriteStateType }> = useSelector; 
export const FavoriteProductsAction = favoriteSlice.actions;
export default favoriteSlice;