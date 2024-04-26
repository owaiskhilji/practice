import { ProductEntity } from "../lib/product.entity";
import {db} from "../Config/Firebase"
import {ref, child, get, set,push } from "firebase/database";

const dbRef = ref(db);

export const Getallproducts = async () => {
try {
  const response = await  get(child(dbRef, ProductEntity))

        if (response.exists()) {
            const data =response.val()
            console.log(">>>",data)
          return  Object.values(data)
        }
}catch (error) {
    console.log("Error" , error)
}
}

export  function AddProduct (data) {
    try{const productKey = push(child(ref(db),ProductEntity)).key;
const productEntityRef  = ref(db,ProductEntity+ "/" +productKey ) 
const response = set(productEntityRef,{
    pid :productKey,
    ...data
})
return response
}
catch (error){
    console.error("Error >>>", error)
}

}

export const getProductById = async (pid) => {
    try {
        return {
            name: 'qqqq1212'
        }
    } catch (error) {
        console.error('Error', error)
    }
}







