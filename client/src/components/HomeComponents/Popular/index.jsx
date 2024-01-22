import React, { useEffect, useState } from 'react'
import Card from '../../Card'
import axios from "axios"
import "./index.scss"
const Popular = () => {
  const [data, setData] = useState([])
  async function getData() {
    const res = await axios("http://localhost:3000/")
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section id='popular'>
<div className="header">
  <div className="div"></div>
  <h2>Popular Courses</h2>
</div>
<div className="container">
  <div className="row">
    {
      data && data.map(product=>
        <div className='col-lg-4 col-md-6 col-12'>
        <Card {...product}/>
        </div>
        )
    }
 
    
  </div>
</div>
    </section>
  )
}

export default Popular