import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

export const WishlistContext=createContext()


const WishlistProvider = ( {children} ) => {
  const [wish, setWish] = useLocalStorage("wishlist")

  function addWish(product) {
    const existWish=wish.findIndex(x=>x._id===product._id)
    if (existWish===-1) {
      setWish([...wish,{...product}])
      toast.success('Successfully added to wishlist!');

    }
    else{
      deleteWish(product)
    }
  }
  function deleteWish(product) {
    const deletedWish=wish.filter(x=>x._id!==product._id)
  
      setWish(deletedWish)
      toast.success('Successfully deleted!');
   
  }
  const data={
wish,setWish,addWish,deleteWish
  }
  return (
    <WishlistContext.Provider value={data}>
       {children} 
    </WishlistContext.Provider>
  )
}

export default WishlistProvider