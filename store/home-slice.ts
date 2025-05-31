import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type HomePageType<T> = {
    homePageData: {
        discountProducts: T[], 
        trendingProducts: T[], 
        featuredProducts: T[], 
        weeklyProducts: T[],
    }
}

const initialHomeState = {
    homePageData: {}
}

const homePageSlice = createSlice({
    name: 'homePageSlice', 
    initialState: initialHomeState,
    reducers: {
        getAllHomeData(state,action) {
            state.homePageData = {
                discountProducts: action.payload.discountProducts, 
                trendingProducts: action.payload.trendingProducts, 
                featuredProducts: action.payload.featuredProducts, 
                weeklyProducts: action.payload.weeklyProducts,
            }
        }
    }
});

export const useTypedHomeSelector: TypedUseSelectorHook<{ homePageReducer: HomePageType<ProductType> }> = useSelector;
export const homePageSliceAction = homePageSlice.actions;
export default homePageSlice;