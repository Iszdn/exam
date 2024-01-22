import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BasketContext=createContext()


const BasketProvider = ( {children} ) => {
  const [basket, setbasket] = useLocalStorage("basketlist")
const subtotal=basket.reduce((initial,product)=>initial+parseInt(product.total),0)
  function addbasket(product) {
    const existbasket=basket.findIndex(x=>x._id===product._id)
    if (existbasket!==-1) {
     basket[existbasket].count++
     basket[existbasket].total=basket[existbasket].count*basket[existbasket].price
     setbasket([...basket])
    }
    else{
      setbasket([...basket,{...product,count:1}])  
    } 
  }
  function incbasket(product) {
    const existbasket=basket.findIndex(x=>x._id===product._id)
    if (existbasket!==-1) {
     basket[existbasket].count++
     basket[existbasket].total=basket[existbasket].count*basket[existbasket].price
     setbasket([...basket])
    }
     
  }
  function decbasket(product) {
    const existbasket=basket.findIndex(x=>x._id===product._id)
    if (existbasket!==-1) {
        if ( basket[existbasket].count===1) {
            return deletebasket(product)
        }
     basket[existbasket].count--
     basket[existbasket].total=basket[existbasket].count*basket[existbasket].price
     setbasket([...basket])
    }
     
  }
  function deletebasket(product) {
    const deletedbasket=basket.filter(x=>x._id!==product._id)
  
      setbasket(deletedbasket)
   
  }
  const data={
basket,setbasket,addbasket,deletebasket,incbasket,decbasket,subtotal
  }
  return (
    <BasketContext.Provider value={data}>
       {children} 
    </BasketContext.Provider>
  )
}

export default BasketProvider