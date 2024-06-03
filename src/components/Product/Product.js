import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/slices/CartSlice'

const Product = ({item}) => {
    // console.log(item);
    
const cartArray = useSelector((state) => state.cartItem)

    const dispatch  = useDispatch()
  return (
  <article className='border-2 border-red-500  h-[300px] flex items-center flex-col justify-center rounded-lg py-2 px-2'>
    <img src={item.image} alt={item.title} className='h-[60%]' />
    <section className='w-[80%] text-center'>
    <h5>{item.title.length > 20 ? item.title.slice(0,19) : item.title}</h5>
    <h1 className='font-bold'>{item.price}</h1>
    <button className='bg-red-800 px-2 py-1 text-white font-semibold rounded-md' onClick={()=> {
        dispatch(addToCart(item))
    console.log(cartArray);
    }}>Add to cart</button>
    </section>
  </article>
  )
}

export default Product
