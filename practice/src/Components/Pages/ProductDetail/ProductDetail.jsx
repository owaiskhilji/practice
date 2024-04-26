import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../service/products.service'
export default function ProductDetail() {
  const {id} = useParams()
  useEffect(()=>{
    if(id){
        (async () => {
            const detailResponse = await getProductById(id)
            console.log(detailResponse);
        })()
    }
  },[id])
    return (
    <div>ProductDetail</div>
  )
}
