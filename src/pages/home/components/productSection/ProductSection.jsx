import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducstHomeThunk } from '../../../../redux/reducers/productSlice'
import style from './ProductSection.module.scss'
import HomeCard from '../../../../components/cards/homeCard/HomeCard'
const ProductSection = () => {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.products.products)
    const loading=useSelector((state)=>state.products.loading)
    const error=useSelector((state)=>state.products.error)
    useEffect(()=>{
        dispatch(getProducstHomeThunk())
    },[])
    if(loading)return <h1>Loading</h1>
    if(error)return <h1>xeta var</h1>
  return (
    <div className={style.section}>
        <div className={style.container}>
            {products && products.map((item)=><HomeCard item={item}/>)}
        </div>
    </div>
  )
}
export default ProductSection