import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import Product from '../../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
   

const Home = () => {
const [data,setData] = useState(null)
const [loading,setLoading] = useState(false)

const initialState = useSelector((state) => state.cartItem)
// console.log(initialState);


 const fetchData = async()=>{
try {
    setLoading(true)
    const res = await fetch("https://fakestoreapi.com/products")
    if (!res.ok) {
        alert("something went wrong")
        setLoading(false)
    }
    const response = await res.json()
    setData(response)
    setLoading(false)
    
  
} catch (error) {
    alert(error.message)
}
    }



    useEffect(()=>{
  
        fetchData()
    },[])


    if (loading) {
        return (
            <div className='mx-auto w-[50%] mt-[200px] flex justify-center'>
                <Circles
                width={150}
                height={150}
              color='red'
              visible={true}
                />
            </div>
        )
    }
  return (
    <>
    <h1 className='font-bold text-2xl text-center mt-8'>Products</h1>
    <div className='grid grid-cols-5 px-16 py-8 gap-8'>
    {data?.map((item,index)=> <Product key={index} item={item} />)}
    {/* <h1>play</h1> */}
    </div>
    </>
  )
}

export default Home
