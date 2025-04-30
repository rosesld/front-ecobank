import React from 'react'
import Banner from '../components/Banner'
import ProductosHome from '../components/ProductosHome'
import CategoriasMosaico from '../components/CategoriasMosaico'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <main>
        <Banner />
        <ProductosHome />
        <CategoriasMosaico />
        <Footer />
    </main>
  )
}

export default Home