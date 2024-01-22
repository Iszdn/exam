import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import "./index.scss"
const Card = (product) => {
    const {wish,addWish}=useContext(WishlistContext)
    const {addbasket}=useContext(BasketContext)
  return (
    <div className='card-popular'>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="" />
</div>
<div className="info">
   <Link to={product._id}>{product.title}</Link>
<p>{product.desc}</p> 
<p><span className='red' onClick={()=>addWish(product)}>
    {
    wish.some(x=>x._id===product._id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
    }
    </span>
    <span onClick={()=>addbasket(product)}><i class="fa-solid fa-cart-shopping"></i></span></p>
</div>
<div className="author">
    <div className="img-aut">
        <img src={product.image} alt="" />
    </div>
    <p>{product.author},<span>Author</span></p>
    <h6>${product.price}</h6>
</div>

    </div>
  )
}

export default Card