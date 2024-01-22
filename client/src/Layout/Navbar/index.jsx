import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import "./index.scss"
const Navbar = () => {
  const {basket}=useContext(BasketContext)
  const {wish}=useContext(WishlistContext)
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(!open)
  }
  return (
    <nav id='navbar'>
      <div className="container">

      
<div className="nav">
  <div className="logo">
    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
    <p><strong>COURSE</strong></p>
  </div>
  <div className="navigations">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add">Admin</NavLink>
      </li>
     
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/wish"><i class="fa-regular fa-heart"></i><span>{wish.length}</span></NavLink>
      </li>
      <li>
        <NavLink to="/basket"><i class="fa-solid fa-cart-shopping"></i><span>{basket.length}</span></NavLink>
      </li>
    </ul>
  </div>
  <div className="tel">
    <div className="tel-img">
        <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
      </div>
    <Link>+43 4566 7788 2457</Link>
  </div>
  <div className="bar" onClick={()=>handleOpen()}>
  <i class="fa-solid fa-bars"></i>
  </div>
  {
  
  <div className="container">
     <div className={`nav-media ${open ? "active-nav" : ""}`}>
 <div className="navigationss">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add">Admin</NavLink>
      </li>
     
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/wish">Wishlist</NavLink>
      </li>
      <li>
        <NavLink to="/basket">Basket</NavLink>
      </li>
    </ul>
  </div>
</div> 
  </div>

}
</div>

</div>


    </nav>
  )
}

export default Navbar