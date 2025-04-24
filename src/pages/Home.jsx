import React from 'react'
import Banner from '../components/Banner'
import ProductosHome from '../components/ProductosHome'
import CategoriasMosaico from '../components/CategoriasMosaico'


const Home = () => {
  return (
    <main>
        <Banner />
        <ProductosHome />
        <CategoriasMosaico />
    </main>
  )
}

export default Home