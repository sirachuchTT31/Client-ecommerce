'use client';
// import CardFilter from '@/components/CardFilter';
import CardProduct from '@/components/CardProduct';
import { findAllProductsService } from '@/shared/services/product.service';
import { ShopContext } from '@/context/shop-context';
import { Grid2, Pagination } from '@mui/material';
import React from 'react'
import { IProductList } from '@/shared/interface/product/IProduct';

const ShopPage: React.FC = () => {
    const [products, setProducts] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [totalRecord, setTotalRecord] = React.useState(0);
    const perPage: number = 1;
    const { progress, setProgress } = React.useContext(ShopContext);
    const findAllProducts = async (page: number) => {
        await findAllProductsService({ page: page, perPage: perPage }).then((response) => {
            const resService = response.data;
            if (resService.isSuccess) {
                setProducts(resService.results);
                setTotalRecord(resService.totalRecord);

                setTimeout(() => {
                    setProgress(false);
                }, 2000)
            }
            else {
                setTimeout(() => {
                    setProgress(false);
                }, 2000)
            }
        })
    }

    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        findAllProducts(value);
    }

    React.useEffect(() => {
        findAllProducts(page);
    }, [])

    return (
        <>
            {!progress &&
                <div className='max-h-full' style={{ minHeight: '40vh' }}>
                    <Grid2 container spacing={1}>
                        {/* <CardFilter></CardFilter> */}
                        <Grid2 container spacing={4.8} >
                            {products?.map((item : IProductList) =>
                                <CardProduct key={item.id} price={item.product_per_price} productName={item.product_name}></CardProduct>
                            )}
                        </Grid2>
                    </Grid2>
                    <div className='flex justify-end pt-5'>
                        <Pagination variant="outlined" shape="rounded" count={totalRecord} onChange={handleChangePagination} page={page} />
                    </div>
                </div>
            }

        </>
    )
}

export default ShopPage;