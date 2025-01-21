import React from 'react'
import style from './HomeCard.module.scss'

const HomeCard = ({item}) => {
  return (
    <div>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div>
        <button >Add To Cart</button>
        <button>Add To Wish</button>
        </div>
        
    </div>
  )
}

export default HomeCard