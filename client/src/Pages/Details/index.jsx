import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import "./index.scss"
const Details = () => {
  const {wish,addWish}=useContext(WishlistContext)
    const {addbasket}=useContext(BasketContext)
  const [data, setData] = useState(null)
const {id}=useParams()

  async function getId(){
    const res=await axios(`http://localhost:3000/${id}`)
setData(res.data)
  }
  useEffect(() => {
    getId()
  }, [])
  
  return (
    <>
         <Helmet>
        <title>Details</title>
        
      </Helmet>
      <div className="details">
        <div className="container">
          <div className="row">


          </div>
        </div>
        {
          data && 
          <div className="col-lg-4">
          <div className='card-popular'>
<div className="image">
    <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg" alt="" />
</div>
<div className="info">
   <Link>{data.title}</Link>
<p>{data.desc}</p> 
<p><span className='red' onClick={()=>addWish(data)}>
    {
    wish.some(x=>x._id===data._id) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
    }
    </span>
    <span onClick={()=>addbasket(data)}><i class="fa-solid fa-cart-shopping"></i></span></p>
</div>
<div className="author">
    <div className="img-aut">
        <img src={data.image} alt="" />
    </div>
    <p>{data.author},<span>Author</span></p>
    <h6>${data.price}</h6>
</div>

    </div>  
          </div>

        }
      </div>
    </>
  )
}

export default Details