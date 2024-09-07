import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';
import axios from 'axios'

export const ProductsContext = createContext({})

const ProductsProvider = ({children}) => {
    const {data:products,isLoading} = useQuery(
        { 
          queryKey: ['products'], 
          initialData: [],
          queryFn: ()=>
                    axios.get('http://localhost:5000/products')
                    .then(res=>{
                        return res.data
                    })
        })
    const productsValues = {products,isLoading}
    return (
        <ProductsContext.Provider value={productsValues}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;