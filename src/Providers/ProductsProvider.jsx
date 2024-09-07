import { useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ProductsContext = createContext({})

const ProductsProvider = ({children}) => {
    const [cart,setCart]= useState([])
    const [amount,setAmount] = useState(0)
    const addToCart= (item) =>{
   
            if(cart.some(cartItem=> cartItem.name === item.name)){
                setAmount(amount+1)
                    setCart(preArray=>{
                        return  preArray.map(oldItem=>{
                            if(oldItem.name === item.name){
                                    return {...oldItem, amount:oldItem.amount+1}
                            }
                            else{
                                return oldItem
                            }
                    })
                    })
            }
            else{
                setAmount(amount+1)
                item.amount = 1
              
                setCart(preArray=>{
                    return [...preArray,item]
                })
            }
    } 

    const removeFromCart= (item) =>{
            setCart(preArray=>{
                preArray.map(oldItem=>{
                    if(oldItem.name===item.name){
                        setAmount(amount-oldItem.amount)
                        return oldItem
                    }
                    else{
                        return oldItem
                    }
                })
                return preArray.filter(oldItem=>{
                    return oldItem.name !== item.name
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
    const productsValues = {products,isLoading,cart,addToCart,removeFromCart,amount}
    return (
        <ProductsContext.Provider value={productsValues}>
            {children}
        </ProductsContext.Provider>
    );



};

export default ProductsProvider;