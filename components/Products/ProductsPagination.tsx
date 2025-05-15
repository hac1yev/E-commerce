import { useTypedProductSelector } from '@/store/products-slice';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';

const ProductsPagination = ({ setPage }: { setPage: (value: number) => void }) => {
    const totalProducts = useTypedProductSelector(state => state.productReducer.totalProducts);
    const [pageCount,setPageCount] = useState(1);

    const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
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
        />
    );
};

export default ProductsPagination;