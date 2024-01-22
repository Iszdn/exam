import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/HomeComponents/HeaderSec'
import OurServices from '../../components/HomeComponents/OurService'
import Popular from '../../components/HomeComponents/Popular'
import Register from '../../components/HomeComponents/Register'
import UpComing from '../../components/HomeComponents/UpComing'
const HomePage = () => {
  return (
    <>
         <Helmet>
        <title>HomePage</title>
        
      </Helmet>
     
      <Header/>
      <Popular/>
      <Register/>
      <OurServices/>
      <UpComing/>
     
    </>
  )
}

export default HomePage