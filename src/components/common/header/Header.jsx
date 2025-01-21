import React from 'react'
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.headB}>
            <ul>
                <a href="">Home</a>
                <a href="">Basket</a>
                <a href="">Wish</a>
            </ul>

        </div>

    </div>
  )
}

export default Header