import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import "./index.scss"
const Wish = () => {
  const {deleteWish,wish}=useContext(WishlistContext)
  const {addbasket}=useContext(BasketContext)
  return (
    <>
         <Helmet>
        <title>Wish</title>
        
      </Helmet>
      <div className='wish'>
        {
wish.length===0 ? <h2>wishlist is empty</h2> : 

<div className='wishlist'>
<div className="container">
  <div className="row">
    {
      wish && wish.map(product=>
         <div className="col-lg-4">
    <div className='card-popular'>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="" />
</div>
<div className="info">
   <Link to={product._id}>{product.title}</Link>
<p>{product.desc}</p> 
<p><span className='red' onClick={()=>deleteWish(product)}>
<i class="fa-solid fa-heart-circle-minus"></i>
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
    </div>
        )
    }
   
  </div>
</div>
</div>
        }
      </div>
    </>
  )
}

export default Wish