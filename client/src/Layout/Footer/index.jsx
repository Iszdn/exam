import React from 'react'
import "./index.scss"
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="row top">
          <div className="col-lg-3 col-md-12 col-12">
            <div className="logo">
               <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h3>COURSE</h3>
            </div>
           
           <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
            
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <h4>Usefull Links</h4>
            <ul>


              <li>Testimonials
              </li>
              <li>FAQ
              </li>
              <li>Community
              </li>
              <li>Campus Pictures</li>
              <li>Tuitions</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-12">
            <h4>Contact</h4>
            <ul>
              <li> <img src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="" />  Blvd Libertad, 34 m05200 Arévalo</li>
              <li> <img src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="" /> 0034 37483 2445 322</li>
              <li><img src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="" />hello@company.com</li>
            </ul>
          </div>
        </div>
<div className="bott">
  <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
  <div className="sosial">
  <i class="fa-brands fa-pinterest-p"></i>
  <i class="fa-brands fa-linkedin-in"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-facebook-f"></i>
  <i class="fa-brands fa-twitter"></i>
  </div>
</div>
      </div>
    </footer>
  )
}

export default Footer