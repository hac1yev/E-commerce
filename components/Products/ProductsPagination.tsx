import { useTypedProductSelector } from '@/store/products-slice';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';

const ProductsPagination = ({ setPage }: { setPage: (value: number) => void }) => {
    const products = useTypedProductSelector(state => state.productReducer.products);
    const [pageCount,setPageCount] = useState(1);

    const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    useEffect(() => {
        setPageCount(Math.ceil(products.length / 12));
    }, [products]);
    
    return (
        <Pagination 
            count={pageCount} 
            onChange={handleChangePagination}
        />
    );
};

export default ProductsPagination;