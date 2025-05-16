import { useTypedProductSelector } from '@/store/products-slice';
import Pagination from '@mui/material/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductsPagination = () => {
    const totalProducts = useTypedProductSelector(state => state.productReducer.totalProducts);
    const [pageCount,setPageCount] = useState(1);
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", `${value}`);
        router.push(`/products?${params}`);
    }

    useEffect(() => {
        if(totalProducts){
            setPageCount(Math.ceil(totalProducts / 12));
        }
    }, [totalProducts]);
    
    return (
        <Pagination 
            count={pageCount} 
            onChange={handleChangePagination}
            className='products-pagination'
        />
    );
};

export default ProductsPagination;