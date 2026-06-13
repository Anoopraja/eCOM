import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ProductCard from './components/card'
import products from './assets/products/product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='flex gap-x-10 gap-y-10 py-14 justify-center flex-wrap'>
        {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
      </div>
      <Footer />
    </>
  )
}

export default App
