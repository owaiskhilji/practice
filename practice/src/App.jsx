import './App.css'
import { Getallproducts } from './service/products.service'
import ProductCard from './Components/Product/ProductCard'
import { useEffect, useState } from 'react'
function App() {
  let [products,setproducts] = useState(null)
  useEffect(()=>{
(async()=>{
  const ProductResponse = await Getallproducts()
const setpro = setproducts(ProductResponse)
console.log(setpro)
})
  },[])
  if(!products)  return null
  return (
    <div>
      <h1>product listing</h1>
      {products.map((product,i)=>{
return <ProductCard {...product}/>
      })}
   </div>
  )
}

export default App
