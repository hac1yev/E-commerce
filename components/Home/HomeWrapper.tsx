"use client";

import Banner from './Banner/Banner'
import RtsFeature from './RtsFeature/RtsFeature'
import FeaturedCards from './FeaturedCards/FeaturedCards'
import DiscountProducts from './DiscountProducts/DiscountProducts'
import WeeklyGroceries from './WeeklyGroceries/WeeklyGroceries'
import TrendingProducts from './TrendingProducts/TrendingProducts'
import { useEffect } from 'react'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import { useDispatch } from 'react-redux';
import { homePageSliceAction } from '@/store/home-slice';

const HomeWrapper = () => {
    const dispatch = useDispatch();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        (async function() {
            try {
                const response = await axiosPrivate.get("/api/products/home");
                dispatch(homePageSliceAction.getAllHomeData(response.data));
            } catch (error) {   
                console.log(error);
            }
        })()
    }, [axiosPrivate,dispatch]);    

    return (
        <>
            <Banner />  
            <RtsFeature />
            <FeaturedCards />
            <DiscountProducts />
            <WeeklyGroceries />
            <TrendingProducts />
        </>
    );
};

export default HomeWrapper;