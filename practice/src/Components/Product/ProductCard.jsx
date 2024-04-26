import React,{memo} from 'react'
import { Link } from 'react-router-dom'
function ProductCard(props) {
    const {name,price,pid} = props
  return (
    <div>
        <h2>{name}</h2>
        <h2>{price}</h2>
        <Link to={`/product/${pid}`}>veiw</Link>
    </div>
  )
}

export default memo(ProductCard)