import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ProductsContext = createContext({})

const ProductsProvider = ({children}) => {
    const [cart,setCart]= useState([])

    const addToCart= (item) =>{
            setCart(preArray=>{
                return [...preArray,item]
            })
    } 

    const removeFromCart= (item) =>{
            setCart(preArray=>{
                return preArray.filter(oldItem=>{
                    return oldItem !== item
                })
            })
    } 


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
    const productsValues = {products,isLoading,cart,addToCart,removeFromCart}
    return (
        <ProductsContext.Provider value={productsValues}>
            {children}
        </ProductsContext.Provider>
    );



};

export default ProductsProvider;