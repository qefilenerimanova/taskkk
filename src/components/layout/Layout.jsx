import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>{children}</main>
        <Footer/>

    </div>
  )
}

export default Layout