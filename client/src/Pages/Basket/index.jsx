import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import "./index.scss"
const Wish = () => {
  const {wish,addWish}=useContext(WishlistContext)
  const {basket,deletebasket,incbasket,decbasket,subtotal}=useContext(BasketContext)
  return (
    <>
         <Helmet>
        <title>Basket</title>
        
      </Helmet>
      <div className='wish'>
        {
basket.length===0 ? <h2>basket is empty</h2> : 

<div className='wishlist'>
<div className="container">
  <div className="row">
    {
      basket && basket.map(product=>
         <div className="col-lg-4">
    <div className='card-popular'>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="" />
</div>
<div className="info">
   <Link to={product._id}>{product.title}</Link>
<p>{product.desc}</p> 
<p><span className='red' onClick={()=>deletebasket(product)}>
<i class="fa-solid fa-trash-can"></i>
    </span>
    <span className='red' onClick={()=>addWish(product)}>
    {
   wish.some(x=>x._id===product._id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
    }
    </span></p>
    <p>
      <div onClick={()=>incbasket(product)} className="btn">+</div>
      <div className='btn'>{product.count}</div>
      <div onClick={()=>decbasket(product)} className="btn">-</div>
   
    </p>
    <p>${product.total}</p>
</div>
<div className="author">
    <div className="img-aut">
        <img src={product.image} alt="" />
    </div>
    <p>{product.author},<span>Author</span></p>
    <h6>${product.price}</h6>
</div>

    </div>
    </div>
        )
    }
   
  </div>
  <p>Subtotal:${subtotal}</p>
</div>

</div>

        }
      
      
      </div>
    </>
  )
}

export default Wish