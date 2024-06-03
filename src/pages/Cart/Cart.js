import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EachSelectedProduct from '../../components/Navbar/EachSelectedProduct/EachSelectedProduct'


    

const Cart = () => {
    const [total,setTotal] = useState(0)
    const cartArray = useSelector((state) => state.cartItem)

    useEffect(()=>{
const addPrice  = cartArray.reduce((acc,curr)=>{
acc += curr.price
    return acc
},0)

setTotal(addPrice)
    },[cartArray])



    if (cartArray.length < 1) {
        return (
            <div className='text-center mt-16 font-bold'>
            <h1>    there is no item in the cart</h1>
            </div>
        )
    }
    return (
        <>
    <div className='grid grid-cols-5 px-16 py-8 gap-8'>
      {cartArray?.map((item,index)=> <EachSelectedProduct key={index} item={item}/>)}
    </div>
     <h1>Total items {cartArray.length} </h1>
  <h1>Total Price {total}</h1>
        </>
  )
}

export default Cart
