import React from 'react'
import { useForm } from "react-hook-form"
import { AddProduct } from '../../service/products.service'
import Getimage from '../Imagefire/Imgstorage'
export default function Addproductdata() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const addproductresponse = await AddProduct(data)
      reset()
      alert('successfully')
      console.log(addproductresponse)
    }
    catch (error) {
      console.error(">>>=>", error)
    }
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='name' {...register("text", { required: true })} />
      {errors.name && <span>required</span>} <br />
      <input type='number' placeholder='price' {...register("price", { required: true })} />
      {errors.price && <span>required</span>} <br />
      <input type='number' placeholder='qty' {...register("qty", { required: true })} />
      {errors.qty && <span>required</span>} <br />
      <textarea placeholder='description' cols="30" rows="10" {...register("description", { required: true })} ></textarea>
      {errors.description && <span>required</span>} <br />
      <Getimage />
      <button type='submit'>ADD</button>
    </form>

  )
}