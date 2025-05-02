import React from 'react'
import Banner from '../components/Banner'
import ProductosHome from '../components/ProductosHome'
import CategoriasMosaico from '../components/CategoriasMosaico'
import Footer from '../components/Footer'
import PublicidadBanco from '../components/PublicidadBanco'


const Home = () => {
  return (
    <main>
        <Banner />
        <ProductosHome />
        <CategoriasMosaico />
        <PublicidadBanco />
        <Footer />
    </main>
  )
}

export default Home